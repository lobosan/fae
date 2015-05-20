Router.route('/grupos_list', {
    name: 'gruposList',
    template: 'gruposList',
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
            indicadoresFichaTabla: GrupoCriterios.find({})
        };
    },
    waitOn: function () {
        return [
            Meteor.subscribe('grupoCriterios')
        ];
    }
});