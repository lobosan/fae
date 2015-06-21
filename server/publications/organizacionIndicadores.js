Meteor.publish('organizacionIndicadores', function () {
    return OrganizacionIndicadores.find({});
});