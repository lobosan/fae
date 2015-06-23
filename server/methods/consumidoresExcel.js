Meteor.methods({
    consumidoresExcel: function (consumidores) {
        var Future = Npm.require('fibers/future');
        var futureResponse = new Future();

        var excel = new Excel('xlsx'); // Create an excel object  for the file you want (xlsx or xls)
        var workbook = excel.createWorkbook(); // Create a workbook (equivalent of an excel file)
        var worksheet = excel.createWorksheet(); // Create a worksheet to be added to the workbook
        worksheet.writeToCell(0, 0, 'Fecha de creación');
        worksheet.writeToCell(0, 1, 'Nombre');
        worksheet.writeToCell(0, 2, 'Contacto');
        worksheet.writeToCell(0, 3, 'Calidad del producto adquirido');
        worksheet.writeToCell(0, 4, 'Calidad de la atención del vendedor');
        worksheet.writeToCell(0, 5, 'Calidad del área de expendio');
        worksheet.writeToCell(0, 6, 'Presentación del producto');
        worksheet.writeToCell(0, 7, 'Nombre del productor visitado');
        worksheet.writeToCell(0, 8, 'Nombre de la feria visitada');
        worksheet.writeToCell(0, 9, 'Comentarios y sugerencias sobre la feria');
        worksheet.writeToCell(0, 10, 'Impresiones de la visita a la finca');

        worksheet.setColumnProperties([ // Example : setting the width of columns in the file
            {wch: 20},
            {wch: 30}
        ]);

        // Example : writing multple rows to file
        var row = 1;
        _.each(consumidores, function (consumidor) {
            worksheet.writeToCell(row, 0, consumidor.createdAt);
            worksheet.writeToCell(row, 1, consumidor.consNombre);
            worksheet.writeToCell(row, 2, consumidor.consContacto);
            worksheet.writeToCell(row, 3, consumidor.consCalidadProductoAdquirido);
            worksheet.writeToCell(row, 4, consumidor.consCalidadAtencionVendedor);
            worksheet.writeToCell(row, 5, consumidor.consCalidadAreaExpendio);
            worksheet.writeToCell(row, 6, consumidor.consPresentacionProducto);
            worksheet.writeToCell(row, 7, consumidor.consNombreProductorVisitado);
            worksheet.writeToCell(row, 8, consumidor.consNombreFeriaVisitada);
            worksheet.writeToCell(row, 9, consumidor.consComentariosSugerencias);
            worksheet.writeToCell(row, 10, consumidor.consImpresionesVisitaFinca);
            row++;
        });

        workbook.addSheet('Consumidores', worksheet); // Add the worksheet to the workbook

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