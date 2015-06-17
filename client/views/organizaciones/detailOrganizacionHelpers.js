Template.detailOrganizacion.helpers({
    detalleOrganizaciones: function () {
        Meteor.call('detalleOrganizaciones', Session.get('organizacionIds'), function (error, result) {
            Session.setPersistent('detalleOrganizaciones', result);
        });
        return Session.get('detalleOrganizaciones');
    }
});