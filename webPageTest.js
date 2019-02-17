const GitHubApi = require('@octokit/rest');
const webPageTest = require('webpagetest');
const axios = require('axios');

if (
  (process.env.WEBPAGETEST_API_KEY ||
    process.env.TEST_URL ||
    process.env.GIT_TOKEN ||
    process.env.SLACK_HOOK_URL ||
    process.env.GIT_BRANCH) === undefined
) {
  throw new Error(
    'The script hasnt run since you did not provide a webpagtest api key a test url and a git token'
  );
}

const webpagetestApiKey = process.env.WEBPAGETEST_API_KEY;
const testURL = process.env.TEST_URL;
const gitToken = process.env.GIT_TOKEN;
const gitBranch = process.env.GIT_BRANCH;
const slackHookUrl = process.env.SLACK_HOOK_URL;
const wpt = new webPageTest('www.webpagetest.org', webpagetestApiKey);

const myRepo = 'jc-website';
const myOwner = 'JCofman';
let dataAsMarkdown = '';

// init github
var github = new GitHubApi({ auth: `token ${gitToken}` });

wpt.runTest(
  testURL,
  {
    video: true,
    pollResults: 5,
    location: 'Dulles_MotoG4',
    connectivity: '3GSlow',
    mobile: 1,
    device: 'Motorola G (gen 4)',
    timeout: 1000,
    lighthouse: true,
  },
  function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      convertToMarkdown(result);
    }
  }
);

const humanFileSize = size => {
  var i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  );
};

