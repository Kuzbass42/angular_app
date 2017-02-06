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
          email: "m@m.m",
          age: 25
        }, {
          isid: 'hodor3',
          givenname: 'hodor',
          familyname: "hodor",
          password: "hodor",
          username: "hodor",
          email: "hodor@gmail.com",
          age: 30
        }, {
          isid: 'pepe',
          givenname: 'pepe',
          familyname: "pepe",
          password: "pepe",
          username: "pepe",
          email: "pepe@mail.ru",
          age: 35
        }
     ];

     this.orderProp = 'age';
    }
  });