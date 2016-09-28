var app = angular.module('myApp', ['ngSanitize']);

app.controller('emojiCtrl', function($scope, $http) {
    $scope.inputRaw = "dog has a bone";

    $scope.emojify = function(value) {
      $http.get('/api/emojify/' + $scope.inputRaw)
        .then(function(response) {
          $scope.emojifyOut = response.data;
      });
    };

});
