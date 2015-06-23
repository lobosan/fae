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
                {key: 'acomProvincia', label: 'Provincia'},
                {key: 'acomCanton', label: 'Cantón'},
                {key: 'acomParroquia', label: 'Parroquia'},
                {key: 'acomSectores', label: 'Sector o comunidad'},
                {key: 'acomNombreFinca', label: 'Nombre de la finca'}
            ]
        };
    }
});