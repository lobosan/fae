GrupoCriterios = new Mongo.Collection('grupoCriterios');

if (Meteor.isServer) {
    GrupoCriterios.allow({
        insert: function (userId, doc) {
            return true;
        },
        update: function (userId, doc, fieldNames, modifier) {
            return true;
        },
        remove: function (userId, doc) {
            return true;
        }
    });
}