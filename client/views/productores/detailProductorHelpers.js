Template.detailProductor.helpers({
    detailProductor: function () {
        return Productores.findOne({_id: Session.get('productorId')});
    }
});