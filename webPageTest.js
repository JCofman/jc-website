var GitHubApi = require("@octokit/rest");
var webPageTest = require("webpagetest");

if (
  (process.env.WEBPAGETEST_API_KEY ||
    process.env.TEST_URL ||
    process.env.GIT_TOKEN) === undefined
) {
  throw new Error(
    "The script hasnt run since you did not provide a webpagtest api key a test url and a git token"
  );
}
const wpt = new webPageTest(
  "www.webpagetest.org",
  process.env.WEBPAGETEST_API_KEY
);

var myRepo = "jc-website";
var myOwner = "JCofman";
var dataAsMarkdown = "";
const testURL = process.env.TEST_URL;

// init github
var github = new GitHubApi();

github.authenticate({ type: "oauth", token: process.env.GIT_TOKEN });

wpt.runTest(
  testURL,
  {
    video: true,
    pollResults: 5,
    timeout: 1000,
    lighthouse: true
  },
  function(err, result) {
    console.log(err || result);
    if (result) {
      convertToMarkdown(result);
    }
  }
);

const humanFileSize = size => {
  var i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    " " +
    ["B", "kB", "MB", "GB", "TB"][i]
  );
};

const convertToMarkdown = result => {
  console.log("FIRSTVIEW Load time:", result.data.average.firstView.loadTime);
  console.log("FIRSTVIEW First byte:", result.data.average.firstView.TTFB);
  console.log("FIRSTVIEW Start render:", result.data.average.firstView.render);
  console.log(
    "FIRSTVIEW Speed Index:",
    result.data.average.firstView.SpeedIndex
  );
  console.log(
    "FIRSTVIEW DOM elements:",
    result.data.average.firstView.domElements
  );
  console.log(
    "FIRSTVIEW VisualComplete:",
    result.data.average.firstView.visualComplete
  );

  console.log(
    "(FIRSTVIEW Doc complete) Requests:",
    result.data.average.firstView.requestsDoc
  );
  console.log(
    "(FIRSTVIEW Doc complete) Bytes in:",
    result.data.average.firstView.bytesInDoc
  );

  console.log(
    "(FIRSTVIEW Fully loaded) Time:",
    result.data.average.firstView.fullyLoaded
  );
  console.log(
    "(FIRSTVIEW Fully loaded) Requests:",
    result.data.average.firstView.requestsFull
  );
  console.log(
    "(FIRSTVIEW Fully loaded) Bytes in:",
    result.data.average.firstView.bytesIn
  );

  console.log(`URL tested: ${result.data.testUrl}`);
  console.log(`* Summary of the test: ${result.data.summary}`);

  dataAsMarkdown = `
# WebpageTest report
* run id: ${result.data.id}
* URL testid: ${result.data.testUrl}
* Summary of the test: ${result.data.summary}
* location where the test has run: ${result.data.location}
* from run parameter: ${result.data.from}
* connectivity: ${result.data.connectivity}
* runs: ${result.data.runs}, successFullRuns: ${result.data.successfulFVRuns}

## Report
### FirstView
| File | FileSize | 
|----------|----------|
 ${result.data.median.firstView.requests
   .map(request => `${request.url}|${humanFileSize(request.bytesIn)} \r\n`)
   .join("")}

# VisualMetrics
## Metrics Median
| View | Time to First Byte |  Render Started  |  Visualy Completed | SpeedIndex | Load Time |
|----------|----------|:-------------:|------:| ------:|------:|
FirstView  | ${result.data.median.firstView.TTFB} | ${
    result.data.median.firstView.render
  } | ${result.data.median.firstView.visualComplete} | ${
    result.data.median.firstView.SpeedIndex
  } | ${result.data.median.firstView.loadTime} |  
RepeatView | ${result.data.median.repeatView.TTFB} | ${
    result.data.median.repeatView.render
  } | ${result.data.median.repeatView.visualComplete} | ${
    result.data.median.repeatView.SpeedIndex
  } | ${result.data.median.repeatView.loadTime} |  

  ## Metrics Average
| View | Time to First Byte |  Render Started  |  Visualy Completed | SpeedIndex | Load Time |
|----------|----------|:-------------:|------:| ------:|------:|
FirstView  | ${result.data.average.firstView.TTFB} | ${
    result.data.average.firstView.render
  } | ${result.data.average.firstView.visualComplete} | ${
    result.data.average.firstView.SpeedIndex
  } | ${result.data.average.firstView.loadTime} |  
RepeatView | ${result.data.average.repeatView.TTFB} | ${
    result.data.average.repeatView.render
  } | ${result.data.average.repeatView.visualComplete} | ${
    result.data.average.repeatView.SpeedIndex
  } | ${result.data.average.repeatView.loadTime} |  


# Waterfall

## FirstView median
![alt text](${result.data.median.firstView.images.waterfall})


# FilmStrip
## FirstView median
${result.data.median.firstView.videoFrames
    .map(
      item => `
| ${item.time} milliseconds|
|--------------|
| ![alt text](${item.image})|
| ${item.VisuallyComplete}|
    `
    )
    .join("")}
        

## ReapeatView median
${result.data.median.repeatView.videoFrames
    .map(
      item => `
| ${item.time} milliseconds|
|--------------|
| ![alt text](${item.image})|
| ${item.VisuallyComplete}|
    `
    )
    .join("")}
    `;
  /**
   * first get all commits
   * then get latest
   * and push webpagetest results as comment to latest commit
   */

  github.repos
    .getCommits({ owner: myOwner, repo: myRepo })
    .then(allCommits => {
      return github.repos.createCommitComment({
        owner: myOwner,
        repo: myRepo,
        sha: allCommits.data[0].sha,
        body: dataAsMarkdown
      });
    })
    .catch(error => {
      console.log(`ERROR could either not get commits of the repo ${myRepo} of the owner ${myOwner}
            or could not sent the commit to the repositorie ERRORMSG: ${error}
            `);
    });
};
