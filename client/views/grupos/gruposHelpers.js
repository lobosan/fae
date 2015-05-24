Template.listGrupos.helpers({
   isEmptyGrupos: function () {
       return (Grupos.find({createdBy: Meteor.userId()}).count() === 0);
   }
});