GrupoIndicadores = new Mongo.Collection('grupoIndicadores');

if (Meteor.isServer) {

    Meteor.publish('grupoIndicadores', function () {
        return GrupoIndicadores.find({});
    });

    GrupoIndicadores.allow({
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