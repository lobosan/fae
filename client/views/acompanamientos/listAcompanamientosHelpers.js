Template.listAcompanamientos.helpers({
    isEmptyAcompanamientos: function () {
        if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
            var countAcompanamientosAdmin = Acompanamientos.find({}).count();
            if (countAcompanamientosAdmin === 0) {
                Meteor.call('initializeAcompanamientos');
                return false;
            }
        } else if (Roles.userIsInRole(Meteor.userId(), 'tecnico')) {
            var countAcompanamientos = Acompanamientos.find({createdBy: Meteor.userId()}).count();
            if (countAcompanamientos === 0) {
                Meteor.call('initializeAcompanamientos');
                return false;
            }
        } else {
            return false;
        }
    },
    settings: function () {
        return {
            collection: Acompanamientos,
            rowsPerPage: 10,
            showFilter: true,
            showColumnToggles: true,
            fields: [
                {key: 'acomProvincia', label: 'Provincia'},
                {key: 'acomCanton', label: 'Cantón'},
                {key: 'acomParroquia', label: 'Parroquia'},
                {key: 'acomSectores', label: 'Sector o comunidad'},
                {key: 'acomResponsableProduccion', label: 'Responsable de producción'},
                {key: 'acomNombreFinca', label: 'Nombre de la finca'}
            ]
        };
    }
});