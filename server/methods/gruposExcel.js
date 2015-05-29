Meteor.methods({

    gruposExcel: function (grupos) {
        var Future = Npm.require('fibers/future');
        var futureResponse = new Future();

        var excel = new Excel('xlsx'); // Create an excel object  for the file you want (xlsx or xls)
        var workbook = excel.createWorkbook(); // Create a workbook (equivalent of an excel file)
        var worksheet = excel.createWorksheet(); // Create a worksheet to be added to the workbook
        worksheet.writeToCell(0, 0, 'Provincia');
        worksheet.writeToCell(0, 1, 'Cantón');
        worksheet.writeToCell(0, 2, 'Parroquia');
        worksheet.writeToCell(0, 3, 'Sector/es');
        worksheet.writeToCell(0, 4, 'Nombre del grupo');
        worksheet.writeToCell(0, 5, 'Representante');
        worksheet.writeToCell(0, 6, 'Correo electrónico');
        worksheet.writeToCell(0, 7, 'Teléfono fijo');
        worksheet.writeToCell(0, 8, 'Teléfono celular');
        worksheet.writeToCell(0, 9, 'Personería jurídica');
        worksheet.writeToCell(0, 10, 'Tiempo de vida del grupo');
        worksheet.writeToCell(0, 11, 'Número de miembros');
        worksheet.writeToCell(0, 12, 'Día preferido para reuniones/talleres');
        worksheet.writeToCell(0, 13, 'Conocimientos de los principios generales de la agroecología');
        worksheet.writeToCell(0, 14, 'Decisión política');
        worksheet.writeToCell(0, 15, 'Diseño de finca');
        worksheet.writeToCell(0, 16, 'Capacidades técnicas');
        worksheet.writeToCell(0, 17, 'Capacidad técnica instalada en el grupo');
        worksheet.writeToCell(0, 18, 'Capacidad organizacional');
        worksheet.writeToCell(0, 19, 'Mecanismo de apoyo interno');
        worksheet.writeToCell(0, 20, 'Promotores');
        worksheet.writeToCell(0, 21, 'Manejo de normas');
        worksheet.writeToCell(0, 22, 'Veedores');
        worksheet.writeToCell(0, 23, 'Comité de ética');

        worksheet.setColumnProperties([ // Example : setting the width of columns in the file
            {wch: 20},
            {wch: 30}
        ]);

        // Example : writing multple rows to file
        var row = 1;
        grupos.forEach(function (grupo) {
            worksheet.writeToCell(row, 0, grupo.provincia);
            worksheet.writeToCell(row, 1, grupo.canton);
            worksheet.writeToCell(row, 2, grupo.parroquia);
            worksheet.writeToCell(row, 3, grupo.sectores);
            worksheet.writeToCell(row, 4, grupo.nombreGrupo);
            worksheet.writeToCell(row, 5, grupo.representante);
            worksheet.writeToCell(row, 6, grupo.correo);
            worksheet.writeToCell(row, 7, grupo.telefonoFijo);
            worksheet.writeToCell(row, 8, grupo.telefonoCelular);
            worksheet.writeToCell(row, 9, grupo.personeriaJuridica);
            worksheet.writeToCell(row, 10, grupo.tiempoVidaGrupo);
            worksheet.writeToCell(row, 11, grupo.numeroMiembros);
            worksheet.writeToCell(row, 12, grupo.diaPreferidoReuniones);
            worksheet.writeToCell(row, 13, grupo.conocimientosGenerales);
            worksheet.writeToCell(row, 14, grupo.decisionPolitica);
            worksheet.writeToCell(row, 15, grupo.disenioFinca);
            worksheet.writeToCell(row, 16, grupo.capacidadesTecnicas);
            worksheet.writeToCell(row, 17, grupo.capacidadTecnicaGrupo);
            worksheet.writeToCell(row, 18, grupo.capacidadOrganizacional);
            worksheet.writeToCell(row, 19, grupo.mecanismoApoyoInterno);
            worksheet.writeToCell(row, 20, grupo.promotores);
            worksheet.writeToCell(row, 21, grupo.manejoNormas);
            worksheet.writeToCell(row, 22, grupo.veedores);
            worksheet.writeToCell(row, 23, grupo.comiteEtica);
            row++;
        });

        workbook.addSheet('Grupos', worksheet); // Add the worksheet to the workbook

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