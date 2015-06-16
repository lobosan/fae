var subs = new SubsManager();

ListAcompanamientosController = RouteController.extend({
    settings: function () {
        return {
            collection: Acompanamientos,
            rowsPerPage: 10,
            showFilter: true,
            showColumnToggles: true,
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
        Meteor.call('initializeAcompanamientos', Meteor.userId(), Acompanamientos.find({}).count());
        return {
            settings: this.settings
        };
    }
});

Router.route('/lista-acompanamientos', {
    name: 'listAcompanamientos',
    template: 'listAcompanamientos',
    waitOn: function () {
        return [
            subs.subscribe('acompanamientos')
        ];
    },
    fastRender: true
});