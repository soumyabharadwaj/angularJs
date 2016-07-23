var app_root=angular.module("app_root",[]);
app_root.controller("ctrl_root",function($scope,$rootScope){

$rootScope.Name=[
  {fname:"soumya",lname:"bhar"},
{fname:"monika",lname:"singh"},
{fname:"ridhima",lname:"sinha"}
];

$scope.search=function(text_name){
var flag=0;
for(var i=0; i<$rootScope.Name.length;i++){

  if($rootScope.Name[i].fname === text_name){
    flag=1;
    $scope.fullname= $rootScope.Name[i].fname + " " + $rootScope.Name[i].lname;
  }
}
if(flag == 0)
{
  $scope.fullname="No Match Found";
}

};

});
app_root.controller("ctrl_root_2",function($scope,$rootScope){

$scope.add=function(text_fname,text_lname){
  $rootScope.Name.push({fname:text_fname,lname:text_lname});
};
});
