angular.
  module('userApp').
  component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: function UserListController($http) {
      const self = this;
      self.orderProp = 'age';

      $http.get('users/users.json').then(function(resp) {
        self.users = resp.data;
      });
    }
  });