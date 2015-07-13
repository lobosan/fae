Router.route('/nuevo-usuario', {
    name: 'insertUsuario',
    template: 'insertUsuario',
    waitOn: function () {
        return [
            Meteor.subscribe('dpa')
        ]
    }
});