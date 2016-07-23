var app6=angular.module("app6",[]);
app6.controller("ctrl6",function($scope) {

  $scope.groceries = [
    {item:"Tiii" , purchased:false},
    {item:"Bread" , purchased:false},
    {item:"Potato" , purchased:false},
    {item:"Tomatoes", purchased:false},
    {item:"Maggi" , purchased:false},
    {item:"Eggs" , purchased:false}
  ];

$scope.addItem=function(newItem){
if(!( newItem === undefined || newItem === "" )) {
  $scope.groceries.push({
      item:newItem,purchased:false
      });
    $scope.missingNewItemError="";
    }
else {
  $scope.missingNewItemError="Please enter an item";
    }
  };
});

 app6.controller('userCtrl',function($scope){
   $scope.user=[{
     fName:"Soumya",
     lName:"Bharadwaj",
     subscribe:"Subscribe",
     delivery:"Email"
   }];

   $scope.saveUser=function(userInfo){
     if($scope.userForm.$valid){
       $scope.user.push({
         fName:userInfo.fName,
         lName:userInfo.lName,
         street:userInfo.street,
         subscribe:userInfo.subscribe,
         delivery:userInfo.delivery
       });
       console.log("user saved");
     }
     else{
       console.log("error");
     }
   };



 });
