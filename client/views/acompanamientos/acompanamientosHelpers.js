Template.listAcompanamientos.helpers({
    isEmptyAcompanamientos: function () {
        if (Roles.userIsInRole(Meteor.userId(), 'administrador')) {
            return (Acompanamientos.find({}).count() === 0);
        } else if (Roles.userIsInRole(Meteor.userId(), 'tecnico')) {
            return (Acompanamientos.find({createdBy: Meteor.userId()}).count() === 0);
        }
    }
});