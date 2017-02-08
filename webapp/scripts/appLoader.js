

// RequireJS
define([    
    // Define a list of dependencies
    'require',
    'jQuery', 
    'jQueryUI', 
    'underscore', 
    '/scripts/definitionsLoader.js', 
    'angular', 
    'angular.bootstrap', 
    'ui.router', 
    'angular.ui'
    ],
    function (require,jQuery,jQueryUI,_,definitionsLoader,angular) {

     require(definitionsLoader.scriptsToLoad,function(){
        initializeApp(angular);
     });


    function initializeApp(angular) {
        var application = angular.module('DashboardApp', definitionsLoader.modulesToLoad)
            .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                //When no route redirect to home
                $urlRouterProvider.when('', '/home');
                // if the path doesn't match any of the urls you configured
                // otherwise will take care of routing the user to the specified url
                $urlRouterProvider.otherwise('/home');

                $stateProvider.state('home', {
                    url: '/home',
                    templateUrl: './views/main.html',
                    controller: ['$scope', function ($scope) {
                        $scope.awesomeThings = [
                            'Is HTML5',
                            'AngularJS Based',
                            'Yeoman based build process',
                            'Bootstrap based CSS',
                            'Karma tests',
                            'Angular Bootstrap Directives',
                            'Angular UI Directives',
                            'Best Practices about code organization',
                            'Extensible'
                        ];
                    }]
                });

                var states = definitionsLoader.statesToConfigure;
                for (var i = 0; i < states.length; i++) {
                    var state = states[i];
                    $stateProvider.state(state.stateName, {url: state.url, abstract: state.abstract, templateUrl: state.templateUrl, controller: state.controller});
                }
            }]).run(['$rootScope', function ($rootScope) {
                $rootScope.modules = definitionsLoader.modules;
            }]);
        //Now bootstrap application

        angular.bootstrap(document, ['DashboardApp']);
    };


})