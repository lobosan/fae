Meteor.publish('consumidores', function () {
    if (Roles.userIsInRole(this.userId, 'admin')) {
        return Consumidores.find({});
    } else if (Roles.userIsInRole(this.userId, 'tecnico')) {
        return Consumidores.find({createdBy: this.userId});
    } else {
        this.stop(); // user not authorized. do not publish secrets
    }
});

Meteor.publish('consumidorSelected', function (consumidorId) {
    return Consumidores.find({_id: consumidorId}, {fields: {'createdBy': 0}});
});