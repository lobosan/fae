OrganizacionIndicadores = new Mongo.Collection('organizacionIndicadores');

if (Meteor.isServer) {
    Meteor.publish('organizacionIndicadores', function () {
        return OrganizacionIndicadores.find({});
    });
}