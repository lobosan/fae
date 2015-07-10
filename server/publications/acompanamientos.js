Meteor.publish('acompanamientos', function () {
    if (Roles.userIsInRole(this.userId, 'tecnico')) {
        return Acompanamientos.find({});
    } else {
        this.stop();
    }
});

Meteor.publish('acompanamientosSelected', function (acompanamientoIds) {
    return Acompanamientos.find({_id: {$in: acompanamientoIds}}, {fields: {'createdBy': 0}});
});