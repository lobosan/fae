Meteor.methods({
    initializeAcompanamientos: function () {
        Factory.define('acompanamiento', Acompanamientos, {
            acomProvincia: function () {
                return Fake.fromArray(['PICHINCHA', 'IMBABURA', 'LOJA']);
            },
            acomCanton: function () {
                return Fake.fromArray(['QUITO', 'ALAUSÍ', 'ARCHIDONA']);
            },
            acomParroquia: function () {
                return Fake.fromArray(['ABDÓN CALDERÓN', 'ACHUPALLAS', 'ALAMOR, CABECERA CANTONAL']);
            },
            acomSectores: function () {
                return Fake.fromArray(['Cotocollao', 'La Independencia', 'Pedro de Jaramillo']);
            },
            acomNombreFinca: function () {
                return Fake.fromArray(['Energía solidaria', 'Alternativas de desarrollo', 'La lucha de los pobres']);
            },
            acomResponsableProduccion: function () {
                return Fake.fromArray(['Juan Guillén', 'María Loor', 'Diego Pilataxi']);
            },
            acomCorreo: function () {
                return Fake.fromArray(['maria@hotmail.com', 'pedro@gmail.com', 'lucho@yahoo.com']);
            },
            acomTelefonoFijo: function () {
                return Fake.fromArray(['02-568-9569', '04-236-5856', '06-221-4455']);
            },
            acomAreaConRiego: function () {
                return Fake.fromArray(['1040', '3500', '5030', '0', '10163']);
            },
            acomAreaSinRiego: function () {
                return Fake.fromArray(['210', '750', '1000', '0', '4250']);
            },
            /*** Indicadores para el entorno ***/
            entoForestalesNativos: function () {
                return _.random(1, 10);
            },
            entoEspeciesFrutales: function () {
                return _.random(1, 10);
            },
            entoCaminosAgua: function () {
                return _.random(1, 10);
            },
            entoMateriaOrganica: function () {
                return _.random(1, 10);
            },
            entoMateriaNoOrganica: function () {
                return _.random(1, 10);
            },
            entoPoscosecha: function () {
                return _.random(1, 10);
            },
            entoBodegasAlmacenes: function () {
                return _.random(1, 10);
            },
            entoAguaHumedad: function () {
                return _.random(1, 10);
            },
            entoAmenazasExternasContaminacion: function () {
                return _.random(1, 10);
            },
            /*** Indicadores para el subsistema del suelo ***/
            sueloErosionActual: function () {
                return _.random(1, 10);
            },
            sueloMecanizacionAgricola: function () {
                return _.random(1, 10);
            },
            sueloMateriaOrganica: function () {
                return _.random(1, 10);
            },
            sueloAbastecimientoMateriaOrganica: function () {
                return _.random(1, 10);
            },
            sueloCobertura: function () {
                return _.random(1, 10);
            },
            sueloSoltura: function () {
                return _.random(1, 10);
            },
            sueloActividadBiologica: function () {
                return _.random(1, 10);
            },
            sueloEstructura: function () {
                return _.random(1, 10);
            },
            /*** Indicadores para el subsistema de agua y humedad ***/
            aguaCantidad: function () {
                return _.random(1, 10);
            },
            aguaCalidadCultivos: function () {
                return _.random(1, 10);
            },
            aguaCalidadSistemasReserva: function () {
                return _.random(1, 10);
            },
            aguaHumedadSuelo: function () {
                return _.random(1, 10);
            },
            /*** Indicadores para el subsistema de cultivos ***/
            cultRotacion: function () {
                return _.random(1, 10);
            },
            cultAsociacion: function () {
                return _.random(1, 10);
            },
            cultDiversidadVegetal: function () {
                return _.random(1, 10);
            },
            cultDiversidadGenetica: function () {
                return _.random(1, 10);
            },
            cultPresenciaFlores: function () {
                return _.random(1, 10);
            },
            cultLibreQuimicos: function () {
                return _.random(1, 10);
            },
            cultOrigenSemillas: function () {
                return _.random(1, 10);
            },
            cultInsectosEnfermedades: function () {
                return _.random(1, 10);
            },
            cultHierbasSilvestres: function () {
                return _.random(1, 10);
            },
            cultAreasSilvestres: function () {
                return _.random(1, 10);
            },
            /*** Indicadores para el subsistema forestal ***/
            forestFertilidadSuelo: function () {
                return _.random(1, 10);
            },
            forestErosion: function () {
                return _.random(1, 10);
            },
            forestDivisionesLotes: function () {
                return _.random(1, 10);
            },
            forestCortinasRompevientos: function () {
                return _.random(1, 10);
            },
            forestLuzSombraArboles: function () {
                return _.random(1, 10);
            },
            forestDiversidadEspeciesArboreas: function () {
                return _.random(1, 10);
            },
            forestNativas: function () {
                return _.random(1, 10);
            },
            /*** Indicadores para el subsistema animal ***/
            animalDiversidad: function () {
                return _.random(1, 10);
            },
            animalDiversidadGenetica: function () {
                return _.random(1, 10);
            },
            animalInfraestructuraAdecuada: function () {
                return _.random(1, 10);
            },
            animalAlimentoNecesario: function () {
                return _.random(1, 10);
            },
            animalSanidad: function () {
                return _.random(1, 10);
            },
            animalCalidadNutricionalAlimento: function () {
                return _.random(1, 10);
            },
            animalSanidadAnimales: function () {
                return _.random(1, 10);
            },
            animalLimpiezaInstalaciones: function () {
                return _.random(1, 10);
            },
            animalManejoAnimales: function () {
                return _.random(1, 10);
            },
            /*** Indicadores para instalaciones angares y bodegas ***/
            instalCondicion: function () {
                return _.random(1, 10);
            },
            instalComodidad: function () {
                return _.random(1, 10);
            },
            instalRiesgosContaminacion: function () {
                return _.random(1, 10);
            },
            instalGuardadoHerramientas: function () {
                return _.random(1, 10);
            },
            instalSenaletica: function () {
                return _.random(1, 10);
            },
            instalDesechos: function () {
                return _.random(1, 10);
            },
            createdAt: function () {
                return Fake.fromArray(['2015-01-05', '2015-01-26', '2015-02-11', '2015-03-16', '2015-04-08']);
            },
            createdBy: function () {
                return this.userId;
            }
        });

        _(100).times(function () {
            Factory.create('acompanamiento');
        });
    }
});