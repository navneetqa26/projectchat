const { defineConfig } = require("cypress");
const envData = require("./envdata.js");
console.log(envData);
module.exports = defineConfig({
   reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'cypress/reports/html',
    overwrite: false,
    html: true,
    json: true,
  },
  
 video: true,
 videosFolder: "cypress/videos",
 screenshotsFolder: "cypress/screenshots",
 viewportWidth: 1280,
 env:envData,
  e2e: {
    video: true,
    viewportWidth: 1300,
    videoCompression: 30,
    baseUrl: envData.baseUrl,
 setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);}
      
  },
});
