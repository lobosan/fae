Router.route('/list_acompanamientos', {
    name: 'listAcompanamientos',
    template: 'listAcompanamientos',
    waitOn: function () {
        return [
            Meteor.subscribe('acompanamientos', Meteor.userId())
        ];
    }
});

Router.route('/insert_acompanamiento', {
    name: 'insertAcompanamiento',
    template: 'insertAcompanamiento',
    data: function () {
        return templateData = {
            indicadoresFichaTabla: AcompanamientoIndicadores.find({})
        };
    },
    waitOn: function () {
        return [
            Meteor.subscribe('acompanamientoIndicadores')
        ];
    }
});