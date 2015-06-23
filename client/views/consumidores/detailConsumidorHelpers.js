Template.detailConsumidor.helpers({
    detalleConsumidores: function () {
        return Consumidores.findOne({_id: Session.get('consumidorId')});
    }
});