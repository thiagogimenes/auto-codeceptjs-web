const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'auto-codeceptjs-web',
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://demo.automationtesting.in/Index.html',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha:{},
  plugins:{
    retryFailedStep:{
      enabled: true
    },
    screenshotOnFail:{

    }
  }
}