angular.module('massiveApp').controller('homeCtrl', function($scope, productService, $stateParams, $state) {



  $scope.getOne = function(id) {
     productService.getOne(id).then(function(response) {
        console.log(response)
        console.log(id);
        console.log($scope.product = response.data[0]);
     })
   }

   $scope.update = function() {
      productService.update($scope.product).then(function(response) {
         console.log(response)

         console.log($scope.product = response.data[0]);
      })
    }

   $scope.create = function(product){
     productService.create(product).then(function(response){
       $scope.product = response.data;
     })
   }

   $scope.delete = function(id) {
      productService.delete(id).then(function(response) {
         $state.go('home');
      })
    }




  $scope.getOne($stateParams.id);





});
