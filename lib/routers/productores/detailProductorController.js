Router.route('/detalle-productor', {
    name: 'detailProductor',
    template: 'detailProductor',
    waitOn: function () {
        return [
            Meteor.subscribe('productorSelected', Session.get('productorId'))
        ];
    }
});