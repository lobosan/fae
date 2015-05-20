AcompanamientoCriterios = new Mongo.Collection('acompanamientoCriterios');

if (Meteor.isServer) {
    AcompanamientoCriterios.allow({
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