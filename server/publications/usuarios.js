Meteor.publish('usuarios', function () {
    if (Roles.userIsInRole(this.userId, 'admin')) {
        return Meteor.users.find({}, {fields: {username: 1, emails: 1, 'profile': 1, roles: 1}});
    }
});