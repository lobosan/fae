Template.detailVeeduria.helpers({
    detalleVeedurias: function () {
        var veedurias = Veedurias.find({_id: {$in: Session.get('veeduriaIds')}}, {fields: {'createdBy': 0}}).fetch();

        var indicadoresTitulos = Veedurias.simpleSchema().label();
        var collectionData = [];
        for (var key in indicadoresTitulos)
            collectionData.push({key: key, value: indicadoresTitulos[key]});
        _(4).times(function () { collectionData.pop(); });
        collectionData.unshift({key: 'createdAt', value: 'Fecha de creación'});

        var data = [];
        for (var key in veedurias[0]) {
            var temp = [];
            _.each(veedurias, function (veeduria) {
                temp.push(veeduria[key]);
            });
            if (key !== '_id') data.push(temp);
            if (key == 'createdAt') data.unshift(temp);
        }
        data.pop();

        var detalleVeedurias = [];
        for (var i = 0; i < collectionData.length; i++) {
            detalleVeedurias.push({
                'fieldName': collectionData[i].key,
                'label': collectionData[i].value,
                'data': data[i]
            });
        }

        Session.setPersistent('detalleVeedurias', detalleVeedurias);

        return Session.get('detalleVeedurias');
    }
});