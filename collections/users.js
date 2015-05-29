if (Meteor.isServer) {
    Meteor.users.deny({
        // disallow users making themselves admins
        update: function(userId, doc, fields, modifier) {
            return _.contains(_.values(_.find(modifier, 'roles')), 'administrador');
        }
    });
}