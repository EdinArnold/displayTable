var myApp = angular.module("myApp", []);

myApp.controller("HeaderCtrl", function($scope) {
  $scope.appDetails = {
    title: "Table Report",
    tagline: "Showing the table data"
  };
});

myApp.controller("TableDataCtrl", function($scope, $http) {

  // $http.get("http://localhost:5050/report/v1")
  //  .then(function(response){ $scope.tabledata = response.data; });

  $scope.tabledata = [
    {
      order: "name1",
      guest:"email1@domain.com"
    },
    {
      order: "name2",
      guest:"email2@domain.com"
    }
  ];
});
