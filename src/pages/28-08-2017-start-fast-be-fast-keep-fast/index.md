---
path: "/performance"
date: "2017-07-12T17:12:33.962Z"
title: "Start fast, be fast, keep fast!"
tags: [performance, fast, web]
excerpt: "this is a test"
---

# Start fast, be fast, keep fast!

tl;dr

* try to embrace all OS performance tools
* its much easier to run perf tools on public projects which are hosted on github ( which is often not the case for most a lot of sites.... maybe thats the reason why many popular sites are not as fast as they can be)
* use the tools and contribute back :)

I am a passionate developer especially for the visual parts of a software who had bought a domain, a server and started a blog. But shut it down after a year or so. When I asked several of my colleagues they all told me that they had started a blog while back ago and closed it... I think that happens really to a lot of us 🙈. But I want to try it again and start this blog by also talking about topics which fascinate me it. The last time I have started to create a website I have lost the interessed and passion about the site pretty fast. I didn't have improve or develope it furthermore. Now I want to start again and share some knowledge and my opinions on diffrerent topics since I have recognized that when I write things down I feel that I can keep the knowledge.

Its actually a pretty shinny eraaa when you are a web developer especiall in the JavaScript scene. There is a lot going on.
Use a fast base and embrace all the Open Source performance tools to not get slower

## First Automate the build process

* travis deployment
* zeit urls

For each feature we want to make sure to run some steps to check the performance therefore we need to make sure that each pull request gets deployed to a different url to run tests on the url and make sure that all deployments have same settings. We use zeit now.sh to make immutable deployments which are deployed by travis CI

## First automate the performance testing

### defining your budget

performance budgets are an essential but under-appreciated part of product success and team health. Most partners we work with are not aware of the real-world operating environment and make inappropriate technology choices as a result. We set a budget in time of <= 5 seconds first-load Time-to-Interactive and <= 2s for subsequent loads. We constrain ourselves to a real-world baseline device + network configuration to measure progress. The default global baseline is a ~$200 Android device on a 400Kbps link with a 400ms round-trip-time (“RTT”). This translates into a budget of ~130-170KB GZIP of critical-path resources, depending on composition — the more JS you include, the smaller the bundle must be.

https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/

### Lightweight tools

* [size-limits](https://github.com/ai/size-limit)

perfect for checking the whole bundle size

* [budlesize](https://github.com/siddharthkp/bundlesize)

perfect for checking each vendor (commons) bundle and async chunks

There are some easy integrated open-source-tools to check the size of your bundle for each deployment. This makes sure you dont deploy an oversized budget.

gatsbyjs
[lighthouse](https://github.com/ebidel/lighthouse-ci)
1.add lighthouse
First we want to automate the deployment process now makes it pretty easy to test all our changes on perf aspects before mergin pull requests. it generates a custom url for al deployments.

sitespeed io recently also used in gitlab integation
bundlesize

webpagetest
