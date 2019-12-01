name: Test build and deploy site

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v1
        with:
          node-version: 12
      - run: yarn 
      - run: yarn test
      - run: yarn test:size

  build-and-deploy-prod:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/master'
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v1
        with:
          node-version: 12
      - name: Branch name
        run: echo running on branch ${GITHUB_REF##*/}
      - name: Build prod
        run: yarn build:prod
      - name: Deploy prod
        run: yarn deploy:prod
        env:
          NOW_TOKEN: ${{now_token}}

  build-and-deploy-feature:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref != 'refs/heads/master'
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v1
        with:
          node-version: 12
      - name: Branch name
        run: echo running on branch ${GITHUB_REF##*/}
      - name: Build feature
        run: yarn build
      - name: Deploy prod
        run: yarn deploy:prod
        env:
          NOW_TOKEN: ${{now_token}}
