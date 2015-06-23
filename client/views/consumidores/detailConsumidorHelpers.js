Template.detailConsumidor.helpers({
    detalleConsumidor: function () {
        return Consumidores.findOne({_id: Session.get('consumidorId')});
    }
});