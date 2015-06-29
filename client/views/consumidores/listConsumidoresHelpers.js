Template.listConsumidores.helpers({
    isEmptyConsumidores: function () {
        if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
            var countConsumidoresAdmin = Consumidores.find({}).count();
            if (countConsumidoresAdmin === 0) {
                Meteor.call('initializeConsumidores');
                return false;
            }
        } else if (Roles.userIsInRole(Meteor.userId(), 'tecnico')) {
            var countConsumidores = Consumidores.find({createdBy: Meteor.userId()}).count();
            if (countConsumidores === 0) {
                Meteor.call('initializeConsumidores');
                return false;
            }
        } else {
            return false;
        }
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