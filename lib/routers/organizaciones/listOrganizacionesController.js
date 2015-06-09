ListOrganizacionesController = RouteController.extend({
    settings: function () {
        //Meteor.call('initializeOrganizaciones', Meteor.userId(), Organizaciones.find().count());
        return {
            collection: Organizaciones,
            rowsPerPage: 10,
            showFilter: true,
            showColumnToggles: true,
            fields: [
                { key: 'provincia', label: 'Provincia' },
                { key: 'canton', label: 'Cantón' },
                { key: 'parroquia', label: 'Parroquia' },
                { key: 'sectores', label: 'Sector/es' },
                { key: 'nombreGrupo', label: 'Nombre del Grupo' },
                { key: 'representante', label: 'Representante' }
            ]
        };
    },
    data: function () {
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
            Meteor.subscribe('organizaciones', Meteor.userId())
        ];
    }
});