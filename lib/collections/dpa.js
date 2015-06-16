DPA = new Mongo.Collection('dpa');

if (Meteor.isServer) {

    Meteor.publish('dpa', function () {
        return DPA.find({});
    });

    Meteor.startup(function () {
        DPA._ensureIndex({codigo: 1});
    });

    DPA.allow({
        update: function (userId, doc, fieldNames, modifier) {
            return adminUser(userId);
        },
        remove: function (userId, doc) {
            return adminUser(userId);
        }
    });
}