var myApp= angular.module('myApp', ['ngRoute','ngAnimate']);

myApp.factory('commonFactory', function(){

        return {name :""}

})


myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {

            templateUrl: '../Partials/View1.html',
            controller : 'commonController'
        })
        .when('/welcome',
        {

            templateUrl: '../Partials/View2.html',
            controller : 'commonController'

        })
        /*.when('/welcome/table',
        {
            templateUrl : 'Partials/View2.html',
            controller : 'commonController'

        })*/

        .otherwise({ redirectTo: '/' });
});




myApp.controller('commonController', function($scope, $location, commonFactory , commonService){


    $scope.data=commonFactory;
    $scope.redirectTo = function(Temp){

        $location.path('/'+Temp);
    }

    $scope.emp=commonService.getData();

    $scope.insert = function(){

        commonService.add($scope.newdata.name, $scope.newdata.cardno, $scope.newdata.email, $scope.newdata.contact,  $scope.newdata.post);

    }


    $scope.del = function(){


        commonService.delete1($scope.newdata.cardno);
    }

    $scope.deleteItem = function(index){

        //console.log(index + " " + $scope.nEmp[index].name);
        commonService.delete1($scope.nEmp[index].cardno);
    }

    /*$scope.editing = function(){

        commonService.edit($scope.newdata.cardno);
    }*/

    $scope.toggle = true;
    $scope.tog=false;
    $scope.editt=false

    $scope.modDelete = function(val){
        $scope.tog = val;
    }

    $scope.modToggle = function(val){

        $scope.toggle = val;
    }


    $scope.modEdit = function(val){
        $scope.editt = val;
    }

    $scope.newdata = [];

    $scope.populateEntries = function (cNumber) {
        var j = 0;
        for ( var i = 0 ; i < $scope.emp.cast.length ; i++){
            console.log('comparing: ' + $scope.emp.cast[i].cardno + " and " + cNumber);
            if($scope.emp.cast[i].cardno == cNumber) {
                j = i;
                break;
            }
        }
        $scope.newdata = {
            name: $scope.emp.cast[j].name, cardno : $scope.emp.cast[j].cardno, email: $scope.emp.cast[j].email, contact: $scope.emp.cast[j].contact, post: $scope.emp.cast[j].post
        };

    }



});






myApp.filter('username', function(){


    return function(text){

        return text.split("@")[0]+ " !";
    }

})