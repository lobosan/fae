Template.listGrupos.helpers({
    isEmptyGrupos: function () {
        if (Roles.userIsInRole(Meteor.userId(), 'administrador')) {
            return (Grupos.find({}).count() === 0);
        } else if (Roles.userIsInRole(Meteor.userId(), 'tecnico')) {
            return (Grupos.find({createdBy: Meteor.userId()}).count() === 0);
        }
    }
});