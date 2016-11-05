angular.module('massiveApp').controller('productsCtrl', function($scope, productService){


  $scope.getAll = function() {
     productService.getAll().then(function(response) {
        console.log(response)
        $scope.allProducts = response.data;
     })
   }

  $scope.getAll();

})
