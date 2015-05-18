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
    waitOn: function () {
        return [
            Meteor.subscribe('grupoCriterios')
        ];
    }
});