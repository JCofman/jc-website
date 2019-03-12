---
path: '/webpagetest-github-action'
date: '2019-02-24T17:12:33.962Z'
title: 'Print webPagetest.org results as a GitHub action 🎬'
featuredImage: './featured-image.jpg'
headerImage: './header.jpg'
tags: [performance, fast, web]
excerpt: 'This post will show you how to leverage some basic and some more advanced tools when starting a web frontend project to keep it performant.'
---

tl;dr

- Actions are still in <b>beta</b> and shouldn`t be used in production
- You may dont need any external CI / CD providers for your GitHub projects in the near future
- GitHub Actions make interacting with GitHub API much easier
- They empower you to build new and better automation workflows
- WebPageTest is amazing! :D

[GitHub Actions](https://github.com/features/actions) were introduced several months ago and are still in
beta. When I first heard about GitHub Actions I immediatly compared
them with CI / CD features from GitLab. In my opinion that's exactly what they offer.
The only additional feature but also the most powerfull is the ability to share Actions.

Before GitHub Actions were introduced you had to build automation workflows
with tools like [Travis](https://travis-ci.org/) or [CircleCI](https://circleci.com/)
but it was often not really convenient to react on different events i.e. push, issues or releases.

With Actions you can build custom workflows and act in repsonse on GitHubs platform specific events.
If you want a more detailed introduction about GitHub Actions
you can checkout Sara Drasners post on [CSS-TRICKS](https://css-tricks.com/introducing-github-actions/)
or a really good starter on building actions with node by [Jason Etcovitch](https://jasonet.co/posts/building-github-actions-in-node/).
I used the package by Jason Etcovitch to build the following Action.

In this post I will show you how to write a node.js based GitHub Action which prints
[WebPageTest.org](https://www.webpagetest.org/) results on a pull-request. I saw something like
this on a Chrome Dev Summit talk while back ago. I think that talk was by Addy Osmani but I wasn't able to find it aynmore.

⚠️ I won´t cover node fundamentals in this post so make sure you have some familarity with JavaScript and node ⚠️.

# Create a new Action based on the actions-toolkit

The [actions toolkit](https://github.com/JasonEtco/actions-toolkits) is a helper which provides some methods to work easier with GitHub Actions.
You can bootstrap a new action by running

```shell
npx actions-toolkit my-cool-action
```

This step create three files which we need to create a action which runs a node application

```
├── Dockerfile
├── entrypoint.js
└── package.json
```

The Dockerfile is the basis

```jsx
FROM node:slim

# A bunch of `LABEL` fields for GitHub to index
LABEL "com.github.actions.name"="WebPageTestActions"
LABEL "com.github.actions.description"="Print webPagetest.org results"
LABEL "com.github.actions.icon"="gear"
LABEL "com.github.actions.color"="red"
LABEL "repository"="https://github.com/JCofman/webPagetestAction"
LABEL "homepage"="https://github.com/JCofman/webPagetestAction"
LABEL "maintainer"="Jacob Cofman <cofman.jacob@gmail.com>"

# Copy over project files
COPY . .

# Install dependencies
RUN npm install

# This is what GitHub will run
ENTRYPOINT ["node", "/entrypoint.js"]
```

As you can see I don't pass down any environment, secrets or arguments but they will be available inside the`entrypoint.js` file.

Now we need to customize the entrypoint.js entry file which runs the WebPageTest script.
So this is the minimalistic setup If you would run these action you would get a basic hello world example.

```jsx
// entrypoint.js
console.log('Here we will print the webPagetest.org results');
```

WebPageTest is a node wrapper to interact with the webpagetest.org API.
To run WebPageTest we need to add it to our dependencies.

```zsh
npm install webpagetest
# or
yarn add webpagetest
```

Finally we need to write the script to run the audit and format the results. Since the code especially the formatting is a bit heavy I wont insert it header.jpg
You can check it out on the github project if you want to. The basic idea is this

- require dependencies
- check wheter environment variables exist
- run the script

```js
// index.js
const { Toolkit } = require('actions-toolkit');
const tools = new Toolkit();
const webPageTest = require('webpagetest');
const argv = require('yargs').argv;

const { event, payload, sha } = tools.context;

// check pre-requirements
if (!checkForMissingEnv) tools.exit.failure('Failed!');

// run the script
runAudit();

async function runAudit() {
  try {
    if (event === 'push') {
      tools.log('### Action triggered! ###');

      // 1. An authenticated instance of `@octokit/rest`, a GitHub API SDK
      const octokit = tools.github;

      // initialize webPagetest
      const wpt = new webPageTest(
        'www.webpagetest.org',
        process.env.WEBPAGETEST_API_KEY
      );

      // 2. run tests and save results
      const webpagetestResults = await runWebPagetest(wpt);

      // 3. convert results to markdown
      const finalResultsAsMarkdown = convertToMarkdown(webpagetestResults);

      // 4. print results to as commit comment
      const { owner, repo } = tools.context.repo({ ref: `${payload.ref}` });

      await octokit.repos.createCommitComment({
        owner,
        repo,
        sha,
        body: finalResultsAsMarkdown,
      });

      tools.exit.success('Succesfully run!');
    }
  } catch (error) {
    tools.log.error(`Something went wrong ${error}!`);
  }
}
```

In conclusion I think that happens to a lot of people 🙈. But I want to try it again and start this blog by also talking about topics which fascinate me it. The last time I have started to create a website I have lost the interessed and passion about the my own site pretty fast.
I didn't have improve or develope it furthermore after I had finalized it.
Now I want to start again and share some knowledge and my opinions on diffrerent topics since I have recognized that when I write things down I feel that I can keep the knowledge much better.
