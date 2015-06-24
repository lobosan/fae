Meteor.publish('dpa', function () {
    return DPA.find({});
});