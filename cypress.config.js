const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
      plugins: [createEsbuildPlugin(config)],
      });
      
      
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      
      
      return config;
    },
    specPattern: './cypress/e2e/features/**/*.feature', // Chemin des fichiers .feature
    //stepDefinitions: './cypress/e2e/stepdefinitions/**/*.js',
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    //stepDefinitions: "cypress/e2e/step_definitions", // Chemin des définitions d'étapes
    video: true, // Active les vidéos pour chaque test
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  
  "cypress-cucumber-preprocessor": {
     "stepDefinitions": './cypress/e2e/stepdefinitions/**/*.js',
     
     "filterSpecs": true,
     "omitFiltered": true,
     "json": {
       "enabled": true,
       "formatter": "cucumber-json-formatter",
       "output": "cypress/reports/json/cucumber-report.json",
    },
   "html": {
    "enabled": true
  }, 
  reporter: 'cypress-mochawesome-reporter', // Définit Mochawesome comme reporter
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  },
  
  
    
}
});
