Template.detailOrganizacion.helpers({
    detailOrganizaciones: function () {
        Meteor.call('detailOrganizaciones', Session.get('organizacionIds'), function (error, result) {
            Session.setPersistent('detailOrganizaciones', result);
        });
        return Session.get('detailOrganizaciones');
    }
});