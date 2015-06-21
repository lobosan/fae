Meteor.publish('organizaciones', function () {
    if (Roles.userIsInRole(this.userId, 'admin')) {
        return Organizaciones.find({});
    } else if (Roles.userIsInRole(this.userId, 'tecnico')) {
        return Organizaciones.find({createdBy: this.userId});
    } else {
        // user not authorized. do not publish secrets
        this.stop();
        return;
    }
});

Meteor.publish('organizacionSelected', function (organizacionIds) {
    return Organizaciones.find({_id: {$in: organizacionIds}});
});