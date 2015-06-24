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
                {key: 'acomProvincia', label: Acompanamientos.simpleSchema().label()['acomProvincia']},
                {key: 'acomCanton', label: Acompanamientos.simpleSchema().label()['acomCanton']},
                {key: 'acomParroquia', label: Acompanamientos.simpleSchema().label()['acomParroquia']},
                {key: 'acomSectores', label: Acompanamientos.simpleSchema().label()['acomSectores']},
                {key: 'acomNombreFinca', label: Acompanamientos.simpleSchema().label()['acomNombreFinca']}
            ]
        };
    }
});