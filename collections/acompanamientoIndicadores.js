AcompanamientoIndicadores = new Mongo.Collection('acompanamientoIndicadores');

if (Meteor.isServer) {

    Meteor.publish('acompanamientoIndicadores', function () {
        return AcompanamientoIndicadores.find({});
    });

    AcompanamientoIndicadores.allow({
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