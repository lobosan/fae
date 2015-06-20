DPA = new Mongo.Collection('dpa');

if (Meteor.isServer) {
    Meteor.publish('dpa', function () {
        return DPA.find({});
    });

    Meteor.startup(function () {
        DPA._ensureIndex({codigo: 1});
    });
}