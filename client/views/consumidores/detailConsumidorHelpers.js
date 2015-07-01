Template.detailConsumidor.helpers({
    detailConsumidor: function () {
        var consumidor = Consumidores.findOne({_id: Session.get('consumidorId')}, {fields: {'createdBy': 0}});
        delete consumidor._id;

        var detailConsumidor = [];
        _.each(consumidor, function (value, key) {
            detailConsumidor.push({
                label: Consumidores.simpleSchema().label()[key],
                value: value
            });
        });
        _.move(detailConsumidor, 10, 0);

        Session.set('detailConsumidor', detailConsumidor);
        return Session.get('detailConsumidor');
    }
});