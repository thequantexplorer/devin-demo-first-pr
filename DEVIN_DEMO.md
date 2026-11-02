# Devin lab: Fix a failing test and open your first PR

**What it shows:** One unit test in this repo fails because of a real off-by-one bug. Devin runs the tests, finds the bug in the code, fixes the code (not the test), and opens a pull request.

**Needs:** A GitHub account and a Devin account. Nothing to install.

**Time:** About 10 to 20 minutes.

More labs: [devinworkshop.dev](https://devinworkshop.dev)

## The problem

The README says the bulk discount starts at **10 or more** units. Run `npm test` and one test fails:

```text
not ok 4 - bulk discount starts at exactly 10 units
  error: |-
    Expected values to be strictly equal:

    0 !== 10
# tests 9
# pass 8
# fail 1
```

You don't need to run this yourself. Devin will.

## Set it up

1. At the top of this repo on GitHub, click **Use this template**, then **Create a new repository**.
2. Pick your GitHub account as the **Owner**. Keep the name `devin-demo-first-pr`. The prompt below uses that name. Click **Create repository**.
   Use the template, not a fork. A pull request on a fork goes to the original repo by default.
3. In Devin, open [Settings → Connections → GitHub](https://app.devin.ai/settings/connections/github). If GitHub is not connected yet, click **Add Connection** and follow the steps. Make sure Devin can access your new `devin-demo-first-pr` repo (choose **All repositories**, or add it under **Select repositories**).

## Prompt

Go to [app.devin.ai](https://app.devin.ai), start a new session, and paste this. Replace `<you>` with your GitHub username.

```text
In https://github.com/<you>/devin-demo-first-pr, run the tests with `npm test`. One test fails.

Find the bug in the code that makes it fail and fix it. Do not change the test. The README describes the intended behavior.

Run `npm test` again and make sure every test passes. Then open a pull request to main. In the PR description, explain the bug in one or two sentences and paste the test summary from before and after the fix.
```

## What to watch

- Devin runs `npm test` first and reads the failing test before it edits anything.
- It changes `src/pricing.js`, not `test/pricing.test.js`.

## You're done when

- There is an open pull request on your copy that fixes the bug in `src/pricing.js`.
- The **Tests** check on the pull request is green.
- The PR description explains the bug and shows the tests before and after.
