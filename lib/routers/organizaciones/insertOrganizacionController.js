InsertOrganizacionController = RouteController.extend({
    organizacionIndicadores: function () {
        AutoForm.debug();
        return OrganizacionIndicadores.find({});
    },
    data: function () {
        return {
            indicadoresFichaTabla: this.organizacionIndicadores
        };
    }
});

Router.route('/insert_organizacion', {
    name: 'insertOrganizacion',
    template: 'insertOrganizacion',
    waitOn: function () {
        return [
            Meteor.subscribe('dpa'),
            Meteor.subscribe('organizacionIndicadores')
        ];
    }
});