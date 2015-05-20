Meteor.publish('acompanamientos', function (userId) {
    return Acompanamientos.find({createdBy: userId});
});