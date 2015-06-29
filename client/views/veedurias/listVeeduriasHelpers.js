Template.listVeedurias.helpers({
    isEmptyVeedurias: function () {
        if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
            var countVeeduriasAdmin = Veedurias.find({}).count();
            if (countVeeduriasAdmin === 0) {
                Meteor.call('initializeVeedurias');
                return false;
            }
        } else if (Roles.userIsInRole(Meteor.userId(), 'tecnico')) {
            var countVeedurias = Veedurias.find({createdBy: Meteor.userId()}).count();
            if (countVeedurias === 0) {
                Meteor.call('initializeVeedurias');
                return false;
            }
        } else {
            return false;
        }
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
                {key: 'prodNombreResponsableProduccion', label: Veedurias.simpleSchema().label()['prodNombreResponsableProduccion']},
                {key: 'prodNombreFinca', label: Veedurias.simpleSchema().label()['prodNombreFinca']}
            ]
        };
    }
});