Router.route('/detalle-veeduria', {
    name: 'detailVeeduria',
    template: 'detailVeeduria',
    waitOn: function () {
        return [
            Meteor.subscribe('veeduriasSelected', Session.get('veeduriaIds'))
        ];
    }
});