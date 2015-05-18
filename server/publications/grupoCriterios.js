Meteor.publish('grupoCriterios', function () {
    return GrupoCriterios.find({});
});