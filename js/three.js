var app3=angular.module('app3',[]);
app3.controller('gList',function($scope) {

  $scope.groceries = [
    {item:"Tiii" , purchased:false},
    {item:"Bread" , purchased:false},
    {item:"Potato" , purchased:false},
    {item:"Tomatoes", purchased:false},
    {item:"Maggi" , purchased:false},
    {item:"Eggs" , purchased:false}
  ];

  $scope.getList=function(){
    return $scope.showList ? "ul.html" : "ol.html"
  };
});
