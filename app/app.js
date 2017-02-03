const userApp = angular.module('userApp', []);

userApp.controller('UserListController', function UserListController($scope) {
  $scope.users = [
    {
      isid: 'm',
      givenname: 'm',
      familyname: "m",
      password: "m",
      username: "m",
      email: "m@m.m"
    }, {
      isid: 'hodor3',
      givenname: 'hodor',
      familyname: "hodor",
      password: "hodor",
      username: "hodor",
      email: "hodor@gmail.com"
    }, {
      isid: 'pepe',
      givenname: 'pepe',
      familyname: "pepe",
      password: "pepe",
      username: "pepe",
      email: "pepe@mail.ru"
    }
  ];
});