const { defineConfig } = require("cypress");
const dotenv = require('dotenv')
const cypressDotenv = require('cypress-dotenv');

dotenv.config({ path: './cypress/env/.env.test' });

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://github.com',

    env: {
      githubEmail: process.env.GITHUB_EMAIL,
      githubPassword: process.env.GITHUB_PASSWORD,
    },

    setupNodeEvents(on, config) {
      config = cypressDotenv(config, { path: './cypress/env/.env.test' });
      return config;
    },
    
  },

  defaultCommandTimeout: 45000,
  pageLoadTimeout: 30000,
  requestTimeout: 30000

});
