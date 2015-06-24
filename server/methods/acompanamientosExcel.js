Meteor.methods({

    acompanamientosExcel: function (acompanamientos) {
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
        acompanamientos.forEach(function (acompanamiento) {
            worksheet.writeToCell(row, 0, acompanamiento.createdAt);
            worksheet.writeToCell(row, 1, acompanamiento.acomProvincia);
            worksheet.writeToCell(row, 2, acompanamiento.acomCanton);
            worksheet.writeToCell(row, 3, acompanamiento.acomParroquia);
            worksheet.writeToCell(row, 4, acompanamiento.acomSectores);
            worksheet.writeToCell(row, 5, acompanamiento.acomResponsableProduccion);
            worksheet.writeToCell(row, 6, acompanamiento.acomNombreFinca);
            worksheet.writeToCell(row, 7, acompanamiento.acomCorreo);
            worksheet.writeToCell(row, 8, acompanamiento.acomTelefono);
            worksheet.writeToCell(row, 9, acompanamiento.acomAreaConRiego);
            worksheet.writeToCell(row, 10, acompanamiento.acomAreaSinRiego);
            /*** Indicadores para el entorno ***/
            worksheet.writeToCell(row, 11, acompanamiento.entoForestalesNativos);
            worksheet.writeToCell(row, 12, acompanamiento.entoEspeciesFrutales);
            worksheet.writeToCell(row, 13, acompanamiento.entoCaminosAgua);
            worksheet.writeToCell(row, 14, acompanamiento.entoMateriaOrganica);
            worksheet.writeToCell(row, 15, acompanamiento.entoMateriaNoOrganica);
            worksheet.writeToCell(row, 16, acompanamiento.entoPoscosecha);
            worksheet.writeToCell(row, 17, acompanamiento.entoBodegasAlmacenes);
            worksheet.writeToCell(row, 18, acompanamiento.entoAguaHumedad);
            worksheet.writeToCell(row, 19, acompanamiento.entoAmenazasExternasContaminacion);
            /*** Indicadores para el subsistema del suelo ***/
            worksheet.writeToCell(row, 20, acompanamiento.sueloErosionActual);
            worksheet.writeToCell(row, 21, acompanamiento.sueloMecanizacionAgricola);
            worksheet.writeToCell(row, 22, acompanamiento.sueloMateriaOrganica);
            worksheet.writeToCell(row, 23, acompanamiento.sueloAbastecimientoMateriaOrganica);
            worksheet.writeToCell(row, 24, acompanamiento.sueloCobertura);
            worksheet.writeToCell(row, 25, acompanamiento.sueloSoltura);
            worksheet.writeToCell(row, 26, acompanamiento.sueloActividadBiologica);
            worksheet.writeToCell(row, 27, acompanamiento.sueloEstructura);
            /*** Indicadores para el subsistema de agua y humedad ***/
            worksheet.writeToCell(row, 28, acompanamiento.aguaCantidad);
            worksheet.writeToCell(row, 29, acompanamiento.aguaCalidadCultivos);
            worksheet.writeToCell(row, 30, acompanamiento.aguaCalidadSistemasReserva);
            worksheet.writeToCell(row, 31, acompanamiento.aguaHumedadSuelo);
            /*** Indicadores para el subsistema de cultivos ***/
            worksheet.writeToCell(row, 32, acompanamiento.cultRotacion);
            worksheet.writeToCell(row, 33, acompanamiento.cultAsociacion);
            worksheet.writeToCell(row, 34, acompanamiento.cultDiversidadVegetal);
            worksheet.writeToCell(row, 35, acompanamiento.cultDiversidadGenetica);
            worksheet.writeToCell(row, 36, acompanamiento.cultPresenciaFlores);
            worksheet.writeToCell(row, 37, acompanamiento.cultLibreQuimicos);
            worksheet.writeToCell(row, 38, acompanamiento.cultOrigenSemillas);
            worksheet.writeToCell(row, 39, acompanamiento.cultInsectosEnfermedades);
            worksheet.writeToCell(row, 40, acompanamiento.cultHierbasSilvestres);
            worksheet.writeToCell(row, 41, acompanamiento.cultAreasSilvestres);
            /*** Indicadores para el subsistema forestal ***/
            worksheet.writeToCell(row, 42, acompanamiento.forestFertilidadSuelo);
            worksheet.writeToCell(row, 43, acompanamiento.forestErosion);
            worksheet.writeToCell(row, 44, acompanamiento.forestDivisionesLotes);
            worksheet.writeToCell(row, 45, acompanamiento.forestCortinasRompevientos);
            worksheet.writeToCell(row, 46, acompanamiento.forestLuzSombraArboles);
            worksheet.writeToCell(row, 47, acompanamiento.forestDiversidadEspeciesArboreas);
            worksheet.writeToCell(row, 48, acompanamiento.forestNativas);
            /*** Indicadores para el subsistema animal ***/
            worksheet.writeToCell(row, 49, acompanamiento.animalDiversidad);
            worksheet.writeToCell(row, 50, acompanamiento.animalDiversidadGenetica);
            worksheet.writeToCell(row, 51, acompanamiento.animalInfraestructuraAdecuada);
            worksheet.writeToCell(row, 52, acompanamiento.animalAlimentoNecesario);
            worksheet.writeToCell(row, 53, acompanamiento.animalSanidad);
            worksheet.writeToCell(row, 54, acompanamiento.animalCalidadNutricionalAlimento);
            worksheet.writeToCell(row, 55, acompanamiento.animalSanidadAnimales);
            worksheet.writeToCell(row, 56, acompanamiento.animalLimpiezaInstalaciones);
            worksheet.writeToCell(row, 57, acompanamiento.animalManejoAnimales);
            /*** Indicadores para instalaciones, angares y bodegas ***/
            worksheet.writeToCell(row, 58, acompanamiento.instalCondicion);
            worksheet.writeToCell(row, 59, acompanamiento.instalComodidad);
            worksheet.writeToCell(row, 60, acompanamiento.instalRiesgosContaminacion);
            worksheet.writeToCell(row, 61, acompanamiento.instalGuardadoHerramientas);
            worksheet.writeToCell(row, 62, acompanamiento.instalSenaletica);
            worksheet.writeToCell(row, 63, acompanamiento.instalDesechos);
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