Meteor.publish('dpa', function () {
    return DPA.find({});
});

Meteor.startup(function () {
    DPA._ensureIndex({codigo: 1});
});