Acompanamientos = new Mongo.Collection('acompanamientos');

Acompanamientos.attachSchema(new SimpleSchema({
    acomProvincia: {
        type: String,
        label: 'Provincia',
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                return DPA.find({grupo: 'Provincia'}).map(function (dpa) {
                    return {label: dpa.descripcion, value: dpa.codigo};
                });
            }
        }
    },
    acomCanton: {
        type: String,
        label: 'Cantón',
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                var codigoProvincia = AutoForm.getFieldValue('acomProvincia');
                var cantones = new RegExp('^' + codigoProvincia + '[\\d]{2}$');
                return DPA.find({codigo: {$regex: cantones}}).map(function (dpa) {
                    return {label: dpa.descripcion, value: dpa.codigo};
                });
            }
        }
    },
    acomParroquia: {
        type: String,
        label: 'Parroquia',
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                $("#acomProvincia").change(function() {
                    $("#acomParroquia option[value!='']").remove();
                });
                var codigoCanton = AutoForm.getFieldValue('acomCanton');
                var parroquias = new RegExp('^' + codigoCanton + '[\\d]{2}$');
                return DPA.find({codigo: {$regex: parroquias}}).map(function (dpa) {
                    return {label: dpa.descripcion, value: dpa.codigo};
                });
            }
        }
    },
    acomSectores: {
        type: String,
        label: 'Sector o comunidad'
    },
    acomResponsableProduccion: {
        type: String,
        label: 'Responsable de la producción'
    },
    acomNombreFinca: {
        type: String,
        label: 'Nombre de la finca'
    },
    acomCorreo: {
        type: String,
        label: 'Correo electrónico',
        regEx: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    acomTelefonoFijo: {
        type: String,
        label: 'Teléfono fijo',
        regEx: /^0[2-7]{1}-?\d{3}-?\d{4}$/,
        autoform: {
            placeholder: '02-000-0000'
        }
    },
    acomAreaConRiego: {
        type: Number,
        label: 'Área con riego (m²)',
        min: 0
    },
    acomAreaSinRiego: {
        type: Number,
        label: 'Área sin riego (m²)',
        min: 0
    },
    /*** Indicadores para el entorno ***/
    entoForestalesNativos: {
        type: Number,
        label: 'Presencia de áreas con especies forestales nativos',
        min: 1,
        max: 10
    },
    entoEspeciesFrutales: {
        type: Number,
        label: 'Presencia de especies frutales',
        min: 1,
        max: 10
    },
    entoCaminosAgua: {
        type: Number,
        label: 'Protección de caminos de agua',
        min: 1,
        max: 10
    },
    entoMateriaOrganica: {
        type: Number,
        label: 'Correcto manejo de materia orgánica',
        min: 1,
        max: 10
    },
    entoMateriaNoOrganica: {
        type: Number,
        label: 'Correcto manejo de material no orgánica',
        min: 1,
        max: 10
    },
    entoPoscosecha: {
        type: Number,
        label: 'Área adecuada para poscosecha',
        min: 1,
        max: 10
    },
    entoBodegasAlmacenes: {
        type: Number,
        label: 'Áreas adecuadas para bodegas y almacenes',
        min: 1,
        max: 10
    },
    entoAguaHumedad: {
        type: Number,
        label: 'Manejo racional del agua y humedad',
        min: 1,
        max: 10
    },
    entoAmenazasExternasContaminacion: {
        type: Number,
        label: 'Correcta protección de la finca, de las amenazas externas de contaminación',
        min: 1,
        max: 10
    },
    /*** Indicadores para el subsistema del suelo ***/
    sueloErosionActual: {
        type: Number,
        label: 'Control de la erosión actual',
        min: 1,
        max: 10
    },
    sueloMecanizacionAgricola: {
        type: Number,
        label: 'Uso racional de herramientas y mecanización agrícola',
        min: 1,
        max: 10
    },
    sueloMateriaOrganica: {
        type: Number,
        label: 'Materia orgánica en el suelo',
        min: 1,
        max: 10
    },
    sueloAbastecimientoMateriaOrganica: {
        type: Number,
        label: 'Abastecimiento de materia orgánica',
        min: 1,
        max: 10
    },
    sueloCobertura: {
        type: Number,
        label: 'Cobertura viva o muerta en el suelo',
        min: 1,
        max: 10
    },
    sueloSoltura: {
        type: Number,
        label: 'Soltura del suelo',
        min: 1,
        max: 10
    },
    sueloActividadBiologica: {
        type: Number,
        label: 'Actividad biológica',
        min: 1,
        max: 10
    },
    sueloEstructura: {
        type: Number,
        label: 'Estructura del suelo',
        min: 1,
        max: 10
    },
    /*** Indicadores para el subsistema de agua y humedad ***/
    aguaCantidad: {
        type: Number,
        label: 'Cantidad suficiente de agua para los cultivos, animales y poscosecha',
        min: 1,
        max: 10
    },
    aguaCalidadCultivos: {
        type: Number,
        label: 'Agua de buena calidad para los cultivos, animales y poscosecha',
        min: 1,
        max: 10
    },
    aguaCalidadSistemasReserva: {
        type: Number,
        label: 'Calidad de sistemas de reserva de agua para los cultivos, animales y poscosecha',
        min: 1,
        max: 10
    },
    aguaHumedadSuelo: {
        type: Number,
        label: 'Manejo de la humedad en el suelo',
        min: 1,
        max: 10
    },
    /*** Indicadores para el subsistema de cultivos ***/
    cultRotacion: {
        type: Number,
        label: 'Planificación de rotación de cultivos por lotes',
        min: 1,
        max: 10
    },
    cultAsociacion: {
        type: Number,
        label: 'Asociación de cultivos',
        min: 1,
        max: 10
    },
    cultDiversidadVegetal: {
        type: Number,
        label: 'Diversidad Vegetal',
        min: 1,
        max: 10
    },
    cultDiversidadGenetica: {
        type: Number,
        label: 'Diversidad Genética',
        min: 1,
        max: 10
    },
    cultPresenciaFlores: {
        type: Number,
        label: 'Presencia de Flores',
        min: 1,
        max: 10
    },
    cultLibreQuimicos: {
        type: Number,
        label: 'Finca libre de contaminación por químicos, industriales, domésticos o de otra índole en lotes',
        min: 1,
        max: 10
    },
    cultOrigenSemillas: {
        type: Number,
        label: 'El origen de semillas y plántulas es propio o de la zona',
        min: 1,
        max: 10
    },
    cultInsectosEnfermedades: {
        type: Number,
        label: 'Plan de manejo de insectos y enfermedades en los cultivos',
        min: 1,
        max: 10
    },
    cultHierbasSilvestres: {
        type: Number,
        label: 'Plan de manejo de las hierbas silvestres (malezas)',
        min: 1,
        max: 10
    },
    cultAreasSilvestres: {
        type: Number,
        label: 'Recuperación de áreas silvestres (hábitat de flora y fauna benéfica)',
        min: 1,
        max: 10
    },
    /*** Indicadores para el subsistema forestal ***/
    forestFertilidadSuelo: {
        type: Number,
        label: 'Árboles y arbustos para mejorar y mantener la fertilidad del suelo',
        min: 1,
        max: 10
    },
    forestErosion: {
        type: Number,
        label: 'Árboles y arbustos para controlar la erosión del suelo',
        min: 1,
        max: 10
    },
    forestDivisionesLotes: {
        type: Number,
        label: 'Árboles y arbustos en las divisiones de lotes',
        min: 1,
        max: 10
    },
    forestCortinasRompevientos: {
        type: Number,
        label: 'Cortinas Rompevientos alrededor de la finca',
        min: 1,
        max: 10
    },
    forestLuzSombraArboles: {
        type: Number,
        label: 'Manejo adecuado de la luz y sombra mediante árboles',
        min: 1,
        max: 10
    },
    forestDiversidadEspeciesArboreas: {
        type: Number,
        label: 'Diversidad en especies (arbóreas, arbustivas, frutales, maderables)',
        min: 1,
        max: 10
    },
    forestNativas: {
        type: Number,
        label: 'Las especies forestales son nativas',
        min: 1,
        max: 10
    },
    /*** Indicadores para el subsistema animal ***/
    animalDiversidad: {
        type: Number,
        label: 'Diversidad de especies de animales',
        min: 1,
        max: 10
    },
    animalDiversidadGenetica: {
        type: Number,
        label: 'Diversidad genética de especies de animales',
        min: 1,
        max: 10
    },
    animalInfraestructuraAdecuada: {
        type: Number,
        label: 'Infraestructura e instalaciones adecuada al tipo de animal',
        min: 1,
        max: 10
    },
    animalAlimentoNecesario: {
        type: Number,
        label: 'Abastecimiento propio de alimento en cantidades necesarias al tipo de animal',
        min: 1,
        max: 10
    },
    animalSanidad: {
        type: Number,
        label: 'Sanidad animal',
        min: 1,
        max: 10
    },
    animalCalidadNutricionalAlimento: {
        type: Number,
        label: 'Calidad nutricional del alimento adecuada al tipo de animal',
        min: 1,
        max: 10
    },
    animalSanidadAnimales: {
        type: Number,
        label: 'Manejo de sanidad en los animales',
        min: 1,
        max: 10
    },
    animalLimpiezaInstalaciones: {
        type: Number,
        label: 'Limpieza de instalaciones animales',
        min: 1,
        max: 10
    },
    animalManejoAnimales: {
        type: Number,
        label: 'Registros del manejo de animales',
        min: 1,
        max: 10
    },
    /*** Indicadores para instalaciones, angares y bodegas ***/
    instalCondicion: {
        type: Number,
        label: 'Buenas condiciones de las instalaciones',
        min: 1,
        max: 10
    },
    instalComodidad: {
        type: Number,
        label: 'Comodidad en el trabajo dentro de las instalaciones',
        min: 1,
        max: 10
    },
    instalRiesgosContaminacion: {
        type: Number,
        label: 'Protección de posibles riesgos de contaminación de las instalaciones',
        min: 1,
        max: 10
    },
    instalGuardadoHerramientas: {
        type: Number,
        label: 'Adecuado y ordenado guardado de herramientas, combustibles, lubricantes, materiales de construcción, otros,  en los galpones (no se mezclan con cosechas)',
        min: 1,
        max: 10
    },
    instalSenaletica: {
        type: Number,
        label: 'Señalética adecuada y suficiente a cada tipo de instalación',
        min: 1,
        max: 10
    },
    instalDesechos: {
        type: Number,
        label: 'Desechos provenientes de instalaciones tratados adecuadamente',
        min: 1,
        max: 10
    },
    createdAt: {
        type: String,
        label: 'Fecha de creación',
        autoValue: function() {
            var currentDate = new Date();
            var date = currentDate.getFullYear() + '-' + ('0' + (currentDate.getMonth()+1)).slice(-2) + '-' + ('0' + currentDate.getDate()).slice(-2);
            if (this.isInsert) {
                return date;
            } else if (this.isUpsert) {
                return {$setOnInsert: date};
            } else {
                this.unset();
            }
        },
        autoform: {
            type: 'hidden',
            label: false
        }
    },
    createdBy: {
        type: String,
        autoValue: function(){
            if (this.isInsert){
                return Meteor.userId();
            } else if (this.isUpsert) {
                return {$setOnInsert: Meteor.userId()};
            } else {
                this.unset();
            }
        },
        autoform: {
            type: 'hidden',
            label: false
        },
        optional: true
    }
}));