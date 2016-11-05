angular.module('massiveApp').service('productService', function($http){

    this.getAll = function(){
       return $http({
         method: 'GET',
         url: '/api/products'
       });
    }

    this.create = function(product){
       return $http({
         url: '/api/product',
         method: 'POST',
         data: product
       });
    }

    this.getOne = function(id){
       return $http({
         method: 'GET',
         url: '/api/products/product:id?id='+id
       });
    }

    this.update = function(data){
       return $http({
         method: 'PUT',
         url: '/api/products/productId?id='+data.id,
         data: data
       });
    }

    this.delete = function(id){
       return $http({
         method: 'DELETE',
         url: '/api/product:id?id='+id
       });
    }




})
