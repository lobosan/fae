Meteor.methods({
    initializeVeedurias: function () {
        Factory.define('veeduria', Veedurias, {
            /*** Identificación del productor ***/
            prodNombreResponsableProduccion: function () {
                return Fake.fromArray(['María Carrera', 'Juan Chiliquinga', 'Rodrigo Pérez']);
            },
            prodNombreFinca: function () {
                return Fake.fromArray(['La Esperanza', 'Nuevo Amanecer', 'Florecer de Vida']);
            },
            prodCorreoElectronico: function () {
                return Fake.fromArray(['mariacarrera@gmail.com', 'juanchiliquinga@hotmail.com', 'rodrigoperez@yahoo.com']);
            },
            prodNumeroTelefonoFijo: function () {
                return Fake.fromArray(['025689569', '042365856', '062214455']);
            },
            prodNumeroCelular: function () {
                return Fake.fromArray(['0985475221', '0812322332', '0999925466']);
            },
            /*** Ubicación ***/
            ubicProvincia: function () {
                return Fake.fromArray(['Pichincha', 'Imbabura', 'Loja']);
            },
            ubicCanton: function () {
                return Fake.fromArray(['Quito', 'Alausí', 'Archidona']);
            },
            ubicParroquia: function () {
                return Fake.fromArray(['Abdón Calderón', 'Achupallas', 'Alamor, Cabecera Cantonal']);
            },
            ubicSectorComunidad: function () {
                return Fake.fromArray(['Cotocollao', 'Pimampiro', 'La Ronda']);
            },
            ubicNombreOrganizacion: function () {
                return Fake.fromArray(['Energía solidaria', 'Alternativas de desarrollo', 'La lucha de los pobres']);
            },
            ubicPrecipitacionAnual: function () {
                return Fake.fromArray([10, 16, 22]);
            },
            ubicMesesLluvia: function () {
                return Fake.fromArray([['Enero, Febrero, Marzo'], ['Junio'], ['Noviembre, Diciembre']]);
            },
            ubicMesesSinLluvia: function () {
                return Fake.fromArray([['Abril, Mayo'], ['Julio, Agosto, Septiembre'], ['Enero']]);
            },
            ubicAltitud: function () {
                return Fake.fromArray([5, 30, 165]);
            },
            ubicTemperaturaMediaAnual: function () {
                return Fake.fromArray([15, 22, 29]);
            },
            ubicExtensionFinca: function () {
                return Fake.fromArray([1000, 2352, 789]);
            },
            ubicUsoAnteriorFinca: function () {
                return Fake.fromArray(['Ganadería', 'Camaronera', 'Cultivos de caña']);
            },
            ubicAnioInicioManejoAgroecológico: function () {
                return Fake.fromArray(['1945', '2005', '2013']);
            },
            ubicAreaCultivada: function () {
                return Fake.fromArray([50, 120, 3652]);
            },
            ubicAreaSilvestre: function () {
                return Fake.fromArray(['1945', '2005', '2013']);
            },
            ubicAreaTotalConManejoAgroecologico: function () {
                return Fake.fromArray([50, 354, 287]);
            },
            ubicAreaConMajejoConvencional: function () {
                return Fake.fromArray([123, 1025, 785]);
            },
            ubicAreaPastos: function () {
                return Fake.fromArray([254, 753, 3852]);
            },
            ubicAreaConstrucciones: function () {
                return Fake.fromArray([225, 452, 987]);
            },
            ubicAreaParaAnimales: function () {
                return Fake.fromArray([545, 147, 652]);
            },
            ubicAreaConManejoSilvopastoril: function () {
                return Fake.fromArray([852, 200, 600]);
            },
            ubicNumeroPersonasTrabajanFinca: function () {
                return Fake.fromArray([145, 900, 2600]);
            },
            /*** El Entorno ***/
            entoPresenciaForestalesNativos: function () {
                return Fake.fromArray(['Si', 'No']);
            },
            entoEspeciesForestalesExoticas: function () {
                return Fake.fromArray([52, 458, 1000]);
            },
            entoEspeciesFrutales: function () {
                return Fake.fromArray([150, 654, 2897]);
            },
            entoPresenciaReservoriosAgua: function () {
                return Fake.fromArray(['Si', 'No']);
            },
            entoPresenciaQuebradasRiosEsteros: function () {
                return Fake.fromArray(['Cascada Azul', 'Machangara', 'Velo de la novia']);
            },
            entoAreaManejoMateriaOrganica: function () {
                return Fake.fromArray([10, 54, 876]);
            },
            entoAreaParaPostcosecha: function () {
                return Fake.fromArray([370, 600, 2145]);
            },
            entoAreaAlmacenamientoInsumos: function () {
                return Fake.fromArray([300, 800, 1020]);
            },
            entoAreaAlmacenamientoProductos: function () {
                return Fake.fromArray([789, 1200, 4085]);
            },
            entoAreaEquiposMaquinarias: function () {
                return Fake.fromArray([1459, 3528, 4000]);
            },
            entoCosechaLluvia: function () {
                return Fake.fromArray(['Si', 'No']);
            },
            entoAguaCultivosAnimales: function () {
                return Fake.fromArray(['Si', 'No']);
            },
            entoAreaErosionActualEvidente: function () {
                return Fake.fromArray([1633, 2222, 3524]);
            },
            entoAreaConRiesgosErosion: function () {
                return Fake.fromArray([3330, 5214, 70]);
            },
            entoCultivoPrincipal: function () {
                return Fake.fromArray(['Papas', 'Maíz', 'Tomates']);
            },
            entoAreaDedicadaCultivoPrincipal: function () {
                return Fake.fromArray([1110, 258, 47]);
            },
            entoAreaInvernadero: function () {
                return Fake.fromArray([12, 50, 196]);
            },
            entoUsoActualFincasColindantes: function () {
                return Fake.fromArray(['Crianza de animales', 'Fábrica de jabones', 'Destilería']);
            },
            entoManejoProcesamientoBasuras: function () {
                return Fake.fromArray(['Manual', 'Semi industrializado', 'No existe']);
            },
            entoPosiblesFuentesContaminacionExterna: function () {
                return Fake.fromArray(['Radiación gama', 'Filtraciones de gases', 'Aguas servidas']);
            },
            entoDistanciaLinderoFuentesContaminacion: function () {
                return Fake.fromArray([10, 650, 1200]);
            },
            /*** El Subsistema Suelo ***/
            sueloControlErosionActualEvidente: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            sueloPresenciaObrasControlErosion: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            sueloUsoRacionalHerramientasMecanizacion: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            sueloPresenciaMateriaOrganica: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            sueloCoberturaVivaMuerta: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            sueloManejoMateriaOrganica: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            sueloUsoMateriaOrganicaPropia: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            sueloUsoFertilizantesQuimicos: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            sueloUsoDesinfectantesSuelo: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            sueloRiesgosContaminacion: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            sueloExisteAnalisis: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            sueloExistePlanManejo: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            sueloPresenciaVida: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            sueloObservaciones: function () {
                return Fake.fromArray(['El suelo luce desértico', 'La ganadería mató todos los micro organismos', 'Realizan prácticas permaculturales, convinadas con agroecología']);
            },
            /*** El Subsistema Agua y Humedad ***/
            aguaBuenaCalidad: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            aguaReservorios: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            aguaInfraestructuraRiego: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            aguaRiesgosContaminacion: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            aguaAnalisisAgua: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            aguaPlanDescontaminacion: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            aguaEstrategiasDrenaje: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            aguaCanalesProtegidos: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            aguaObservaciones: function () {
                return Fake.fromArray(['Las aguas grises y negras van al mismo pozo', 'Utilizan bio filtros para reducir contaminación', 'Se observa poco cuidado de los recursos hídricos']);
            },
            /*** El Subsistema Cultivos ***/
            cultivosPlanificacionRotacion: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cultivosAsociacion: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cultivosRegistrosLotes: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cultivosPesticidas: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cultivosContaminacionQuimicos: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cultivosProteccionContaminacionVecinos: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cultivosSemillasPlantulasPropias: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cultivosSemillasPlantulasProveedor: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cultivosDesinfectantesNoAprobados: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cultivosManejoEnfermedades: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cultivosManejoHierbas: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cultivosObservaciones: function () {
                return Fake.fromArray(['El monocultivo está destruyendo el ecosistema nativo', 'Buen manejo de asociaciones de cultivos para maximizar producción', 'La rotación de cultivos se hace cada 25 meses']);
            },
            /*** El Subsistema Agroforestal ***/
            agroforestalFertilidadSuelo: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            agroforestalErosionSuelo: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            agroforestalDivisionesLotes: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            agroforestalCortinasRompevientos: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            agroforestalLuzSombraArboles: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            agroforestalObservaciones: function () {
                return Fake.fromArray(['Las divisiones por lotes no cumplen con su función y generan problemas', 'Existen árboles viejos junto a la finca que pueden caerse', 'El bosque nativo se está regenerando gracias a capacitaciones del MAGAP']);
            },
            /*** El Subsistema Animal ***/
            animalInfraestructuraAdecuada: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            animalAlimentoPropio: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            animalAlimentoProveedores: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            animalSanidad: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            animalLimpieza: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            animalRegistros: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            animalObservaciones: function () {
                return Fake.fromArray(['Los animales no tienen suficiente espacio', 'Se evidenció maltrato animal', 'Los animales gozan de protección y bienestar']);
            },
            /*** Cosecha, Postcosecha y Comercialización ***/
            cosechaMaterialesAdecuados: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cosechaTransporte: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cosechaInfraestructura: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cosechaAgua: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cosechaResiduos: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cosechaEmbalajes: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cosechaTransporteFerias: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cosechaAlmacenamiento: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cosechaRegistros: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cosechaSeguimiento: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cosechaAlmacenamientoHerramientas: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            cosechaObservaciones: function () {
                return Fake.fromArray(['La distribución de la cosecha es equitativa en la comunidad', 'Comercialmente tienen problemas administrativos y contables', 'Las ventas del último semestre crecieron un 200%']);
            },
            /*** Justicia Social y Documentos ***/
            socialBienestar: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            socialPlanManejo: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            socialRegistrosProduccion: function () {
                return Fake.fromArray(['Cumple', 'Cumple parcialmente', 'No cumple']);
            },
            socialObservaciones: function () {
                return Fake.fromArray(['Los empleados no están satisfechos con el trato recibido', 'Las condiciones laborales son óptimas', 'Existe mucha rotación de personal']);
            },
            createdAt: function () {
                return Fake.fromArray(['2015-01-05', '2015-01-26', '2015-02-11', '2015-03-16', '2015-04-08']);
            },
            createdBy: function () {
                return this.userId;
            }
        });

        _(100).times(function () {
            Factory.create('veeduria');
        });
    }
});