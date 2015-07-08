Template.detailProductor.events({
    'click .print': function () {
        var productor = Productores.findOne({_id: Session.get('productorId')}, {fields: {createdBy: 0}});

        var columns = [
            {title: '', key: 'label', width: 150},
            {title: 'FICHA ' + productor.createdAt, key: 'value', width: 550}
        ];

        var data = [
            {label: Productores.simpleSchema().label()['prdResponsableProduccion'], value: productor.prdResponsableProduccion},
            {label: Productores.simpleSchema().label()['prdNombreFinca'], value: productor.prdNombreFinca},
            {label: Productores.simpleSchema().label()['prdCorreoElectronico'], value: productor.prdCorreoElectronico},
            {label: Productores.simpleSchema().label()['prdTelefonoFijo'], value: productor.prdTelefonoFijo},
            {label: Productores.simpleSchema().label()['prdSectorComunidad'], value: productor.prdSectorComunidad},
            {label: Productores.simpleSchema().label()['prdProvincia'], value: productor.prdProvincia},
            {label: Productores.simpleSchema().label()['prdCanton'], value: productor.prdCanton},
            {label: Productores.simpleSchema().label()['prdParroquia'], value: productor.prdParroquia},
            {label: Productores.simpleSchema().label()['prdCoordenadas'], value: productor.prdCoordenadas},
            {label: Productores.simpleSchema().label()['prdCostoJornalZona'], value: productor.prdCostoJornalZona},
            {label: Productores.simpleSchema().label()['prdDuracionJornalZona'], value: productor.prdDuracionJornalZona}
        ];

        /*** Registro de Actividades ***/
        var actividadesColumns = [
            {title: 'Fecha', key: 'fechaInicio'},
            {title: 'Actividad', key: 'actividad'},
            {title: 'Horas familiares', key: 'horasFamiliar'},
            {title: 'Jornales familiares', key: 'jornalesFamiliares'},
            {title: 'Costo familiar', key: 'costoFamiliar'},
            {title: 'Horas contratadas', key: 'horasContratada'},
            {title: 'Jornales contratados', key: 'jornalesContratados'},
            {title: 'Costo contratado', key: 'costoContratada'},
            {title: 'Costo total', key: 'costoTotal'}
        ];

        var actividades = [];
        _.each(productor.registroDeActividades, function (registroDeActividades) {
            actividades.push({
                fechaInicio: registroDeActividades.fechaInicio,
                actividad: registroDeActividades.actividad,
                horasFamiliar: registroDeActividades.horasFamiliar,
                jornalesFamiliares: registroDeActividades.jornalesFamiliares,
                costoFamiliar: registroDeActividades.costoFamiliar,
                horasContratada: registroDeActividades.horasContratada,
                jornalesContratados: registroDeActividades.jornalesContratados,
                costoContratada: registroDeActividades.costoContratada,
                costoTotal: registroDeActividades.costoTotal
            });
        });

        /*** Registro de compras ***/
        var comprasColumns = [
            {title: 'Fecha', key: 'fecha'},
            {title: 'Producto', key: 'producto'},
            {title: 'Cantidad', key: 'cantidad'},
            {title: 'Costo Unitario', key: 'costoUnitario'},
            {title: 'Costo', key: 'costo'}
        ];

        var compras = [];
        _.each(productor.registroDeCompras, function (registroDeCompras) {
            compras.push({
                fecha: registroDeCompras.fecha,
                producto: registroDeCompras.producto,
                cantidad: registroDeCompras.cantidad,
                costoUnitario: registroDeCompras.costoUnitario,
                costo: registroDeCompras.costo
            });
        });

        /*** Registro de cosechas y Ventas ***/
        var cosechasColumns = [
            {title: 'Fecha', key: 'fecha'},
            {title: 'Producto', key: 'producto'},
            {title: 'Unidad', key: 'unidad'},
            {title: 'Cantidad total', key: 'cantidadTotal'},
            {title: 'Cantidad vendida', key: 'cantidadVendida'},
            {title: 'Autoconsumo', key: 'autoconsumo'},
            {title: 'Intercambio', key: 'intercambio'},
            {title: 'Otros usos', key: 'otrosUsos'}
        ];

        var cosechas = [];
        _.each(productor.registroDeCosechasY_Ventas, function (registroDeCosechasY_Ventas) {
            cosechas.push({
                fecha: registroDeCosechasY_Ventas.fecha,
                producto: registroDeCosechasY_Ventas.producto,
                unidad: registroDeCosechasY_Ventas.unidad,
                cantidadTotal: registroDeCosechasY_Ventas.cantidadTotal,
                cantidadVendida: registroDeCosechasY_Ventas.cantidadVendida,
                autoconsumo: registroDeCosechasY_Ventas.autoconsumo,
                intercambio: registroDeCosechasY_Ventas.intercambio,
                otrosUsos: registroDeCosechasY_Ventas.otrosUsos
            });
        });

        var doc = new jsPDF('l', 'pt', 'a4');

        var options = {
            lineHeight: 16,
            renderHeaderCell: function (x, y, width, height, key, value, settings) {
                doc.setFontSize(10);
                doc.setLineWidth(0.1);
                doc.setDrawColor(240);
                doc.setFillColor(245, 245, 245);
                doc.setTextColor(21, 21, 21);
                doc.rect(x, y, width, height, 'B');
                y += settings.lineHeight / 2 + doc.internal.getLineHeight() / 2;
                doc.text(value, x + settings.padding, y);
            },
            renderCell: function (x, y, width, height, key, value, row, settings) {
                doc.setFontSize(9);
                doc.setLineWidth(0.1);
                doc.setDrawColor(240);
                doc.setTextColor(51, 51, 51);
                doc.rect(x, y, width, height, 'S');
                y += settings.lineHeight / 2 + doc.internal.getLineHeight() / 2 - 2.5;
                doc.text(value, x + settings.padding, y);
            },
            margins: {horizontal: 40, top: 60, bottom: 30},
            overflow: 'linebreak'
        };

        doc.setFontSize(12);
        doc.setTextColor(51, 51, 51);
        doc.text('Ficha del Productor', 40, 45);

        doc.autoTable(columns, data, options);

        doc.addPage();
        doc.text('Resgistro de Actividades', 40, 45);
        doc.autoTable(actividadesColumns, actividades, options);

        doc.addPage();
        doc.text('Registro de Compras', 40, 45);
        doc.autoTable(comprasColumns, compras, options);

        doc.addPage();
        doc.text('Registro de Cosechas y Ventas', 40, 45);
        doc.autoTable(cosechasColumns, cosechas, options);

        doc.save('Productor.pdf');
    }
});