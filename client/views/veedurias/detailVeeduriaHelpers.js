Template.detailVeeduria.helpers({
    detailVeedurias: function () {
        Meteor.call('detailVeedurias', Session.get('veeduriaIds'), function (error, result) {
            Session.setPersistent('detailVeedurias', result);
        });
        return Session.get('detailVeedurias');
    }
});