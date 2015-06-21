Meteor.publish('acompanamientos', function () {
    if (Roles.userIsInRole(this.userId, 'admin')) {
        return Acompanamientos.find({});
    } else if (Roles.userIsInRole(this.userId, 'tecnico')) {
        return Acompanamientos.find({createdBy: this.userId});
    } else {
        // user not authorized. do not publish secrets
        this.stop();
        return;
    }
});

Meteor.publish('acompanamientoSelected', function (acompanamientoId) {
    return Acompanamientos.find({_id: acompanamientoId});
});