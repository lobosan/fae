ListOrganizacionesController = RouteController.extend({
    settings: function () {
        return {
            collection: Organizaciones,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                {key: 'comparar', label: 'Comparar', sortable: false, fn: function (value, object) {
                    return new Spacebars.SafeString("<input type='checkbox' value='"+object._id+"' />");
                }},
                {key: 'createdAt', label: 'Fecha de creación', sortOrder: 0, sortDirection: 'descending'},
                {key: 'provincia', label: 'Provincia'},
                {key: 'canton', label: 'Cantón'},
                {key: 'parroquia', label: 'Parroquia'},
                {key: 'sectores', label: 'Sector/es'},
                {key: 'nombreGrupo', label: 'Nombre del grupo'}
            ]
        };
    },
    data: function () {
        Meteor.call('initializeOrganizaciones', Meteor.userId(), Organizaciones.find({}).count());
        return {
            settings: this.settings
        };
    }
});

Router.route('/lista-organizaciones', {
    name: 'listOrganizaciones',
    template: 'listOrganizaciones',
    waitOn: function () {
        return [
            Meteor.subscribe('organizaciones')
        ];
    }
});