Template.listGrupos.helpers({
    settings: function () {
        Meteor.call('initializeGrupos', Meteor.userId(), Grupos.find().count());
        return {
            collection: Grupos,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: 'provincia', label: 'Provincia' },
                { key: 'canton', label: 'Cantón' },
                { key: 'parroquia', label: 'Parroquia' },
                { key: 'sectores', label: 'Sector/es' },
                { key: 'nombreGrupo', label: 'Nombre del Grupo' },
                { key: 'representante', label: 'Representante' }
            ]
        };
    }
});