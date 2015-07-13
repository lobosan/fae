Template.listAcompanamientos.helpers({
    isEmptyAcompanamientos: function () {
        if (Acompanamientos.find({}).count() == 0) Meteor.call('initializeAcompanamientos');
        return Acompanamientos.find({}).count() == 0;
    },
    settings: function () {
        return {
            collection: Acompanamientos,
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
                {key: 'acomProvincia', label: Acompanamientos.simpleSchema().label()['acomProvincia']},
                {key: 'acomCanton', label: Acompanamientos.simpleSchema().label()['acomCanton']},
                {key: 'acomParroquia', label: Acompanamientos.simpleSchema().label()['acomParroquia']},
                {key: 'acomSectores', label: Acompanamientos.simpleSchema().label()['acomSectores']},
                {key: 'acomNombreFinca', label: Acompanamientos.simpleSchema().label()['acomNombreFinca']}
            ]
        };
    }
});