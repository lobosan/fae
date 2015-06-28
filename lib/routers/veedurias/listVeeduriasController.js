Router.route('/lista-veedurias', {
    name: 'listVeedurias',
    template: 'listVeedurias',
    waitOn: function () {
        return [
            Meteor.subscribe('veedurias')
        ];
    }
});