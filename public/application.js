var app = angular.module('myApp', []);

app.controller('emojiCtrl', function($scope, $http) {
    $scope.inputRaw = "dog was here";

    $scope.emojify = function(value) {
      $http.get('/api/emojify/' + $scope.inputRaw)
        .then(function(response) {
          $scope.emojifyOut = response.data;
      });
    };

});
