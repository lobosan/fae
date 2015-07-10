Template.listOrganizaciones.helpers({
    isEmptyOrganizaciones: function () {
        //if (Organizaciones.find({}).count() == 0) Meteor.call('initializeOrganizaciones');
        return Organizaciones.find({}).count() == 0;
    },
    settings: function () {
        return {
            collection: Organizaciones,
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
                {key: 'provincia', label: Organizaciones.simpleSchema().label()['provincia']},
                {key: 'canton', label: Organizaciones.simpleSchema().label()['canton']},
                {key: 'parroquia', label: Organizaciones.simpleSchema().label()['parroquia']},
                {key: 'sectores', label: Organizaciones.simpleSchema().label()['sectores']},
                {key: 'nombreGrupo', label: Organizaciones.simpleSchema().label()['nombreGrupo']}
            ]
        };
    }
});