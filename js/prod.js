var app=angular.module("app",[]);
app.controller("ctrl",function($scope,$http){

  $http.get('http://localhost:3000/message').then(function(result){

    $scope.messages=[];
   $scope.obj={};
   for(var i=0;i<result.data.length;i++){
     $scope.obj["name"]=result.data[i].name;
     $scope.obj["message"]=result.data[i].content;
     $scope.messages.push($scope.obj);
     $scope.obj={};
   }
      console.log($scope.messages);

      });
  });
