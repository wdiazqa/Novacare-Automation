const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ndiquy', 
  pageLoadTimeout: 600000,
  defaultCommandTimeout: 60000,
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
}) 
