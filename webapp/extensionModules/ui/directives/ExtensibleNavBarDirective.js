
define(['angular','ui/module'],function(angular){
    angular.module('DashboardAppUIModule').directive("extNavBar", function () {
        return {
            restrict: "E",        // directive is an Element (not Attribute)
            templateUrl: "./extensionModules/ui/directives/ExtensibleNavBarTemplate.html",
            replace: true,        // replace original markup with template
            transclude: false    // do not copy original HTML content});
        }
    });
})


