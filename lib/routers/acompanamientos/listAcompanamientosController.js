Router.route('/lista-acompanamientos', {
    name: 'listAcompanamientos',
    template: 'listAcompanamientos',
    waitOn: function () {
        return [
            Meteor.subscribe('acompanamientos')
        ];
    }
});