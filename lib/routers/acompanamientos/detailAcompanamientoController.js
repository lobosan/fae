var subs = new SubsManager();

DetailAcompanamientoController = RouteController.extend({
    data: function () {
        return {
            dataAcompanamiento: Acompanamientos.findOne({_id: Session.get('acompanamientoId')})
        };
    }
});

Router.route('/detalle-acompanamiento', {
    name: 'detailAcompanamiento',
    template: 'detailAcompanamiento',
    waitOn: function () {
        return [
            subs.subscribe('acompanamientoSelected', Session.get('acompanamientoId'))
        ];
    },
    fastRender: true
});