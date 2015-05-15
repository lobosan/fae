Meteor.publish('grupos', function (userId) {
    return Grupos.find({createdBy: userId});
});