Meteor.publish('acompanamientos', function () {
    if (Roles.userIsInRole(this.userId, 'admin')) {
        return Acompanamientos.find({});
    } else if (Roles.userIsInRole(this.userId, 'tecnico')) {
        return Acompanamientos.find({createdBy: this.userId});
    } else {
        this.stop();
    }
});

Meteor.publish('acompanamientosSelected', function (acompanamientoIds) {
    return Acompanamientos.find({_id: {$in: acompanamientoIds}}, {fields: {'createdBy': 0}});
});