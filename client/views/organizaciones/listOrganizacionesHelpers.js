Template.listOrganizaciones.helpers({
    isEmptyOrganizaciones: function () {
        if (Roles.userIsInRole(Meteor.userId(), 'administrador')) {
            return (Organizaciones.find({}).count() === 0);
        } else if (Roles.userIsInRole(Meteor.userId(), 'tecnico')) {
            return (Organizaciones.find({createdBy: Meteor.userId()}).count() === 0);
        }
    }
});