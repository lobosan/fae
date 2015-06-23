Template.listConsumidores.helpers({
    isEmptyConsumidores: function () {
        if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
            var countConsumidoresAdmin = Consumidores.find({}).count();
            if (countConsumidoresAdmin === 0) {
                /*Meteor.call('initializeConsumidores');
                return false;*/
                return true;
            }
        } else if (Roles.userIsInRole(Meteor.userId(), 'tecnico')) {
            var countConsumidores = Consumidores.find({createdBy: Meteor.userId()}).count();
            if (countConsumidores === 0) {
                /*Meteor.call('initializeConsumidores');
                return false;*/
                return true;
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
                {key: 'createdAt', label: 'Fecha', sortOrder: 0, sortDirection: 'descending'},
                {key: 'consNombre', label: 'Nombre'},
                {key: 'consContacto', label: 'Contacto'},
                {key: 'consNombreProductorVisitado', label: 'Nombre del productor visitado'},
                {key: 'consNombreFeriaVisitada', label: 'Nombre de la feria visitada'}
            ]
        };
    }
});