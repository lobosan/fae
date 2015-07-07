Meteor.methods({
    productorExportExcel: function () {
        var productores = Productores.find({}, {sort: {createdAt: 1}}).fetch();
        
        var Future = Npm.require('fibers/future');
        var futureResponse = new Future();

        var excel = new Excel('xlsx');
        var workbook = excel.createWorkbook();
        var worksheet1 = excel.createWorksheet();
        var worksheet2 = excel.createWorksheet();
        var worksheet3 = excel.createWorksheet();
        var worksheet4 = excel.createWorksheet();

        worksheet1.writeToCell(0, 0, 'Fecha de creación');
        worksheet1.writeToCell(0, 1, 'Responsable de la producción');
        worksheet1.writeToCell(0, 2, 'Nombre de la finca');
        worksheet1.writeToCell(0, 3, 'Correo electrónico');
        worksheet1.writeToCell(0, 4, 'Teléfono fijo');
        worksheet1.writeToCell(0, 5, 'Sector o comunidad');
        worksheet1.writeToCell(0, 6, 'Provincia');
        worksheet1.writeToCell(0, 7, 'Cantón');
        worksheet1.writeToCell(0, 8, 'Parroquia');
        worksheet1.writeToCell(0, 9, 'Coordenadas geográficas');
        worksheet1.writeToCell(0, 10, 'Costo de un jornal en la zona (USD)');
        worksheet1.writeToCell(0, 11, 'Duración del jornal en la zona (horas)');

        /*** Registro de Actividades ***/
        worksheet2.writeToCell(0, 0, 'Código de Productor');
        worksheet2.writeToCell(0, 1, 'Fecha de inicio de actividad');
        worksheet2.writeToCell(0, 2, 'Actividad');
        worksheet2.writeToCell(0, 3, 'Total horas de mano de obra familiar');
        worksheet2.writeToCell(0, 4, 'Jornales familiares');
        worksheet2.writeToCell(0, 5, 'Costo de mano de obra familiar');
        worksheet2.writeToCell(0, 6, 'Total horas de mano de obra contratada');
        worksheet2.writeToCell(0, 7, 'Jornales contratados');
        worksheet2.writeToCell(0, 8, 'Costo de mano de obra contratada');
        worksheet2.writeToCell(0, 9, 'Costo total');

        /*** Registro de compras ***/
        worksheet3.writeToCell(0, 0, 'Código de Productor');
        worksheet3.writeToCell(0, 1, 'Fecha');
        worksheet3.writeToCell(0, 2, 'Producto');
        worksheet3.writeToCell(0, 3, 'Cantidad');
        worksheet3.writeToCell(0, 4, 'Costo Unitario');
        worksheet3.writeToCell(0, 5, 'Costo');

        /*** Registro de cosechas y Ventas ***/
        worksheet4.writeToCell(0, 0, 'Código de Productor');
        worksheet4.writeToCell(0, 1, 'Fecha');
        worksheet4.writeToCell(0, 2, 'Producto');
        worksheet4.writeToCell(0, 3, 'Unidad');
        worksheet4.writeToCell(0, 4, 'Cantidad total');
        worksheet4.writeToCell(0, 5, 'Cantidad vendida');
        worksheet4.writeToCell(0, 6, 'Autoconsumo');
        worksheet4.writeToCell(0, 7, 'Intercambio');
        worksheet4.writeToCell(0, 8, 'Otros usos');

        worksheet1.setColumnProperties([{wch: 20}, {wch: 30}]);
        worksheet2.setColumnProperties([{wch: 20}, {wch: 30}]);
        worksheet3.setColumnProperties([{wch: 20}, {wch: 30}]);
        worksheet4.setColumnProperties([{wch: 20}, {wch: 30}]);

        var row = 1;
        _.each(productores, function (productor) {
            worksheet1.writeToCell(row, 0, productor.createdAt);
            worksheet1.writeToCell(row, 1, productor.prdResponsableProduccion);
            worksheet1.writeToCell(row, 2, productor.prdNombreFinca);
            worksheet1.writeToCell(row, 3, productor.prdCorreoElectronico);
            worksheet1.writeToCell(row, 4, productor.prdTelefonoFijo);
            worksheet1.writeToCell(row, 5, productor.prdSectorComunidad);
            worksheet1.writeToCell(row, 6, productor.prdProvincia);
            worksheet1.writeToCell(row, 7, productor.prdCanton);
            worksheet1.writeToCell(row, 8, productor.prdParroquia);
            worksheet1.writeToCell(row, 9, productor.prdCoordenadas);
            worksheet1.writeToCell(row, 10, productor.prdCostoJornalZona);
            worksheet1.writeToCell(row, 11, productor.prdDuracionJornalZona);
            /*** Registro de Actividades ***/
            _.each(productor.registroDeActividades, function (registroDeActividades) {
                worksheet2.writeToCell(row, 0, productor.prdResponsableProduccion);
                worksheet2.writeToCell(row, 1, registroDeActividades.fechaInicio);
                worksheet2.writeToCell(row, 2, registroDeActividades.actividad);
                worksheet2.writeToCell(row, 3, registroDeActividades.horasFamiliar);
                worksheet2.writeToCell(row, 4, registroDeActividades.jornalesFamiliares);
                worksheet2.writeToCell(row, 5, registroDeActividades.costoFamiliar);
                worksheet2.writeToCell(row, 6, registroDeActividades.horasContratada);
                worksheet2.writeToCell(row, 7, registroDeActividades.jornalesContratados);
                worksheet2.writeToCell(row, 8, registroDeActividades.costoContratada);
                worksheet2.writeToCell(row, 9, registroDeActividades.costoTotal);
            });
            /*** Registro de compras ***/
            _.each(productor.registroDeCompras, function (registroDeCompras) {
                worksheet3.writeToCell(row, 0, productor.prdResponsableProduccion);
                worksheet3.writeToCell(row, 1, registroDeCompras.fecha);
                worksheet3.writeToCell(row, 2, registroDeCompras.producto);
                worksheet3.writeToCell(row, 3, registroDeCompras.cantidad);
                worksheet3.writeToCell(row, 4, registroDeCompras.costoUnitario);
                worksheet3.writeToCell(row, 5, registroDeCompras.costo);
            });
            /*** Registro de cosechas y Ventas ***/
            _.each(productor.registroDeCosechasY_Ventas, function (registroDeCosechasY_Ventas) {
                worksheet4.writeToCell(row, 0, productor.prdResponsableProduccion);
                worksheet4.writeToCell(row, 1, registroDeCosechasY_Ventas.fecha);
                worksheet4.writeToCell(row, 2, registroDeCosechasY_Ventas.producto);
                worksheet4.writeToCell(row, 3, registroDeCosechasY_Ventas.unidad);
                worksheet4.writeToCell(row, 4, registroDeCosechasY_Ventas.cantidadTotal);
                worksheet4.writeToCell(row, 5, registroDeCosechasY_Ventas.cantidadVendida);
                worksheet4.writeToCell(row, 6, registroDeCosechasY_Ventas.autoconsumo);
                worksheet4.writeToCell(row, 7, registroDeCosechasY_Ventas.intercambio);
                worksheet4.writeToCell(row, 8, registroDeCosechasY_Ventas.otrosUsos);
            });
            row++;
        });

        workbook.addSheet('Productores', worksheet1);
        workbook.addSheet('Registro de Actividades', worksheet2);
        workbook.addSheet('Registro de compras', worksheet3);
        workbook.addSheet('Registro de cosechas y Ventas', worksheet4);

        mkdirp('tmp', Meteor.bindEnvironment(function (err) {
            if (err) {
                console.log('Error creating tmp dir', err);
                futureResponse.throw(err);
            }
            else {
                var uuid = UUID.v4();
                var filePath = './tmp/' + uuid;
                workbook.writeToFile(filePath);

                TemporaryFiles.importFile(filePath, {
                    filename: uuid,
                    contentType: 'application/octet-stream'
                }, function (err, file) {
                    if (err) {
                        futureResponse.throw(err);
                    }
                    else {
                        futureResponse.return('/gridfs/temporaryFiles/' + file._id);
                    }
                });
            }
        }));

        return futureResponse.wait();
    }
});