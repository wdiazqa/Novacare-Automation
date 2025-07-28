const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ndiquy', 
  pageLoadTimeout: 600000,
  defaultCommandTimeout: 60000,
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
}) 
