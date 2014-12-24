/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'planlunch',
    podModulePrefix: 'planlunch/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.API_URL = '';

    ENV.contentSecurityPolicy = {
      'style-src': "'self' 'unsafe-inline' maxcdn.bootstrapcdn.com",
      'img-src': "'self' *.mapbox.com *.google-analytics.com",
      'connect-src': "'self' ws://localhost:35729 ws://0.0.0.0:35729 *.mapbox.com",
      'script-src': "'self' 'unsafe-eval' localhost:35729 0.0.0.0:35729 'unsafe-inline' *.google-analytics.com"
    }
  }

  if (environment === 'test') {
    ENV.API_URL = '';
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.API_URL = 'http://planlunch-server.herokuapp.com/';
  }

  return ENV;
};
