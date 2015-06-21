Router.route('/lista-organizaciones', {
    name: 'listOrganizaciones',
    template: 'listOrganizaciones',
    waitOn: function () {
        return [
            Meteor.subscribe('organizaciones')
        ];
    }
});