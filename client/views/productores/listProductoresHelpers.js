Template.listProductores.helpers({
    isEmptyProductores: function () {
        if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
            var countProductoresAdmin = Productores.find({}).count();
            if (countProductoresAdmin === 0) {
                /*Meteor.call('initializeProductores');
                return false;*/
                return true;
            }
        } else if (Roles.userIsInRole(Meteor.userId(), 'tecnico')) {
            var countProductores = Productores.find({createdBy: Meteor.userId()}).count();
            if (countProductores === 0) {
                /*Meteor.call('initializeProductores');
                return false;*/
                return true;
            }
        } else {
            return false;
        }
    },
    settings: function () {
        return {
            collection: Productores,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                {key: 'createdAt', label: Productores.simpleSchema().label()['createdAt'], sortOrder: 0, sortDirection: 'descending'},
                {key: 'prdNombreResponsable', label: Productores.simpleSchema().label()['prdNombreResponsable']},
                {key: 'prdNombreFinca', label: Productores.simpleSchema().label()['prdNombreFinca']},
                {key: 'prdSectorComunidad', label: Productores.simpleSchema().label()['prdSectorComunidad']},
                {key: 'prdParroquia', label: Productores.simpleSchema().label()['prdParroquia']}
            ]
        };
    }
});