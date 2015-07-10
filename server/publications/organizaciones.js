Meteor.publish('organizaciones', function () {
    if (Roles.userIsInRole(this.userId, 'tecnico')) {
        return Organizaciones.find({});
    } else {
        this.stop();
    }
});

Meteor.publish('organizacionesSelected', function (organizacionIds) {
    return Organizaciones.find({_id: {$in: organizacionIds}}, {fields: {'createdBy': 0}});
});