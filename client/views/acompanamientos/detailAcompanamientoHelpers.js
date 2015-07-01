Template.detailAcompanamiento.helpers({
    detailAcompanamientos: function () {
        Meteor.call('detailAcompanamientos', Session.get('acompanamientoIds'), function (error, result) {
            Session.setPersistent('detailAcompanamientos', result);
        });
        return Session.get('detailAcompanamientos');
    }
});