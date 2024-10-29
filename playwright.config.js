// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

module.exports = defineConfig({
  testDir: './tests',
  snapshotPathTemplate: 'tests/ui/snapshot/{arg}{ext}',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 5,
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.1 
    }
  },
  reporter: [
    ['list'],
    ['json', { outputFile: 'report/json/report.json' }],
    ['html', { outputFolder: 'report/html' , open: 'never' }]
  ],
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'desktop-smoke-test',
      use: { 
        ...devices['Desktop Chrome'],
        userAgent: 'staging-automation-test'
      },
      grep: /^(?!.*@api).*@smoke.*/
    },
    {
      name: 'mobile-device',
      use: { ...devices['Pixel 7']},
      grep: /@mobile/,
      ignoreSnapshots: true
    },
    {
       name: 'firefox',
       use: { ...devices['Desktop Firefox'] },
    }
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // }
  ],
});

