Template.detailAcompanamiento.helpers({
    detalleAcompanamientos: function () {
        Meteor.call('detalleAcompanamientos', Session.get('acompanamientoIds'), function (error, result) {
            Session.setPersistent('detalleAcompanamientos', result);
        });
        return Session.get('detalleAcompanamientos');
    }
});