const { defineConfig } = require('cypress');
const baseConfig = require('./cypress.config');
const e2e = {
    baseUrl: 'https://www.saucedemo.com/',
    env: {
        username: 'dev_sauce',
        password: 'dev_secret'
    }
}; 

module.exports = defineConfig({
    ...baseConfig,
    e2e
});