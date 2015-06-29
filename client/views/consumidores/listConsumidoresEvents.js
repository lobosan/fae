Template.listConsumidores.events({
    'click .export': function () {
        var consumidores = Consumidores.find({}, {fields: {createdBy: 0}, sort: {createdAt: 1}}).fetch();
        var labels = _.without(_.values(Consumidores.simpleSchema().label()), 'Fecha de creación', 'Created by');
        labels.unshift('Fecha de creación');

        Meteor.call('exportExcel', labels, consumidores, 'Consumidores', function(error, fileUrl) {
            var link = document.createElement('a');
            link.download = 'Fichas del Consumidor.xlsx';
            link.href = fileUrl;
            link.click();
        });
    },
    'click .reactive-table tbody tr': function (event) {
        if (event.target.type == 'checkbox' || event.target.nodeName == "LABEL") {
        } else if (event.target.className !== 'comparar') {
            var consumidorId = this._id;
            Session.setPersistent('consumidorId', consumidorId);
            Router.go('detailConsumidor');
        }
    }
});