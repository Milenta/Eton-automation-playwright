# Playwright Eton automation tests

## Local development, how to setup and use:

## Prerequest:

- Install Node.js
- Clone repo from github
- Open code in ide (example VSCode)
- In terminal run: 'npm ci' to install all dependencies

## Running custom commands:

- 'npm run prettier:write' - to format code
- 'npm run prettier:check' - to check if code is formated properly
- 'npx playwright test' - run tests headless
- 'npx playwright test --headed' - run tests headed

## Best practeses:

- we are using Husky for pre-commit checks. In our case it is to check is code formated properly
