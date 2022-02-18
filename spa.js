angular.module('myapp',['ngRoute'])
.config(function($routeProvider)

{

//routing controller- homepage

    $routeProvider.when('/home',
    {
        templateUrl:'spa/home.html',
        controller:'homectrl'}).when('/home/:first/:last',
        {
            templateUrl:'spa/home.html',
            controller:'homectrl'


             //routing controller to employee page
    }).when('/employee',
    {
        templateUrl:'spa/employee.html',
        controller:'mainCtrl'
    })  
})

.controller('myctrl',function()
{

})
//controleer to send message

.controller("homectrl",function($scope,$routeParams)
{
    $scope.message="WELCOME TO Deesh School Library"
    if($routeParams.first&&$routeParams.last)
    {
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }
})
.controller('mainCtrl', function($scope,$http){
// controller to get and manipulate json from github
	
    $scope.rowlimit=4;
    $scope.fullName ;
    $scope.today = new Date();
    $http.get('https://logeshn009.github.io/Single-Page-application/employeee.json')
    .success(function(response)
    {
        $scope.names=response.employees;

    });
});
