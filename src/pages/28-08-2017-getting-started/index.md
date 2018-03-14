---
path: "/second"
date: "2017-07-12T17:12:33.962Z"
title: "My First Gatsby Post"
tags: [first]
excerpt: "this is a test"
---

# Start fast keep be faster

tl;dr

* embrace all the per tools
* its much easier to run perf tools on public projects which are hosted on github ( which is not the case for most clicked sites.... maybe thats the reason why many huge sites are not as fast as they should be)
* use the tools and contribute back

The story behind this post is a classical one. I am a web developer who had bought a domain, server and started a blog. But killed it after a year or so. I think that happens really often 🙈. But I will try it againg and start this blog by also talking about it.

Its actually a pretty shinny eraaa when you are a web developer especiall in the JavaScript scene. There is a lot going on.
Use a fast base and embrace all the Open Source performance tools to not get slower

# automate build process

* travis deployment
* zeit urls

For each feature we want to make sure to run some steps to check the performance therefore we need to make sure that each pull request gets deployed to a different url to run tests on the url and make sure that all deployments have same settings. We use zeit now.sh to make immutable deployments which are deployed by travis CI

gatsbyjs
[lighthouse](https://github.com/ebidel/lighthouse-ci)
1.add lighthouse
First we want to automate the deployment process now makes it pretty easy to test all our changes on perf aspects before mergin pull requests. it generates a custom url for al deployments.

sitespeed io recently also used in gitlab integation
bundlesize
webpagetest

# bundlesize

[budlesize](https://github.com/siddharthkp/bundlesize)
bundlesize tells you wheter you run over you budget
