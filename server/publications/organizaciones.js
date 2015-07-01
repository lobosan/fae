Meteor.publish('organizaciones', function () {
    if (Roles.userIsInRole(this.userId, 'admin')) {
        return Organizaciones.find({});
    } else if (Roles.userIsInRole(this.userId, 'tecnico')) {
        return Organizaciones.find({createdBy: this.userId});
    } else {
        this.stop();
    }
});

Meteor.publish('organizacionesSelected', function (organizacionIds) {
    return Organizaciones.find({_id: {$in: organizacionIds}}, {fields: {'createdBy': 0}});
});