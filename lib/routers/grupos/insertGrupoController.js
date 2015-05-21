InsertGrupoController = RouteController.extend({
    grupoIndicadores: function () {
        return GrupoIndicadores.find({});
    },
    data: function () {
        return {
            indicadoresFichaTabla: this.grupoIndicadores
        };
    }
});

Router.route('/insert_grupo', {
    name: 'insertGrupo',
    template: 'insertGrupo',
    waitOn: function () {
        return [
            Meteor.subscribe('grupoIndicadores')
        ];
    }
});