Router.route('/detalle-consumidor', {
    name: 'detailConsumidor',
    template: 'detailConsumidor',
    waitOn: function () {
        return [
            Meteor.subscribe('consumidorSelected', Session.get('consumidorId'))
        ];
    }
});