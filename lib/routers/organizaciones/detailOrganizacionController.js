var subs = new SubsManager();

Router.route('/detalle-organizacion', {
    name: 'detailOrganizacion',
    template: 'detailOrganizacion',
    waitOn: function () {
        return [
            subs.subscribe('organizacionSelected', Session.get('organizacionIds')),
            subs.subscribe('organizacionIndicadores')
        ];
    },
    fastRender: true
});