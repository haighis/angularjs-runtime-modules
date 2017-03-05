
define(['angular', 'jQuery', 'modulecatalog/module'], function (angular, jQuery) {
    angular.module('ModuleCatalog').controller("TestCtrl", ["$scope", function ($scope) {

        var init = function () {
         	console.log('in TestCtrl')   
        }


        init();


    }])
    ;
});