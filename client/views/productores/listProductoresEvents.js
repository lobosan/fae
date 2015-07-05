Template.listProductores.events({
    'click .export': function () {
        var productores = Productores.findOne({_id: Session.get('productorId')});

        Meteor.call('exportExcel', productores, function(error, fileUrl) {
            var link = document.createElement('a');
            link.download = 'Fichas del Productor.xlsx';
            link.href = fileUrl;
            link.click();
        });
    },
    'click .reactive-table tbody tr': function () {
        var productorId = this._id;
        Session.setPersistent('productorId', productorId);
        Router.go('detailProductor');
    }
});