Router.route('/lista-productores', {
    name: 'listProductores',
    template: 'listProductores',
    waitOn: function () {
        return [
            Meteor.subscribe('productores')
        ];
    }
});