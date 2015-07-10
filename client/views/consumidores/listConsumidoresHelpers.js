Template.listConsumidores.helpers({
    isEmptyConsumidores: function () {
        //if (Consumidores.find({}).count() == 0) Meteor.call('initializeConsumidores');
        return Consumidores.find({}).count() == 0;
    },
    settings: function () {
        return {
            collection: Consumidores,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                {key: 'createdAt', label: Consumidores.simpleSchema().label()['createdAt'], sortOrder: 0, sortDirection: 'descending'},
                {key: 'consNombre', label: Consumidores.simpleSchema().label()['consNombre']},
                {key: 'consContacto', label: Consumidores.simpleSchema().label()['consContacto']},
                {key: 'consNombreProductorVisitado', label: Consumidores.simpleSchema().label()['consNombreProductorVisitado']},
                {key: 'consNombreFeriaVisitada', label: Consumidores.simpleSchema().label()['consNombreFeriaVisitada']}
            ]
        };
    }
});