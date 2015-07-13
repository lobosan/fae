Meteor.publish('consumidores', function () {
    if (Roles.userIsInRole(this.userId, ['admin', 'provincial', 'tecnico'])) {
        return Consumidores.find({});
    } else {
        this.stop();
    }
});

Meteor.publish('consumidorSelected', function (consumidorId) {
    return Consumidores.find({_id: consumidorId}, {fields: {'createdBy': 0}});
});