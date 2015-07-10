Template.listProductores.helpers({
    isEmptyProductores: function () {
        //if (Productores.find({}).count() == 0) Meteor.call('initializeProductores');
        return Productores.find({}).count() == 0;
    },
    settings: function () {
        return {
            collection: Productores,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                {key: 'createdAt', label: Productores.simpleSchema().label()['createdAt'], sortOrder: 0, sortDirection: 'descending'},
                {key: 'prdResponsableProduccion', label: Productores.simpleSchema().label()['prdResponsableProduccion']},
                {key: 'prdNombreFinca', label: Productores.simpleSchema().label()['prdNombreFinca']},
                {key: 'prdSectorComunidad', label: Productores.simpleSchema().label()['prdSectorComunidad']},
                {key: 'prdParroquia', label: Productores.simpleSchema().label()['prdParroquia']}
            ]
        };
    }
});