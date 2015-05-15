Meteor.startup(function () {
    return Meteor.methods({
        removeAllGrupos: function () {
            return Grupos.remove({});
        }
    });
});