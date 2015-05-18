Meteor.methods({
    removeAllGrupos: function () {
        return Grupos.remove({});
    },

    removeAllGrupoCriterios: function () {
        return GrupoCriterios.remove({});
    }
});