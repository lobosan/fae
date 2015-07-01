Router.route('/detalle-acompanamiento', {
    name: 'detailAcompanamiento',
    template: 'detailAcompanamiento',
    waitOn: function () {
        return [
            Meteor.subscribe('acompanamientosSelected', Session.get('acompanamientoIds'))
        ];
    }
});