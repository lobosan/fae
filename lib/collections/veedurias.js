Veedurias = new Mongo.Collection('veedurias');

Veedurias.attachSchema(new SimpleSchema({
    /*** Identificación del productor ***/
    prodNombreResponsableProduccion: {
        type: String,
        label: 'Nombre del o la responsable de la producción “RP”'
    },
    prodNombreFinca: {
        type: String,
        label: 'Nombre de la finca'
    },
    prodCorreoElectronico: {
        type: String,
        label: 'Correo electrónico',
        regEx: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    prodNumeroTelefonoFijo: {
        type: String,
        label: 'Número teléfono fijo'
    },
    prodNumeroCelular: {
        type: String,
        label: 'Número celular'
    },
    /*** Ubicación ***/
    ubicProvincia: {
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
    ubicCanton: {
        type: String,
        label: 'Cantón',
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                var codigoProvincia = AutoForm.getFieldValue('ubicProvincia');
                var cantones = new RegExp('^' + codigoProvincia + '[\\d]{2}$');
                return DPA.find({codigo: {$regex: cantones}}).map(function (dpa) {
                    return {label: dpa.descripcion, value: dpa.codigo};
                });
            }
        }
    },
    ubicParroquia: {
        type: String,
        label: 'Parroquia',
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                $('#ubicProvincia').change(function() {
                    $('#ubicParroquia option[value!=""]').remove();
                });
                var codigoCanton = AutoForm.getFieldValue('ubicCanton');
                var parroquias = new RegExp('^' + codigoCanton + '[\\d]{2}$');
                return DPA.find({codigo: {$regex: parroquias}}).map(function (dpa) {
                    return {label: dpa.descripcion, value: dpa.codigo};
                });
            }
        }
    },
    ubicSectorComunidad: {
        type: String,
        label: 'Sector o comunidad'
    },
    ubicNombreOrganizacion: {
        type: String,
        label: 'Nombre de la organización',
        defaultValue: '',
        optional: true
    },
    ubicPrecipitacionAnual: {
        type: Number,
        label: 'Precipitación anual (mm)',
        min: 0
    },
    ubicMesesLluvia: {
        type: [String],
        label: 'Meses de lluvia',
        optional: true,
        autoform: {
            type: 'select-checkbox-inline',
            options: function () {
                return [
                    {label: 'Enero', value: 'Enero'},
                    {label: 'Febrero', value: 'Febrero'},
                    {label: 'Marzo', value: 'Marzo'},
                    {label: 'Abril', value: 'Abril'},
                    {label: 'Mayo', value: 'Mayo'},
                    {label: 'Junio', value: 'Junio'},
                    {label: 'Julio', value: 'Julio'},
                    {label: 'Agosto', value: 'Agosto'},
                    {label: 'Septiembre', value: 'Septiembre'},
                    {label: 'Octubre', value: 'Octubre'},
                    {label: 'Noviembre', value: 'Noviembre'},
                    {label: 'Diciembre', value: 'Diciembre'}
                ];
            }
        }
    },
    ubicMesesSinLluvia: {
        type: [String],
        label: 'Meses sin lluvia',
        autoform: {
            type: 'select-checkbox-inline',
            options: function () {
                return [
                    {label: 'Enero', value: 'Enero'},
                    {label: 'Febrero', value: 'Febrero'},
                    {label: 'Marzo', value: 'Marzo'},
                    {label: 'Abril', value: 'Abril'},
                    {label: 'Mayo', value: 'Mayo'},
                    {label: 'Junio', value: 'Junio'},
                    {label: 'Julio', value: 'Julio'},
                    {label: 'Agosto', value: 'Agosto'},
                    {label: 'Septiembre', value: 'Septiembre'},
                    {label: 'Octubre', value: 'Octubre'},
                    {label: 'Noviembre', value: 'Noviembre'},
                    {label: 'Diciembre', value: 'Diciembre'}
                ];
            }
        }
    },
    ubicAltitud: {
        type: Number,
        label: 'Altitud (m.s.n.m)',
        min: 0
    },
    ubicTemperaturaMediaAnual: {
        type: Number,
        label: 'Temperatura media anual (°C)',
        min: 0
    },
    ubicExtensionFinca: {
        type: Number,
        label: 'Extensión de la finca (m²)',
        min: 0
    },
    ubicUsoAnteriorFinca: {
        type: String,
        label: 'Uso anterior de la finca'
    },
    ubicAnioInicioManejoAgroecológico: {
        type: String,
        label: 'Año de inicio del manejo agroecológico',
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                return _.map(_.range(1920, new Date().getFullYear()+1), function (value) {
                    return {label: value, value: value};
                });
            }
        }
    },
    ubicAreaCultivada: {
        type: Number,
        label: 'Área cultivada (m²)',
        min: 0
    },
    ubicAreaSilvestre: {
        type: Number,
        label: 'Área silvestre (m²)',
        min: 0,
        defaultValue: 0,
        optional: true
    },
    ubicAreaTotalConManejoAgroecologico: {
        type: Number,
        label: 'Área total con manejo agroecológico (m²)',
        min: 0
    },
    ubicAreaConMajejoConvencional: {
        type: Number,
        label: 'Área total con manejo convencional (m²)',
        min: 0
    },
    ubicAreaPastos: {
        type: Number,
        label: 'Área de pastos (m²)',
        min: 0
    },
    ubicAreaConstrucciones: {
        type: Number,
        label: 'Área de construcciones incluyendo viviendas (m²)',
        min: 0
    },
    ubicAreaParaAnimales: {
        type: Number,
        label: 'Área para animales (m²)',
        min: 0
    },
    ubicAreaConManejoSilvopastoril: {
        type: Number,
        label: 'Área con manejo silvopastoril (pasto y árboles) (m²)',
        min: 0
    },
    ubicNumeroPersonasTrabajanFinca: {
        type: Number,
        label: 'Número de personas que trabajan en la finca',
        min: 0
    },
    /*** El Entorno ***/
    entoPresenciaForestalesNativos: {
        type: String,
        label: 'Presencia de áreas con especies forestales nativos',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No',
            options: function () {
                return [
                    {label: 'Si', value: 'Si'},
                    {label: 'No', value: 'No'}
                ];
            }
        }
    },
    entoEspeciesForestalesExoticas: {
        type: Number,
        label: 'Cantidad de especies forestales exóticas',
        min: 0,
        defaultValue: 0
    },
    entoEspeciesFrutales: {
        type: Number,
        label: 'Cantidad de especies frutales',
        min: 0,
        defaultValue: 0
    },
    entoPresenciaReservoriosAgua: {
        type: String,
        label: 'Presencia de reservorios de agua',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No',
            options: function () {
                return [
                    {label: 'Si', value: 'Si'},
                    {label: 'No', value: 'No'}
                ];
            }
        }
    },
    entoPresenciaQuebradasRiosEsteros: {
        type: String,
        label: 'Presencia de quebradas, ríos, esteros',
        defaultValue: 'No'
    },
    entoAreaManejoMateriaOrganica: {
        type: Number,
        label: 'Área para manejo de materia orgánica (m²)',
        min: 0
    },
    entoAreaParaPostcosecha: {
        type: Number,
        label: 'Área para postcosecha (m²)',
        min: 0
    },
    entoAreaAlmacenamientoInsumos: {
        type: Number,
        label: 'Área para almacenamiento de insumos (m²)',
        min: 0
    },
    entoAreaAlmacenamientoProductos: {
        type: Number,
        label: 'Área para almacenamiento de productos (m²)',
        min: 0
    },
    entoAreaEquiposMaquinarias: {
        type: Number,
        label: 'Área para equipos y maquinarias (m²)',
        min: 0
    },
    entoCosechaLluvia: {
        type: String,
        label: 'Cosecha de lluvia',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No',
            options: function () {
                return [
                    {label: 'Si', value: 'Si'},
                    {label: 'No', value: 'No'}
                ];
            }
        }
    },
    entoAguaCultivosAnimales: {
        type: String,
        label: 'Agua suficiente para cultivos y animales a lo largo del año',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No',
            options: function () {
                return [
                    {label: 'Si', value: 'Si'},
                    {label: 'No', value: 'No'}
                ];
            }
        }
    },
    entoAreaErosionActualEvidente: {
        type: Number,
        label: 'Área con erosión actual evidente (m²)',
        min: 0
    },
    entoAreaConRiesgosErosion: {
        type: Number,
        label: 'Área con riesgos de erosión (m²)',
        min: 0
    },
    entoCultivoPrincipal: {
        type: String,
        label: 'Cultivo principal'
    },
    entoAreaDedicadaCultivoPrincipal: {
        type: Number,
        label: 'Área dedicada al cultivo principal (m²)',
        min: 0
    },
    entoAreaInvernadero: {
        type: Number,
        label: 'Área de invernadero (m²)',
        min: 0
    },
    entoUsoActualFincasColindantes: {
        type: String,
        label: 'Uso actual de las fincas colindantes'
    },
    entoManejoProcesamientoBasuras: {
        type: String,
        label: 'Existe manejo y procesamiento de basuras',
        defaultValue: 'No'
    },
    entoPosiblesFuentesContaminacionExterna: {
        type: String,
        label: 'Posibles fuentes de contaminación externa'
    },
    entoDistanciaLinderoFuentesContaminacion: {
        type: Number,
        label: 'Distancia desde el lindero a las fuentes de contaminación (m)'
    },
    /*** El Subsistema Suelo ***/
    sueloControlErosionActualEvidente: {
        type: String,
        label: 'Control de la erosión actual evidente',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    sueloPresenciaObrasControlErosion: {
        type: String,
        label: 'Presencia de obras de control de la erosión',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    sueloUsoRacionalHerramientasMecanizacion: {
        type: String,
        label: 'Uso racional de herramientas y mecanización agrícola',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    sueloPresenciaMateriaOrganica: {
        type: String,
        label: 'Presencia de materia orgánica en el suelo',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    sueloCoberturaVivaMuerta: {
        type: String,
        label: 'Existe cobertura viva o muerta en el suelo',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    sueloManejoMateriaOrganica: {
        type: String,
        label: 'Manejo adecuado de la materia orgánica',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    sueloUsoMateriaOrganicaPropia: {
        type: String,
        label: 'Hay uso de materia orgánica propia',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    sueloUsoFertilizantesQuimicos: {
        type: String,
        label: 'Hay utilización de fertilizantes químicos no aprobados por SPG',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    sueloUsoDesinfectantesSuelo: {
        type: String,
        label: 'Hay utilización de desinfectantes para el suelo no aprobados por SPG',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    sueloRiesgosContaminacion: {
        type: String,
        label: 'Controlados los riesgos de contaminación por agentes nocivos y no aprobados por SPG',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    sueloExisteAnalisis: {
        type: String,
        label: 'Existe análisis del suelo',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    sueloExistePlanManejo: {
        type: String,
        label: 'Existe plan de manejo del suelo según análisis',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    sueloPresenciaVida: {
        type: String,
        label: 'Presencia de vida en el suelo',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    sueloObservaciones: {
        type: String,
        label: 'Observaciones para suelo',
        max: 500,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 7
            }
        }
    },
    /*** El Subsistema Agua y Humedad ***/
    aguaBuenaCalidad: {
        type: String,
        label: 'El agua es de buena calidad para los cultivos, animales y postcosecha',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    aguaReservorios: {
        type: String,
        label: 'Existen reservorios de agua, para al menos 6 meses (en zonas secas)',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    aguaInfraestructuraRiego: {
        type: String,
        label: 'Existen infraestructuras de riego adecuadas a la finca y o cultivos',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    aguaRiesgosContaminacion: {
        type: String,
        label: 'Existen riesgos de contaminación del agua',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    aguaAnalisisAgua: {
        type: String,
        label: 'Existencia de análisis del agua en la finca',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    aguaPlanDescontaminacion: {
        type: String,
        label: 'Existencia de un plan de descontaminación del agua',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    aguaEstrategiasDrenaje: {
        type: String,
        label: 'Estrategias de drenaje del exceso de agua lluvia o riego, en los lotes de cultivo',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    aguaCanalesProtegidos: {
        type: String,
        label: 'Canales de agua protegidos para evitar su erosión',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    aguaObservaciones: {
        type: String,
        label: 'Observaciones para agua y humedad',
        max: 500,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 7
            }
        }
    },
    /*** El Subsistema Cultivos ***/
    cultivosPlanificacionRotacion: {
        type: String,
        label: 'Existencia de planificación de rotación de cultivos por lotes',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cultivosAsociacion: {
        type: String,
        label: 'Existencia de asociación de cultivos',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cultivosRegistrosLotes: {
        type: String,
        label: 'Existencia de registros por lotes',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cultivosPesticidas: {
        type: String,
        label: 'Evidencia de presencia y/o uso de pesticidas no aprobados por el SPG',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cultivosContaminacionQuimicos: {
        type: String,
        label: 'Evidencia de contaminación por químicos, industriales, domésticos o de otra índole en lotes',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cultivosProteccionContaminacionVecinos: {
        type: String,
        label: 'Suficiente protección de la finca de posibles contaminaciones por parte de vecinos',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cultivosSemillasPlantulasPropias: {
        type: String,
        label: 'El origen de semillas y plántulas es propio',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cultivosSemillasPlantulasProveedor: {
        type: String,
        label: 'El origen de semillas y plántulas es de proveedor certificado',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cultivosDesinfectantesNoAprobados: {
        type: String,
        label: 'Las semillas y plantas tienen desinfectantes no aprobados por SPG',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cultivosManejoEnfermedades: {
        type: String,
        label: 'Existen planes de manejo de insectos y enfermedades en los cultivos',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cultivosManejoHierbas: {
        type: String,
        label: 'Existe un plan de manejo de las hierbas silvestres (malezas)',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cultivosObservaciones: {
        type: String,
        label: 'Observaciones para cultivos',
        max: 500,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 7
            }
        }
    },
    /*** El Subsistema Agroforestal ***/
    agroforestalFertilidadSuelo: {
        type: String,
        label: 'Presencia de árboles y arbustos para mejorar y mantener la fertilidad del suelo',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    agroforestalErosionSuelo: {
        type: String,
        label: 'Presencia de árboles y arbustos para controlar la erosión del suelo',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    agroforestalDivisionesLotes: {
        type: String,
        label: 'Presencia de árboles y arbustos en las divisiones de lotes',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    agroforestalCortinasRompevientos: {
        type: String,
        label: 'Presencia de Cortinas Rompevientos alrededor de la finca',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    agroforestalLuzSombraArboles: {
        type: String,
        label: 'Manejo adecuado de la luz y sombra mediante árboles',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    agroforestalObservaciones: {
        type: String,
        label: 'Observaciones para el subsistema agroforestal',
        max: 500,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 7
            }
        }
    },
    /*** El Subsistema Animal ***/
    animalInfraestructuraAdecuada: {
        type: String,
        label: 'Infraestructura e instalaciones adecuada al tipo de animal',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    animalAlimentoPropio: {
        type: String,
        label: 'Abastecimiento de  alimento de origen propio',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    animalAlimentoProveedores: {
        type: String,
        label: 'Abastecimiento de alimento de proveedores sin certificación',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    animalSanidad: {
        type: String,
        label: 'Existencia de manejo de sanidad en los animales según SPG',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    animalLimpieza: {
        type: String,
        label: 'Limpieza adecuada de estiércoles, orinas y derivados',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    animalRegistros: {
        type: String,
        label: 'Existencia de registros del manejo de animales',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    animalObservaciones: {
        type: String,
        label: 'Observaciones para el subsistema animal',
        max: 500,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 7
            }
        }
    },
    /*** Cosecha, Postcosecha y Comercialización ***/
    cosechaMaterialesAdecuados: {
        type: String,
        label: 'Uso de materiales y equipos adecuados en la cosecha',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cosechaTransporte: {
        type: String,
        label: 'Transporte cuidadoso de la cosecha al área de poscosecha',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cosechaInfraestructura: {
        type: String,
        label: 'Infraestructura adecuada para poscosecha',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cosechaAgua: {
        type: String,
        label: 'Agua adecuada para poscosecha',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cosechaResiduos: {
        type: String,
        label: 'Manejo adecuado de residuos líquidos y sólidos',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cosechaEmbalajes: {
        type: String,
        label: 'Embalajes permitidos por SPG',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cosechaTransporteFerias: {
        type: String,
        label: 'Transporte adecuado de productos a ferias',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cosechaAlmacenamiento: {
        type: String,
        label: 'Buenas condiciones de almacenamiento de cosechas y productos',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cosechaRegistros: {
        type: String,
        label: 'Evidencia de registros de cosecha, poscosecha y comercialización',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cosechaSeguimiento: {
        type: String,
        label: 'Fácil seguimiento de productos desde el consumidor hasta el lote de cultivo',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cosechaAlmacenamientoHerramientas: {
        type: String,
        label: 'Adecuado almacenamiento de herramientas, combustibles y materiales de construcción',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    cosechaObservaciones: {
        type: String,
        label: 'Observaciones para cosecha, postcosecha y comercialización',
        max: 500,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 7
            }
        }
    },
    /*** Justicia Social y Documentos ***/
    socialBienestar: {
        type: String,
        label: 'En caso de haber empleados en la finca, gozan de bienestar',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    socialPlanManejo: {
        type: String,
        label: 'Existencia de un plan de manejo de la finca',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    socialRegistrosProduccion: {
        type: String,
        label: 'Manejo de registros de la producción',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'No cumple',
            options: function () {
                return [
                    {label: 'Cumple', value: 'Cumple'},
                    {label: 'Cumple parcialmente', value: 'Cumple parcialmente'},
                    {label: 'No cumple', value: 'No cumple'}
                ];
            }
        }
    },
    socialObservaciones: {
        type: String,
        label: 'Observaciones sobre justicia social y documentos',
        max: 500,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 7
            }
        }
    },
    createdAt: {
        type: String,
        autoValue: function() {
            var currentDate = new Date();
            var date;
            date = currentDate.getFullYear() + '-' + ('0' + (currentDate.getMonth()+1)).slice(-2) + '-' + ('0' + currentDate.getDate()).slice(-2);
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