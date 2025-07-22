const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ndiquy', 
  pageLoadTimeout: 300000, 
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
})
