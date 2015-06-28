DetailAcompanamientoController = RouteController.extend({
    data: function () {
        return {
            dataAcompanamiento: Veedurias.findOne({_id: Session.get('veeduriaId')})
        };
    }
});

Router.route('/detalle-veeduria', {
    name: 'detailVeeduria',
    template: 'detailAcompanamiento',
    waitOn: function () {
        return [
            Meteor.subscribe('veeduriaSelected', Session.get('veeduriaId'))
        ];
    }
});