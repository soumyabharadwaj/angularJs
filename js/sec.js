var app2=angular.module('app2',[]);
app2.controller('ctrl1',function($scope){
$scope.randomNum1=Math.floor((Math.random() * 10) + 1);
$scope.randomNum2=Math.floor((Math.random() * 10) + 1);
});

app2.controller('good',function($scope){

var feelGood=["Puppies","Kids","Smiles","Happy","Raining","full"];
$scope.good=feelGood[Math.floor((Math.random() * 6))];

});
app2.controller('bad',function($scope){

var feelBad=["drench","fat","heavy","cry","Rejected","dull"];
$scope.bad=feelBad[Math.floor((Math.random() * 6))];

});
