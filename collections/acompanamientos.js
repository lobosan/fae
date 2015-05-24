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
                $('#acomProvincia').change(function() {
                    $('#acomParroquia option[value!=""]').remove();
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
        label: 'Nombre del o la responsable de la producción'
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
    acomTelefono: {
        type: String,
        label: 'Número de teléfono'
    },
    /*** Indicadores para el entorno ***/
    entoForestalesNativos: {
        type: Number,
        min: 1,
        max: 10
    },
    entoEspeciesFrutales: {
        type: Number,
        min: 1,
        max: 10
    },
    entoCaminosAgua: {
        type: Number,
        min: 1,
        max: 10
    },
    entoMateriaOrganica: {
        type: Number,
        min: 1,
        max: 10
    },
    entoMateriaNoOrganica: {
        type: Number,
        min: 1,
        max: 10
    },
    entoPoscosecha: {
        type: Number,
        min: 1,
        max: 10
    },
    entoBodegasAlmacenes: {
        type: Number,
        min: 1,
        max: 10
    },
    entoAguaHumedad: {
        type: Number,
        min: 1,
        max: 10
    },
    entoAmenazasExternasContaminacion: {
        type: Number,
        min: 1,
        max: 10
    },
    /*** Indicadores para el subsistema del suelo ***/
    sueloErosionActual: {
        type: Number,
        min: 1,
        max: 10
    },
    sueloMecanizacionAgricola: {
        type: Number,
        min: 1,
        max: 10
    },
    sueloMateriaOrganica: {
        type: Number,
        min: 1,
        max: 10
    },
    sueloAbastecimientoMateriaOrganica: {
        type: Number,
        min: 1,
        max: 10
    },
    sueloCobertura: {
        type: Number,
        min: 1,
        max: 10
    },
    sueloSoltura: {
        type: Number,
        min: 1,
        max: 10
    },
    sueloActividadBiologica: {
        type: Number,
        min: 1,
        max: 10
    },
    sueloEstructura: {
        type: Number,
        min: 1,
        max: 10
    },
    /*** Indicadores para el subsistema de agua y humedad ***/
    aguaCantidad: {
        type: Number,
        min: 1,
        max: 10
    },
    aguaCalidadCultivos: {
        type: Number,
        min: 1,
        max: 10
    },
    aguaCalidadSistemasReserva: {
        type: Number,
        min: 1,
        max: 10
    },
    aguaHumedadSuelo: {
        type: Number,
        min: 1,
        max: 10
    },
    /*** Indicadores para el subsistema de cultivos ***/
    cultRotacion: {
        type: Number,
        min: 1,
        max: 10
    },
    cultAsociacion: {
        type: Number,
        min: 1,
        max: 10
    },
    cultDiversidadVegetal: {
        type: Number,
        min: 1,
        max: 10
    },
    cultDiversidadGenetica: {
        type: Number,
        min: 1,
        max: 10
    },
    cultPresenciaFlores: {
        type: Number,
        min: 1,
        max: 10
    },
    cultLibreQuimicos: {
        type: Number,
        min: 1,
        max: 10
    },
    cultOrigenSemillas: {
        type: Number,
        min: 1,
        max: 10
    },
    cultInsectosEnfermedades: {
        type: Number,
        min: 1,
        max: 10
    },
    cultHierbasSilvestres: {
        type: Number,
        min: 1,
        max: 10
    },
    cultAreasSilvestres: {
        type: Number,
        min: 1,
        max: 10
    },
    /*** Indicadores para el subsistema forestal ***/
    forestFertilidadSuelo: {
        type: Number,
        min: 1,
        max: 10
    },
    forestErosion: {
        type: Number,
        min: 1,
        max: 10
    },
    forestDivisionesLotes: {
        type: Number,
        min: 1,
        max: 10
    },
    forestCortinasRompevientos: {
        type: Number,
        min: 1,
        max: 10
    },
    forestLuzSombraArboles: {
        type: Number,
        min: 1,
        max: 10
    },
    forestDiversidadEspeciesArboreas: {
        type: Number,
        min: 1,
        max: 10
    },
    forestNativas: {
        type: Number,
        min: 1,
        max: 10
    },
    /*** Indicadores para el subsistema animal ***/
    animalDiversidad: {
        type: Number,
        min: 1,
        max: 10
    },
    animalDiversidadGenetica: {
        type: Number,
        min: 1,
        max: 10
    },
    animalInfraestructuraAdecuada: {
        type: Number,
        min: 1,
        max: 10
    },
    animalAlimentoNecesario: {
        type: Number,
        min: 1,
        max: 10
    },
    animalCalidadNutricionalAlimento: {
        type: Number,
        min: 1,
        max: 10
    },
    animalSanidadAnimales: {
        type: Number,
        min: 1,
        max: 10
    },
    animalLimpiezaInstalaciones: {
        type: Number,
        min: 1,
        max: 10
    },
    animalManejoAnimales: {
        type: Number,
        min: 1,
        max: 10
    },
    /*** Indicadores para instalaciones, angares y bodegas ***/
    instalCondicion: {
        type: Number,
        min: 1,
        max: 10
    },
    instalComodidad: {
        type: Number,
        min: 1,
        max: 10
    },
    instalRiesgosContaminacion: {
        type: Number,
        min: 1,
        max: 10
    },
    instalGuardadoHerramientas: {
        type: Number,
        min: 1,
        max: 10
    },
    instalSenaletica: {
        type: Number,
        min: 1,
        max: 10
    },
    instalDesechos: {
        type: Number,
        min: 1,
        max: 10
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
        }
    }
}));

if (Meteor.isServer) {

    Meteor.publish('acompanamientos', function (userId) {
        return Acompanamientos.find({createdBy: userId});
    });

    Acompanamientos.allow({
        insert: function (userId, doc) {
            return true;
        },
        update: function (userId, doc, fieldNames, modifier) {
            return true;
        },
        remove: function (userId, doc) {
            return true;
        }
    });
}