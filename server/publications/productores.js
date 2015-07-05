Meteor.publish('productores', function () {
    if (Roles.userIsInRole(this.userId, 'admin')) {
        return Productores.find({});
    } else if (Roles.userIsInRole(this.userId, 'tecnico')) {
        return Productores.find({createdBy: this.userId});
    } else {
        this.stop();
    }
});

Meteor.publish('productorSelected', function (productorId) {
    return Productores.find({_id: productorId});
});