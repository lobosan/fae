DetailOrganizacionController = RouteController.extend({
    data: function () {
        return {
            dataOrganizacion: Organizaciones.findOne({_id: Session.get('organizacionId')})
        };
    }
});

Router.route('/detalle_organizacion', {
    name: 'detailOrganizacion',
    template: 'detailOrganizacion',
    waitOn: function () {
        return [
            Meteor.subscribe('organizacionSelected', Session.get('organizacionId'))
        ];
    }
});