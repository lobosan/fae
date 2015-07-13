Meteor.publish('veedurias', function () {
    if (Roles.userIsInRole(this.userId, 'admin')) {
        return Veedurias.find({});
    } else if (Roles.userIsInRole(this.userId, 'tecnico')) {
        return Veedurias.find({createdBy: this.userId});
    } else if (Roles.userIsInRole(this.userId, 'provincial')) {
        var provinciaUsuario = Meteor.users.findOne({_id: this.userId}, {fields: {'profile.provincia': 1}}).profile.provincia;
        return Veedurias.find({$or: [{createdBy: this.userId}, {ubicProvincia: provinciaUsuario}]});
    } else {
        this.stop();
    }
});

Meteor.publish('veeduriasSelected', function (veeduriaIds) {
    return Veedurias.find({_id: {$in: veeduriaIds}}, {fields: {'createdBy': 0}});
});