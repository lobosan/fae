OrganizacionIndicadores = new Mongo.Collection('organizacionIndicadores');

if (Meteor.isServer) {

    Meteor.publish('organizacionIndicadores', function () {
        return OrganizacionIndicadores.find({});
    });

    OrganizacionIndicadores.allow({
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