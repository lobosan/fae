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
            Meteor.subscribe('dpa'),
            Meteor.subscribe('organizacionIndicadores')
        ];
    }
});