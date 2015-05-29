Meteor.methods({

    acompanamientosExcel: function () {
        var Future = Npm.require('fibers/future');
        var futureResponse = new Future();

        var excel = new Excel('xlsx'); // Create an excel object  for the file you want (xlsx or xls)
        var workbook = excel.createWorkbook(); // Create a workbook (equivalent of an excel file)
        var worksheet = excel.createWorksheet(); // Create a worksheet to be added to the workbook
        worksheet.writeToCell(0, 0, 'Provincia');
        worksheet.writeToCell(0, 1, 'Cantón');
        worksheet.writeToCell(0, 2, 'Parroquia');
        worksheet.writeToCell(0, 3, 'Sector o comunidad');
        worksheet.writeToCell(0, 4, 'Nombre del o la responsable de la producción');
        worksheet.writeToCell(0, 5, 'Nombre de la finca');
        worksheet.writeToCell(0, 6, 'Correo electrónico');
        worksheet.writeToCell(0, 7, 'Número de teléfono');
        /*** Indicadores para el entorno ***/
        worksheet.writeToCell(0, 8, 'Presencia de áreas con especies forestales nativos');
        worksheet.writeToCell(0, 9, 'Presencia de especies frutales');
        worksheet.writeToCell(0, 10, 'Protección de caminos de agua');
        worksheet.writeToCell(0, 11, 'Correcto manejo de materia orgánica');
        worksheet.writeToCell(0, 12, 'Correcto manejo de material no orgánica');
        worksheet.writeToCell(0, 13, 'Área adecuada para poscosecha');
        worksheet.writeToCell(0, 14, 'Áreas adecuadas para bodegas y almacenes');
        worksheet.writeToCell(0, 15, 'Manejo racional del agua y humedad');
        worksheet.writeToCell(0, 16, 'Correcta protección de la finca, de las amenazas externas de contaminación');
        /*** Indicadores para el subsistema del suelo ***/
        worksheet.writeToCell(0, 17, 'Control de la erosión actual');
        worksheet.writeToCell(0, 18, 'Uso racional de herramientas y mecanización agrícola');
        worksheet.writeToCell(0, 19, 'Materia orgánica en el suelo');
        worksheet.writeToCell(0, 20, 'Abastecimiento de materia orgánica');
        worksheet.writeToCell(0, 21, 'Cobertura viva o muerta en el suelo');
        worksheet.writeToCell(0, 22, 'Soltura del suelo');
        worksheet.writeToCell(0, 23, 'Actividad biológica');
        worksheet.writeToCell(0, 24, 'Estructura del suelo');
        /*** Indicadores para el subsistema de agua y humedad ***/
        worksheet.writeToCell(0, 25, 'Cantidad suficiente de agua para los cultivos, animales y poscosecha');
        worksheet.writeToCell(0, 26, 'Agua de buena calidad para los cultivos, animales y poscosecha');
        worksheet.writeToCell(0, 27, 'Calidad de sistemas de reserva de agua para los cultivos, animales y poscosecha');
        worksheet.writeToCell(0, 28, 'Manejo de la humedad en el suelo');
        /*** Indicadores para el subsistema de cultivos ***/
        worksheet.writeToCell(0, 29, 'Planificación de rotación de cultivos por lotes');
        worksheet.writeToCell(0, 30, 'Asociación de cultivos');
        worksheet.writeToCell(0, 31, 'Diversidad Vegetal');
        worksheet.writeToCell(0, 32, 'Diversidad Genética');
        worksheet.writeToCell(0, 33, 'Presencia de Flores');
        worksheet.writeToCell(0, 34, 'Finca libre de contaminación por químicos, industriales, domésticos o de otra índole en lotes');
        worksheet.writeToCell(0, 35, 'El origen de semillas y plántulas es propio o de la zona');
        worksheet.writeToCell(0, 36, 'Plan de manejo de insectos y enfermedades en los cultivos');
        worksheet.writeToCell(0, 37, 'Plan de manejo de las hierbas silvestres (malezas)');
        worksheet.writeToCell(0, 38, 'Recuperación de áreas silvestres (hábitat de flora y fauna benéfica)');
        /*** Indicadores para el subsistema forestal ***/
        worksheet.writeToCell(0, 39, 'Árboles y arbustos para mejorar y mantener la fertilidad del suelo');
        worksheet.writeToCell(0, 40, 'Árboles y arbustos para controlar la erosión del suelo');
        worksheet.writeToCell(0, 41, 'Árboles y arbustos en las divisiones de lotes');
        worksheet.writeToCell(0, 42, 'Cortinas Rompevientos alrededor de la finca');
        worksheet.writeToCell(0, 43, 'Manejo adecuado de la luz y sombra mediante árboles');
        worksheet.writeToCell(0, 44, 'Diversidad en especies (arbóreas, arbustivas, frutales, maderables)');
        worksheet.writeToCell(0, 45, 'Las especies forestales son nativas');
        /*** Indicadores para el subsistema animal ***/
        worksheet.writeToCell(0, 46, 'Diversidad de especies de animales');
        worksheet.writeToCell(0, 47, 'Diversidad genética de especies de animales');
        worksheet.writeToCell(0, 48, 'Infraestructura e instalaciones adecuada al tipo de animal');
        worksheet.writeToCell(0, 49, 'Abastecimiento propio de alimento en cantidades necesarias al tipo de animal');
        worksheet.writeToCell(0, 50, 'Calidad nutricional del alimento adecuada al tipo de animal');
        worksheet.writeToCell(0, 51, 'Manejo de sanidad en los animales');
        worksheet.writeToCell(0, 52, 'Limpieza de instalaciones animales');
        worksheet.writeToCell(0, 53, 'Registros del manejo de animales');
        /*** Indicadores para instalaciones, angares y bodegas ***/
        worksheet.writeToCell(0, 54, 'Buenas condiciones de las instalaciones');
        worksheet.writeToCell(0, 55, 'Comodidad en el trabajo dentro de las instalaciones');
        worksheet.writeToCell(0, 56, 'Protección de posibles riesgos de contaminación de las instalaciones');
        worksheet.writeToCell(0, 57, 'Adecuado y ordenado guardado de herramientas, combustibles, lubricantes, materiales de construcción, otros,  en los galpones (no se mezclan con cosechas)');
        worksheet.writeToCell(0, 58, 'Señalética adecuada y suficiente a cada tipo de instalación');
        worksheet.writeToCell(0, 59, 'Desechos provenientes de instalaciones tratados adecuadamente');

        worksheet.setColumnProperties([ // Example : setting the width of columns in the file
            {wch: 20},
            {wch: 30}
        ]);

        // Example : writing multple rows to file
        var row = 1;
        Acompanamientos.find({}).forEach(function (acompanamiento) {
            worksheet.writeToCell(row, 0, acompanamiento.acomProvincia);
            worksheet.writeToCell(row, 1, acompanamiento.acomCanton);
            worksheet.writeToCell(row, 2, acompanamiento.acomParroquia);
            worksheet.writeToCell(row, 3, acompanamiento.acomSectores);
            worksheet.writeToCell(row, 4, acompanamiento.acomResponsableProduccion);
            worksheet.writeToCell(row, 5, acompanamiento.acomNombreFinca);
            worksheet.writeToCell(row, 6, acompanamiento.acomCorreo);
            worksheet.writeToCell(row, 7, acompanamiento.acomTelefono);
            /*** Indicadores para el entorno ***/
            worksheet.writeToCell(row, 8, acompanamiento.entoForestalesNativos);
            worksheet.writeToCell(row, 9, acompanamiento.entoEspeciesFrutales);
            worksheet.writeToCell(row, 10, acompanamiento.entoCaminosAgua);
            worksheet.writeToCell(row, 11, acompanamiento.entoMateriaOrganica);
            worksheet.writeToCell(row, 12, acompanamiento.entoMateriaNoOrganica);
            worksheet.writeToCell(row, 13, acompanamiento.entoPoscosecha);
            worksheet.writeToCell(row, 14, acompanamiento.entoBodegasAlmacenes);
            worksheet.writeToCell(row, 15, acompanamiento.entoAguaHumedad);
            worksheet.writeToCell(row, 16, acompanamiento.entoAmenazasExternasContaminacion);
            /*** Indicadores para el subsistema del suelo ***/
            worksheet.writeToCell(row, 17, acompanamiento.sueloErosionActual);
            worksheet.writeToCell(row, 18, acompanamiento.sueloMecanizacionAgricola);
            worksheet.writeToCell(row, 19, acompanamiento.sueloMateriaOrganica);
            worksheet.writeToCell(row, 20, acompanamiento.sueloAbastecimientoMateriaOrganica);
            worksheet.writeToCell(row, 21, acompanamiento.sueloCobertura);
            worksheet.writeToCell(row, 22, acompanamiento.sueloSoltura);
            worksheet.writeToCell(row, 23, acompanamiento.sueloActividadBiologica);
            worksheet.writeToCell(row, 24, acompanamiento.sueloEstructura);
            /*** Indicadores para el subsistema de agua y humedad ***/
            worksheet.writeToCell(row, 25, acompanamiento.aguaCantidad);
            worksheet.writeToCell(row, 26, acompanamiento.aguaCalidadCultivos);
            worksheet.writeToCell(row, 27, acompanamiento.aguaCalidadSistemasReserva);
            worksheet.writeToCell(row, 28, acompanamiento.aguaHumedadSuelo);
            /*** Indicadores para el subsistema de cultivos ***/
            worksheet.writeToCell(row, 29, acompanamiento.cultRotacion);
            worksheet.writeToCell(row, 30, acompanamiento.cultAsociacion);
            worksheet.writeToCell(row, 31, acompanamiento.cultDiversidadVegetal);
            worksheet.writeToCell(row, 32, acompanamiento.cultDiversidadGenetica);
            worksheet.writeToCell(row, 33, acompanamiento.cultPresenciaFlores);
            worksheet.writeToCell(row, 34, acompanamiento.cultLibreQuimicos);
            worksheet.writeToCell(row, 35, acompanamiento.cultOrigenSemillas);
            worksheet.writeToCell(row, 36, acompanamiento.cultInsectosEnfermedades);
            worksheet.writeToCell(row, 37, acompanamiento.cultHierbasSilvestres);
            worksheet.writeToCell(row, 38, acompanamiento.cultAreasSilvestres);
            /*** Indicadores para el subsistema forestal ***/
            worksheet.writeToCell(row, 39, acompanamiento.forestFertilidadSuelo);
            worksheet.writeToCell(row, 40, acompanamiento.forestErosion);
            worksheet.writeToCell(row, 41, acompanamiento.forestDivisionesLotes);
            worksheet.writeToCell(row, 42, acompanamiento.forestCortinasRompevientos);
            worksheet.writeToCell(row, 43, acompanamiento.forestLuzSombraArboles);
            worksheet.writeToCell(row, 44, acompanamiento.forestDiversidadEspeciesArboreas);
            worksheet.writeToCell(row, 45, acompanamiento.forestNativas);
            /*** Indicadores para el subsistema animal ***/
            worksheet.writeToCell(row, 46, acompanamiento.animalDiversidad);
            worksheet.writeToCell(row, 47, acompanamiento.animalDiversidadGenetica);
            worksheet.writeToCell(row, 48, acompanamiento.animalInfraestructuraAdecuada);
            worksheet.writeToCell(row, 49, acompanamiento.animalAlimentoNecesario);
            worksheet.writeToCell(row, 50, acompanamiento.animalCalidadNutricionalAlimento);
            worksheet.writeToCell(row, 51, acompanamiento.animalSanidadAnimales);
            worksheet.writeToCell(row, 52, acompanamiento.animalLimpiezaInstalaciones);
            worksheet.writeToCell(row, 53, acompanamiento.animalManejoAnimales);
            /*** Indicadores para instalaciones, angares y bodegas ***/
            worksheet.writeToCell(row, 54, acompanamiento.instalCondicion);
            worksheet.writeToCell(row, 55, acompanamiento.instalComodidad);
            worksheet.writeToCell(row, 56, acompanamiento.instalRiesgosContaminacion);
            worksheet.writeToCell(row, 57, acompanamiento.instalGuardadoHerramientas);
            worksheet.writeToCell(row, 58, acompanamiento.instalSenaletica);
            worksheet.writeToCell(row, 59, acompanamiento.instalDesechos);
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