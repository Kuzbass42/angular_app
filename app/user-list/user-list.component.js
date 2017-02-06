angular.
  module('userApp').
  component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: function UserListController() {
      this.users = [
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
    }
  });