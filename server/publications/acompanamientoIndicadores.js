Meteor.publish('acompanamientoIndicadores', function () {
    return AcompanamientoIndicadores.find({});
});