Router.route('/detalle-organizacion', {
    name: 'detailOrganizacion',
    template: 'detailOrganizacion',
    waitOn: function () {
        return [
            Meteor.subscribe('organizacionSelected', Session.get('organizacionIds')),
            Meteor.subscribe('organizacionIndicadores')
        ];
    }
});