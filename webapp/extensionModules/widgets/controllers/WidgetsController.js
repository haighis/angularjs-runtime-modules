
define(['angular', 'jQuery', 'widgets/module'], function (angular, jQuery) {
    angular.module('DashboardAppWidgetModule').controller("WidgetCtrl", ["$scope", function ($scope) {

        var init = function () {
            console.log('in my widget controller');
        }

        init();
    }])
    ;
});