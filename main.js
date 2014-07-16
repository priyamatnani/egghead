var myApp = angular.module('myApp',[]);

myApp.factory('Avengers',function(){

    var Avengers = {};
    Avengers.cast = [
        {
            name: "priya",
            character: "Tony Stark"

        },
        {
            name: "himanshu",
            character: "robert"

        },
        {
            name: "piyu",
            character: "pepper"

        },
        {
            name: "loki",
            character: "loki"

        },
        {
            name: "kidman",
            character: "nichole"

        },
        {
            name: "thor",
            character: "thor"

        }

    ];

    return Avengers;
})


function AvengersController($scope,Avengers){

    $scope.avengers = Avengers;
}