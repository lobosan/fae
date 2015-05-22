InsertAcompanamientoController = RouteController.extend({
    acompanamientoIndicadores: function () {
        return AcompanamientoIndicadores.find({});
    },
    data: function () {
        return {
            indicadoresFichaTabla: this.acompanamientoIndicadores
        };
    }
});

Router.route('/insert_acompanamiento', {
    name: 'insertAcompanamiento',
    template: 'insertAcompanamiento',
    waitOn: function () {
        return [
            Meteor.subscribe('dpa'),
            Meteor.subscribe('acompanamientoIndicadores')
        ];
    }
});