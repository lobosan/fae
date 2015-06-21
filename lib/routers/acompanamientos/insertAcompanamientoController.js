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

Router.route('/nuevo-acompanamiento', {
    name: 'insertAcompanamiento',
    template: 'insertAcompanamiento',
    waitOn: function () {
        return [
            Meteor.subscribe('dpa'),
            Meteor.subscribe('acompanamientoIndicadores')
        ];
    }
});