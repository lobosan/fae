Meteor.publish('productores', function () {
    if (Roles.userIsInRole(this.userId, ['admin', 'provincial', 'tecnico'])) {
        return Productores.find({});
    } else {
        this.stop();
    }
});

Meteor.publish('productorSelected', function (productorId) {
    return Productores.find({_id: productorId});
});