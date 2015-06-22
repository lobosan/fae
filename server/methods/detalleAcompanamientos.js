Meteor.methods({
    detalleAcompanamientos: function (acompanamientoIds) {
        var acompanamientos = Acompanamientos.find({_id: {$in: acompanamientoIds}}, {fields: {'createdBy': 0}}).fetch();
        var indicadores = AcompanamientoIndicadores.find({}, {fields: {'titulo': 1}}).fetch();

        var indicadoresTitulos = ['Fecha de creación', 'Provincia', 'Cantón', 'Parroquia', 'Sector o comunidad', 
            'Nombre del o la responsable de la producción', 'Nombre de la finca', 'Correo electrónico', 'Número de teléfono'
        ];
        _.each(indicadores, function (indicador) {
            indicadoresTitulos.push(indicador.titulo);
        });

        var data = [];
        for (var key in acompanamientos[0]) {
            var temp = [];
            for (var i = 0; i < acompanamientos.length; i++) {
                temp.push(acompanamientos[i][key]);
            }
            if (key !== '_id') data.push(temp);
            if (key == 'createdAt') data.unshift(temp);
        }
        data.pop();

        var detalleAcompanamientos = [];
        for (var j = 0; j < indicadoresTitulos.length; j++) {
            detalleAcompanamientos.push({
                'titulo': indicadoresTitulos[j],
                'data': data[j]
            });
        }

        return detalleAcompanamientos;
    }
});
