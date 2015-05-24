Template.listAcompanamientos.helpers({
    isEmptyAcompanamientos: function () {
        return (Acompanamientos.find({createdBy: Meteor.userId()}).count() === 0);
    }
});