const convertToMarkdown = result => {
  dataAsMarkdown = `
# WebpageTest report
* run id: ${result.data.id}
* URL testid: ${result.data.testUrl}
* Summary of the test: ${result.data.summary}
* location where the test has run: ${result.data.location}
* from run parameter: ${result.data.from}
* connectivity: ${result.data.connectivity}
* successFullRuns: ${result.data.successfulFVRuns}
## Report
# FilmStrip
## FirstView median
${result.data.median.firstView.videoFrames
  .map((item, index) => {
    if (index === 0) {
      return `| ${item.time} milliseconds |`;
    } else {
      return ` ${item.time} milliseconds |`;
    }
  })
  .join('')}
${result.data.median.firstView.videoFrames
  .map((item, index) => {
    if (index === 0) {
      return `|--------------|`;
    } else {
      return `--------------|`;
    }
  })
  .join('')}
${result.data.median.firstView.videoFrames
  .map((item, index) => {
    if (index === 0) {
      return `| ![alt text](${item.image}) |`;
    } else {
      return ` ![alt text](${item.image}) |`;
    }
  })
  .join('')}
${result.data.median.firstView.videoFrames
  .map((item, index) => {
    if (index === 0) {
      return `| ${item.VisuallyComplete} |`;
    } else {
      return ` ${item.VisuallyComplete} |`;
    }
  })
  .join('')}     
      
## ReapeatView median
${result.data.median.repeatView.videoFrames
  .map((item, index) => {
    if (index === 0) {
      return `| ${item.time} milliseconds |`;
    } else {
      return ` ${item.time} milliseconds |`;
    }
  })
  .join('')}
${result.data.median.repeatView.videoFrames
  .map((item, index) => {
    if (index === 0) {
      return `|--------------|`;
    } else {
      return `--------------|`;
    }
  })
  .join('')}
${result.data.median.repeatView.videoFrames
  .map((item, index) => {
    if (index === 0) {
      return `| ![alt text](${item.image}) |`;
    } else {
      return ` ![alt text](${item.image}) |`;
    }
  })
  .join('')}
${result.data.median.repeatView.videoFrames
  .map((item, index) => {
    if (index === 0) {
      return `| ${item.VisuallyComplete} |`;
    } else {
      return ` ${item.VisuallyComplete} |`;
    }
  })
  .join('')} 
# VisualMetrics
## Metrics Median Run
| View | First Paint | First Contentful Paint | First Meaningful Paint | Time to First Byte | Time to interactive |  Render Started |  Visualy Completed | SpeedIndex | Load Time |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
FirstView  | ${result.data.median.firstView.firstPaint} | ${
    result.data.median.firstView.firstContentfulPaint
  } | ${result.data.median.firstView.firstMeaningfulPaint} | ${
    result.data.median.firstView['lighthouse.Performance.interactive']
  } | ${result.data.median.firstView.TTFB} | ${
    result.data.median.firstView.render
  } | ${result.data.median.firstView.visualComplete} | ${
    result.data.median.firstView.SpeedIndex
  } | ${result.data.median.firstView.loadTime} |  
RepeatView | ${result.data.median.repeatView.firstPaint} | ${
    result.data.median.repeatView.firstContentfulPaint
  } | ${result.data.median.repeatView.firstMeaningfulPaint} | ${
    result.data.median.repeatView['lighthouse.Performance.interactive']
  } | ${result.data.median.repeatView.TTFB} | ${
    result.data.median.repeatView.render
  } | ${result.data.median.repeatView.visualComplete} | ${
    result.data.median.repeatView.SpeedIndex
  } | ${result.data.median.repeatView.loadTime} |  
  ## Metrics Average Run
  | View | First Paint | First Contentful Paint | First Meaningful Paint | Time to First Byte | Time to interactive |  Render Started |  Visualy Completed | SpeedIndex | Load Time |
  |----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
  FirstView  | ${result.data.average.firstView.firstPaint} | ${
    result.data.average.firstView.firstContentfulPaint
  } | ${result.data.average.firstView.firstMeaningfulPaint} | ${
    result.data.average.firstView['lighthouse.Performance.interactive']
  } | ${result.data.average.firstView.TTFB} | ${
    result.data.average.firstView.render
  } | ${result.data.average.firstView.visualComplete} | ${
    result.data.average.firstView.SpeedIndex
  } | ${result.data.average.firstView.loadTime} |  
  RepeatView | ${result.data.average.repeatView.firstPaint} | ${
    result.data.average.repeatView.firstContentfulPaint
  } | ${result.data.average.repeatView.firstMeaningfulPaint} | ${
    result.data.average.repeatView['lighthouse.Performance.interactive']
  } | ${result.data.average.repeatView.TTFB} | ${
    result.data.average.repeatView.render
  } | ${result.data.average.repeatView.visualComplete} | ${
    result.data.average.repeatView.SpeedIndex
  } | ${result.data.average.repeatView.loadTime} |  
# Waterfall
## FirstView median
![alt text](${result.data.median.firstView.images.waterfall})
# Files 
## FirstView median Files
| File | FileSize | 
|----------|----------|
 ${result.data.median.firstView.requests
   .map(request => `${request.url}|${humanFileSize(request.bytesIn)} \r\n`)
   .join('')}
 
    `;
  /**
   * get latest commit
   * and push webpagetest results as comment to latest commit
   */
  github.repos
    .getCommit({ owner: myOwner, repo: myRepo, sha: gitBranch })
    .then(commit => {
      return github.repos.createCommitComment({
        owner: myOwner,
        repo: myRepo,
        sha: commit.data.sha,
        body: dataAsMarkdown,
      });
    })
    .catch(error => {
      console.log(`ERROR could either not get commits of the repo ${myRepo} of the owner ${myOwner}
            or could not sent the commit to the repositorie ERRORMSG: ${error}
            `);
    });
  axios
    .post(slackHookUrl, {
      text: ` ⚡️🚀🚗💨  *New WebPagetest Results* for ${testURL} ⚡️🚀🚗💨 
             _First Paint:_ ${result.data.median.firstView.firstPaint}
             _First Contentful Paint:_ ${
               result.data.median.firstView.firstContentfulPaint
             }
             _First Meaningful Paint:_ ${
               result.data.median.firstView.firstMeaningfulPaint
             }
             _Time to Interactive:_ ${
               result.data.median.firstView[
                 'lighthouse.Performance.interactive'
               ]
             }
             _SpeedIndex:_ ${result.data.median.firstView.SpeedIndex}
      `,
    })
    .then(function(response) {
      console.log('SEND TO SLACK');
    })
    .catch(function(error) {
      console.log(error);
    });
};
