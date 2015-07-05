Router.route('/nuevo-productor', {
    name: 'insertProductor',
    template: 'insertProductor',
    waitOn: function () {
        return [
            Meteor.subscribe('dpa')
        ];
    }
});