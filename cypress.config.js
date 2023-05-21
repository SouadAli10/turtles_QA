const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://katalon-demo-cura.herokuapp.com/',
    specPattern: `cypress/e2e/*.cy.{js,jsx,ts,tsx}`,
  },
});