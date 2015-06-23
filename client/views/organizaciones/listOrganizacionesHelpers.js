Template.listOrganizaciones.helpers({
    isEmptyOrganizaciones: function () {
        if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
            var countOrganizacionesAdmin = Organizaciones.find({}).count();
            if (countOrganizacionesAdmin === 0) {
                Meteor.call('initializeOrganizaciones');
                return false;
            }
        } else if (Roles.userIsInRole(Meteor.userId(), 'tecnico')) {
            var countOrganizaciones = Organizaciones.find({createdBy: Meteor.userId()}).count();
            if (countOrganizaciones === 0) {
                Meteor.call('initializeOrganizaciones');
                return false;
            }
        } else {
            return false;
        }
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
                {key: 'provincia', label: 'Provincia'},
                {key: 'canton', label: 'Cantón'},
                {key: 'parroquia', label: 'Parroquia'},
                {key: 'sectores', label: 'Sector/es'},
                {key: 'nombreGrupo', label: 'Nombre del grupo'}
            ]
        };
    }
});