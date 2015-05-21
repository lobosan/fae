Router.route('/list_grupos', {
    name: 'listGrupos',
    template: 'listGrupos',
    waitOn: function () {
        return [
            Meteor.subscribe('grupos', Meteor.userId())
        ];
    }
});

Router.route('/insert_grupo', {
    name: 'insertGrupo',
    template: 'insertGrupo',
    data: function () {
        return templateData = {
            indicadoresFichaTabla: GrupoIndicadores.find({})
        };
    },
    waitOn: function () {
        return [
            Meteor.subscribe('grupoIndicadores')
        ];
    }
});