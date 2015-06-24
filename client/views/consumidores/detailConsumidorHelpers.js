Template.detailConsumidor.helpers({
    detalleConsumidor: function () {
        var consumidor = Consumidores.findOne({_id: Session.get('consumidorId')}, {fields: {'createdBy': 0}});
        delete consumidor._id;

        var detalleConsumidor = [];
        _.each(consumidor, function (value, key) {
            detalleConsumidor.push({
                label: Consumidores.simpleSchema().label()[key],
                value: value
            });
        });
        _.move(detalleConsumidor, 10, 0);

        Session.set('detalleConsumidor', detalleConsumidor);
        return Session.get('detalleConsumidor');
    }
});