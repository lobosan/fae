Router.route('/detalle-organizacion', {
    name: 'detailOrganizacion',
    template: 'detailOrganizacion',
    waitOn: function () {
        return [
            Meteor.subscribe('organizacionesSelected', Session.get('organizacionIds')),
            Meteor.subscribe('organizacionIndicadores')
        ];
    }
});