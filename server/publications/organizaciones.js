Meteor.publish('organizaciones', function () {
    if (Roles.userIsInRole(this.userId, ['admin', 'provincial', 'tecnico'])) {
        return Organizaciones.find({});
    } else {
        this.stop();
    }
});

Meteor.publish('organizacionesSelected', function (organizacionIds) {
    return Organizaciones.find({_id: {$in: organizacionIds}}, {fields: {'createdBy': 0}});
});