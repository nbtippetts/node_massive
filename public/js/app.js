angular.module('massiveApp', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../view/home.html',
      controller: 'homeCtrl'
    })

    .state('details', {
      url: '/details/:id',
      templateUrl: '../view/details.html',
      controller: 'homeCtrl'
    })

    .state('products', {
      url: '/products',
      templateUrl: '../view/products.html',
      controller: 'productsCtrl'
    })

    $urlRouterProvider
      .otherwise('/');

})
