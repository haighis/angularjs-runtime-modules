/**
    Defines a list of dependencies the application shell has
 */

require.config({
    baseUrl: 'extensionModules',
    paths: {
        "jQuery": "/bower_components/jquery/jquery.min",
        "jQueryUI": "/bower_components/jquery-ui/ui/minified/jquery-ui.min",
        "underscore": "/bower_components/underscore/underscore-min",
        "angular": "/bower_components/angular/angular.min",
        "angular.bootstrap": "/bower_components/angular-bootstrap/ui-bootstrap-tpls.min",
        "angular.ui": "/bower_components/angular-ui/build/angular-ui.min",
        "ui.router": "/bower_components/ui-router/release/angular-ui-router.min"
    },
    shim: {
        "jQuery": {
            exports: "jQuery"
        },
        "jQueryUI": {
            deps: ["jQuery"]
        },
        'underscore': {
            exports: '_'
        },
        'angular': {
            deps: ['jQuery', 'jQueryUI'],
            exports: 'angular'
        },
        'ui.router': {
            deps: ['angular']
        },
        "angular.bootstrap": {
            deps: ['angular']
        },
        "angular.ui": {
            deps: ['angular', 'jQueryUI']
        }
    }
});

// Start the main app logic.
require(['/scripts/appLoader.js']);
