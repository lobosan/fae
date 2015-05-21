ListAcompanamientosController = RouteController.extend({
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
                { key: 'acomResponsableProduccion', label: 'Responsable de producción' },
                { key: 'acomNombreFinca', label: 'Nombre de la finca' }
            ]
        };
    },
    data: function () {
        return {
            settings: this.settings
        };
    }
});

Router.route('/list_acompanamientos', {
    name: 'listAcompanamientos',
    template: 'listAcompanamientos',
    waitOn: function () {
        return [
            Meteor.subscribe('acompanamientos', Meteor.userId())
        ];
    }
});