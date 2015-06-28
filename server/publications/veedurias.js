Meteor.publish('veedurias', function () {
    if (Roles.userIsInRole(this.userId, 'admin')) {
        return Veedurias.find({});
    } else if (Roles.userIsInRole(this.userId, 'tecnico')) {
        return Veedurias.find({createdBy: this.userId});
    } else {
        this.stop();
    }
});

Meteor.publish('veeduriaSelected', function (veeduriaId) {
    return Veedurias.find({_id: veeduriaId});
});