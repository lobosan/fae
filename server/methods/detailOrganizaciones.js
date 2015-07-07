Meteor.methods({
    detailOrganizaciones: function (organizacionIds) {
        var organizaciones = Organizaciones.find({_id: {$in: organizacionIds}}, {fields: {'createdBy': 0}}).fetch();
        var indicadores = OrganizacionIndicadores.find({}, {fields: {'titulo': 1}}).fetch();

        var indicadoresTitulos = ['Fecha de creación', 'Provincia', 'Cantón', 'Parroquia', 'Sector o comunidad', 'Nombre de la organización', 'Representante',
            'Correo electrónico', 'Teléfono fijo', 'Teléfono celular', 'Personería jurídica', 'Tiempo de vida de la organización',
            'Número de miembros', 'Día preferido para reuniones/talleres'
        ];
        _.each(indicadores, function (indicador) {
            indicadoresTitulos.push(indicador.titulo);
        });

        var data = [];
        for (var key in organizaciones[0]) {
            var temp = [];
            for (var i = 0; i < organizaciones.length; i++) {
                temp.push(organizaciones[i][key]);
            }
            if (key !== '_id') data.push(temp);
            if (key == 'createdAt') data.unshift(temp);
        }
        data.pop();

        var detailOrganizaciones = [];
        for (var j = 0; j < indicadoresTitulos.length; j++) {
            detailOrganizaciones.push({
                'titulo': indicadoresTitulos[j],
                'data': data[j]
            });
        }

        return detailOrganizaciones;
    }
});
