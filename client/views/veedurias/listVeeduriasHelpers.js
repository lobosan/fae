Template.listVeedurias.helpers({
    isEmptyVeedurias: function () {
        //if (Veedurias.find({}).count() == 0) Meteor.call('initializeVeedurias');
        return Veedurias.find({}).count() == 0;
    },
    settings: function () {
        return {
            collection: Veedurias,
            rowClass: 'checkbox-reactive-table',
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                {key: 'comparar', label: 'Comparar', sortable: false, fn: function (value, object) {
                    return new Spacebars.SafeString(
                        "<label><input type='checkbox' value='"+object._id+"' /></label>"
                    );
                }},
                {key: 'createdAt', label: 'Fecha', sortOrder: 0, sortDirection: 'descending'},
                {key: 'ubicProvincia', label: Veedurias.simpleSchema().label()['ubicProvincia']},
                {key: 'ubicCanton', label: Veedurias.simpleSchema().label()['ubicCanton']},
                {key: 'ubicParroquia', label: Veedurias.simpleSchema().label()['ubicParroquia']},
                {key: 'prodResponsableProduccion', label: Veedurias.simpleSchema().label()['prodResponsableProduccion']},
                {key: 'prodNombreFinca', label: Veedurias.simpleSchema().label()['prodNombreFinca']}
            ]
        };
    }
});