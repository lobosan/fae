Router.route('/lista-usuarios', {
    name: 'listUsuarios',
    template: 'listUsuarios',
    waitOn: function () {
        return [
            Meteor.subscribe('usuarios')
        ];
    }
});