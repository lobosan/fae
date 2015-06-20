AcompanamientoIndicadores = new Mongo.Collection('acompanamientoIndicadores');

if (Meteor.isServer) {
    Meteor.publish('acompanamientoIndicadores', function () {
        return AcompanamientoIndicadores.find({});
    });
}