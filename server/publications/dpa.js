Meteor.publish('dpa', function () {
    return DPA.find({});
});

Meteor.publish('provincias', function () {
    return DPA.find({grupo: 'Provincia'});
});