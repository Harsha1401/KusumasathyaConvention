var myApp = angular.module('myApp',["ui.router"]);

myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
      .state('homepage', {
      url: "/",
      templateUrl: "templates/homePageTemplate.html"
    }).state('contactUs', {
      url: "/contactUs",
      templateUrl: "templates/contactPageTemplate.html"
    }).state('gallery', {
      url: "/gallery",
      templateUrl: "templates/galleryPageTemplate.html"
    }).state('aboutus', {
      url: "/aboutus",
      templateUrl: "templates/aboutusPageTemplate.html"
    }).state('services', {
      url: "/services",
      templateUrl: "templates/servicesPageTemplate.html"
    }).state('prices', {
      url: "/prices",
      templateUrl: "templates/pricePageTemplate.html"
    });
  });
