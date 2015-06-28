Router.route('/nueva-veeduria', {
    name: 'insertVeeduria',
    template: 'insertVeeduria',
    waitOn: function () {
        return [
            Meteor.subscribe('dpa')
        ];
    }
});