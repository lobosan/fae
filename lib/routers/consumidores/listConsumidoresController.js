Router.route('/lista-consumidores', {
    name: 'listConsumidores',
    template: 'listConsumidores',
    waitOn: function () {
        return [
            Meteor.subscribe('consumidores')
        ];
    }
});