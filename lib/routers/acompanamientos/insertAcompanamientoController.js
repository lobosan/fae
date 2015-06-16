var dpaSubs = new SubsManager({cacheLimit: 9999, expireIn: 9999});
var subs = new SubsManager();

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
            dpaSubs.subscribe('dpa'),
            subs.subscribe('acompanamientoIndicadores')
        ];
    },
    fastRender: true
});