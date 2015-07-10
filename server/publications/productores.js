Meteor.publish('productores', function () {
    if (Roles.userIsInRole(this.userId, 'tecnico')) {
        return Productores.find({});
    } else {
        this.stop();
    }
});

Meteor.publish('productorSelected', function (productorId) {
    return Productores.find({_id: productorId});
});