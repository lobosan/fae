Meteor.methods({
    veeduriasExcel: function (veedurias) {
        var Future = Npm.require('fibers/future');
        var futureResponse = new Future();

        var excel = new Excel('xlsx'); // Create an excel object  for the file you want (xlsx or xls)
        var workbook = excel.createWorkbook(); // Create a workbook (equivalent of an excel file)
        var worksheet = excel.createWorksheet(); // Create a worksheet to be added to the workbook
        worksheet.writeToCell(0, 0, 'Fecha de creación');
        worksheet.writeToCell(0, 1, 'Provincia');
        worksheet.writeToCell(0, 2, 'Cantón');
        worksheet.writeToCell(0, 3, 'Parroquia');
        worksheet.writeToCell(0, 4, 'Sector o comunidad');
        worksheet.writeToCell(0, 5, 'Nombre del o la responsable de la producción');
        worksheet.writeToCell(0, 6, 'Nombre de la finca');
        worksheet.writeToCell(0, 7, 'Correo electrónico');
        worksheet.writeToCell(0, 8, 'Número de teléfono');
        worksheet.writeToCell(0, 9, 'Área con riego (m²)');
        worksheet.writeToCell(0, 10, 'Área sin riego (m²)');
        /*** Indicadores para el entorno ***/
        worksheet.writeToCell(0, 11, 'Presencia de áreas con especies forestales nativos');
        worksheet.writeToCell(0, 12, 'Presencia de especies frutales');
        worksheet.writeToCell(0, 13, 'Protección de caminos de agua');
        worksheet.writeToCell(0, 14, 'Correcto manejo de materia orgánica');
        worksheet.writeToCell(0, 15, 'Correcto manejo de material no orgánica');
        worksheet.writeToCell(0, 16, 'Área adecuada para poscosecha');
        worksheet.writeToCell(0, 17, 'Áreas adecuadas para bodegas y almacenes');
        worksheet.writeToCell(0, 18, 'Manejo racional del agua y humedad');
        worksheet.writeToCell(0, 19, 'Correcta protección de la finca, de las amenazas externas de contaminación');
        /*** Indicadores para el subsistema del suelo ***/
        worksheet.writeToCell(0, 20, 'Control de la erosión actual');
        worksheet.writeToCell(0, 21, 'Uso racional de herramientas y mecanización agrícola');
        worksheet.writeToCell(0, 22, 'Materia orgánica en el suelo');
        worksheet.writeToCell(0, 23, 'Abastecimiento de materia orgánica');
        worksheet.writeToCell(0, 24, 'Cobertura viva o muerta en el suelo');
        worksheet.writeToCell(0, 25, 'Soltura del suelo');
        worksheet.writeToCell(0, 26, 'Actividad biológica');
        worksheet.writeToCell(0, 27, 'Estructura del suelo');
        /*** Indicadores para el subsistema de agua y humedad ***/
        worksheet.writeToCell(0, 28, 'Cantidad suficiente de agua para los cultivos, animales y poscosecha');
        worksheet.writeToCell(0, 29, 'Agua de buena calidad para los cultivos, animales y poscosecha');
        worksheet.writeToCell(0, 30, 'Calidad de sistemas de reserva de agua para los cultivos, animales y poscosecha');
        worksheet.writeToCell(0, 31, 'Manejo de la humedad en el suelo');
        /*** Indicadores para el subsistema de cultivos ***/
        worksheet.writeToCell(0, 32, 'Planificación de rotación de cultivos por lotes');
        worksheet.writeToCell(0, 33, 'Asociación de cultivos');
        worksheet.writeToCell(0, 34, 'Diversidad Vegetal');
        worksheet.writeToCell(0, 35, 'Diversidad Genética');
        worksheet.writeToCell(0, 36, 'Presencia de Flores');
        worksheet.writeToCell(0, 37, 'Finca libre de contaminación por químicos, industriales, domésticos o de otra índole en lotes');
        worksheet.writeToCell(0, 38, 'El origen de semillas y plántulas es propio o de la zona');
        worksheet.writeToCell(0, 39, 'Plan de manejo de insectos y enfermedades en los cultivos');
        worksheet.writeToCell(0, 40, 'Plan de manejo de las hierbas silvestres (malezas)');
        worksheet.writeToCell(0, 41, 'Recuperación de áreas silvestres (hábitat de flora y fauna benéfica)');
        /*** Indicadores para el subsistema forestal ***/
        worksheet.writeToCell(0, 42, 'Árboles y arbustos para mejorar y mantener la fertilidad del suelo');
        worksheet.writeToCell(0, 43, 'Árboles y arbustos para controlar la erosión del suelo');
        worksheet.writeToCell(0, 44, 'Árboles y arbustos en las divisiones de lotes');
        worksheet.writeToCell(0, 45, 'Cortinas Rompevientos alrededor de la finca');
        worksheet.writeToCell(0, 46, 'Manejo adecuado de la luz y sombra mediante árboles');
        worksheet.writeToCell(0, 47, 'Diversidad en especies (arbóreas, arbustivas, frutales, maderables)');
        worksheet.writeToCell(0, 48, 'Las especies forestales son nativas');
        /*** Indicadores para el subsistema animal ***/
        worksheet.writeToCell(0, 49, 'Diversidad de especies de animales');
        worksheet.writeToCell(0, 50, 'Diversidad genética de especies de animales');
        worksheet.writeToCell(0, 51, 'Infraestructura e instalaciones adecuada al tipo de animal');
        worksheet.writeToCell(0, 52, 'Abastecimiento propio de alimento en cantidades necesarias al tipo de animal');
        worksheet.writeToCell(0, 53, 'Sanidad animal');
        worksheet.writeToCell(0, 54, 'Calidad nutricional del alimento adecuada al tipo de animal');
        worksheet.writeToCell(0, 55, 'Manejo de sanidad en los animales');
        worksheet.writeToCell(0, 56, 'Limpieza de instalaciones animales');
        worksheet.writeToCell(0, 57, 'Registros del manejo de animales');
        /*** Indicadores para instalaciones, angares y bodegas ***/
        worksheet.writeToCell(0, 58, 'Buenas condiciones de las instalaciones');
        worksheet.writeToCell(0, 59, 'Comodidad en el trabajo dentro de las instalaciones');
        worksheet.writeToCell(0, 60, 'Protección de posibles riesgos de contaminación de las instalaciones');
        worksheet.writeToCell(0, 61, 'Adecuado y ordenado guardado de herramientas, combustibles, lubricantes, materiales de construcción, otros,  en los galpones (no se mezclan con cosechas)');
        worksheet.writeToCell(0, 62, 'Señalética adecuada y suficiente a cada tipo de instalación');
        worksheet.writeToCell(0, 63, 'Desechos provenientes de instalaciones tratados adecuadamente');

        worksheet.setColumnProperties([ // Example : setting the width of columns in the file
            {wch: 20},
            {wch: 30}
        ]);

        // Example : writing multple rows to file
        var row = 1;
        _.each(veedurias, function (veeduria) {
            worksheet.writeToCell(row, 0, veeduria.createdAt);
            worksheet.writeToCell(row, 1, veeduria.acomProvincia);
            worksheet.writeToCell(row, 2, veeduria.acomCanton);
            worksheet.writeToCell(row, 3, veeduria.acomParroquia);
            worksheet.writeToCell(row, 4, veeduria.acomSectores);
            worksheet.writeToCell(row, 5, veeduria.acomResponsableProduccion);
            worksheet.writeToCell(row, 6, veeduria.acomNombreFinca);
            worksheet.writeToCell(row, 7, veeduria.acomCorreo);
            worksheet.writeToCell(row, 8, veeduria.acomTelefono);
            worksheet.writeToCell(row, 9, veeduria.acomAreaConRiego);
            worksheet.writeToCell(row, 10, veeduria.acomAreaSinRiego);
            /*** Indicadores para el entorno ***/
            worksheet.writeToCell(row, 11, veeduria.entoForestalesNativos);
            worksheet.writeToCell(row, 12, veeduria.entoEspeciesFrutales);
            worksheet.writeToCell(row, 13, veeduria.entoCaminosAgua);
            worksheet.writeToCell(row, 14, veeduria.entoMateriaOrganica);
            worksheet.writeToCell(row, 15, veeduria.entoMateriaNoOrganica);
            worksheet.writeToCell(row, 16, veeduria.entoPoscosecha);
            worksheet.writeToCell(row, 17, veeduria.entoBodegasAlmacenes);
            worksheet.writeToCell(row, 18, veeduria.entoAguaHumedad);
            worksheet.writeToCell(row, 19, veeduria.entoAmenazasExternasContaminacion);
            /*** Indicadores para el subsistema del suelo ***/
            worksheet.writeToCell(row, 20, veeduria.sueloErosionActual);
            worksheet.writeToCell(row, 21, veeduria.sueloMecanizacionAgricola);
            worksheet.writeToCell(row, 22, veeduria.sueloMateriaOrganica);
            worksheet.writeToCell(row, 23, veeduria.sueloAbastecimientoMateriaOrganica);
            worksheet.writeToCell(row, 24, veeduria.sueloCobertura);
            worksheet.writeToCell(row, 25, veeduria.sueloSoltura);
            worksheet.writeToCell(row, 26, veeduria.sueloActividadBiologica);
            worksheet.writeToCell(row, 27, veeduria.sueloEstructura);
            /*** Indicadores para el subsistema de agua y humedad ***/
            worksheet.writeToCell(row, 28, veeduria.aguaCantidad);
            worksheet.writeToCell(row, 29, veeduria.aguaCalidadCultivos);
            worksheet.writeToCell(row, 30, veeduria.aguaCalidadSistemasReserva);
            worksheet.writeToCell(row, 31, veeduria.aguaHumedadSuelo);
            /*** Indicadores para el subsistema de cultivos ***/
            worksheet.writeToCell(row, 32, veeduria.cultRotacion);
            worksheet.writeToCell(row, 33, veeduria.cultAsociacion);
            worksheet.writeToCell(row, 34, veeduria.cultDiversidadVegetal);
            worksheet.writeToCell(row, 35, veeduria.cultDiversidadGenetica);
            worksheet.writeToCell(row, 36, veeduria.cultPresenciaFlores);
            worksheet.writeToCell(row, 37, veeduria.cultLibreQuimicos);
            worksheet.writeToCell(row, 38, veeduria.cultOrigenSemillas);
            worksheet.writeToCell(row, 39, veeduria.cultInsectosEnfermedades);
            worksheet.writeToCell(row, 40, veeduria.cultHierbasSilvestres);
            worksheet.writeToCell(row, 41, veeduria.cultAreasSilvestres);
            /*** Indicadores para el subsistema forestal ***/
            worksheet.writeToCell(row, 42, veeduria.forestFertilidadSuelo);
            worksheet.writeToCell(row, 43, veeduria.forestErosion);
            worksheet.writeToCell(row, 44, veeduria.forestDivisionesLotes);
            worksheet.writeToCell(row, 45, veeduria.forestCortinasRompevientos);
            worksheet.writeToCell(row, 46, veeduria.forestLuzSombraArboles);
            worksheet.writeToCell(row, 47, veeduria.forestDiversidadEspeciesArboreas);
            worksheet.writeToCell(row, 48, veeduria.forestNativas);
            /*** Indicadores para el subsistema animal ***/
            worksheet.writeToCell(row, 49, veeduria.animalDiversidad);
            worksheet.writeToCell(row, 50, veeduria.animalDiversidadGenetica);
            worksheet.writeToCell(row, 51, veeduria.animalInfraestructuraAdecuada);
            worksheet.writeToCell(row, 52, veeduria.animalAlimentoNecesario);
            worksheet.writeToCell(row, 53, veeduria.animalSanidad);
            worksheet.writeToCell(row, 54, veeduria.animalCalidadNutricionalAlimento);
            worksheet.writeToCell(row, 55, veeduria.animalSanidadAnimales);
            worksheet.writeToCell(row, 56, veeduria.animalLimpiezaInstalaciones);
            worksheet.writeToCell(row, 57, veeduria.animalManejoAnimales);
            /*** Indicadores para instalaciones, angares y bodegas ***/
            worksheet.writeToCell(row, 58, veeduria.instalCondicion);
            worksheet.writeToCell(row, 59, veeduria.instalComodidad);
            worksheet.writeToCell(row, 60, veeduria.instalRiesgosContaminacion);
            worksheet.writeToCell(row, 61, veeduria.instalGuardadoHerramientas);
            worksheet.writeToCell(row, 62, veeduria.instalSenaletica);
            worksheet.writeToCell(row, 63, veeduria.instalDesechos);
            row++;
        });

        workbook.addSheet('Acompañamientos', worksheet); // Add the worksheet to the workbook

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