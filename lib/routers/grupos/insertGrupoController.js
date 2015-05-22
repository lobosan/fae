InsertGrupoController = RouteController.extend({
    grupoIndicadores: function () {
        AutoForm.debug();
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
            Meteor.subscribe('dpa'),
            Meteor.subscribe('grupoIndicadores')
        ];
    }
});