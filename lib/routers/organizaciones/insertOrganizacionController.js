var dpaSubs = new SubsManager({cacheLimit: 9999, expireIn: 9999});
var subs = new SubsManager();

InsertOrganizacionController = RouteController.extend({
    organizacionIndicadores: function () {
        return OrganizacionIndicadores.find({});
    },
    data: function () {
        return {
            indicadoresFichaTabla: this.organizacionIndicadores
        };
    }
});

Router.route('/nueva-organizacion', {
    name: 'insertOrganizacion',
    template: 'insertOrganizacion',
    waitOn: function () {
        return [
            dpaSubs.subscribe('dpa'),
            subs.subscribe('organizacionIndicadores')
        ];
    },
    fastRender: true
});