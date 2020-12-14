'use strict'

module.exports = {
  rules: {
    'no-use-img': require('./rules/no-use-img.js'),
  },
  rulesConfig: {
    'no-use-img': 1,
  },
  configs: {
    recommended: {
      rules: {
        'no-use-img': 'error',
      }
    }
  }
}
