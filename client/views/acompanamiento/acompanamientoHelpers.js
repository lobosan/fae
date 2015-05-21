Template.listAcompanamientos.helpers({
    settings: function () {
        Meteor.call('initializeAcompanamientos', Meteor.userId(), Acompanamientos.find().count());
        return {
            collection: Acompanamientos,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: 'acomProvincia', label: 'Provincia' },
                { key: 'acomCanton', label: 'Cantón' },
                { key: 'acomParroquia', label: 'Parroquia' },
                { key: 'acomSectores', label: 'Sector o comunidad' },
                { key: 'acomResponsableProduccion', label: 'Responsable de produccion' },
                { key: 'acomNombreFinca', label: 'Nombre de la Finca' }
            ]
        };
    }
});