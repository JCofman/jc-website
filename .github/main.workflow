workflow "Run WebPagetest Audit" {
  on = "push"
  resolves = ["WebPageTestAction"]
}

action "WebPageTestAction" {
  uses = "JCofman/webPagetestAction@v0.0.3-alpha"
  env = {
    TEST_URL = "https://jcofman.de"
  }
  secrets = ["GITHUB_TOKEN", "WEBPAGETEST_API_KEY"]
}
