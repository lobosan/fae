Meteor.startup(function () {
    var countOrganizacionIndicadores = OrganizacionIndicadores.find({}).count();

    if (countOrganizacionIndicadores == 0) {
        var criterios = [
            {campo: 'conocimientosGenerales', titulo: 'Conocimientos de los principios generales de la agroecología', criterios: [
                'No Conoce',
                'Conoce pero no conecta con los trabajos diarios',
                'Conoce y logra conectarlo con el trabajo diario'
            ]},
            {campo: 'decisionPolitica', titulo: 'Decisión política', criterios: [
                'La reflexión sobre el proyecto político es ausente',
                'Hay discusión activa en la organización',
                'Los socios defienden el proyecto político'
            ]},
            {campo: 'disenioFinca', titulo: 'Diseño de finca', criterios: [
                'No existe diseño',
                'Existe diseño básico',
                'Tiene plan de manejo'
            ]},
            {campo: 'capacidadesTecnicas', titulo: 'Capacidades técnicas', criterios: [
                'No conoce técticas de agroecología',
                'Conoce algunas recetas',
                'Aplica sistemáticamente técnicas de agroecología'
            ]},
            {campo: 'capacidadTecnicaGrupo', titulo: 'Capacidad técnica instalada en la organización', criterios: [
                'No reconoce los problemas en la finca',
                'Reconoce problemas e identifica soluciones',
                'Crean sus propias recetas'
            ]},
            {campo: 'capacidadOrganizacional', titulo: 'Capacidad organizacional', criterios: [
                'Cada productor gestiona individualmente',
                'La estructura actual genera cierto grado de gestión',
                'Se gestiona conjuntamente para resolver problemas'
            ]},
            {campo: 'mecanismoApoyoInterno', titulo: 'Mecanismo de apoyo interno', criterios: [
                'No existe',
                'Existe esporádicamente en la organización',
                'Existen momentos estructurados que garantizan continuidad de apoyo interno'
            ]},
            {campo: 'promotores', titulo: 'Promotores', criterios: [
                'No tienen promotores o no funcionan',
                'Tienen productores con capacidad limitada o actúan poco',
                'Tienen promotores que actúan activamente'
            ]},
            {campo: 'manejoNormas', titulo: 'Manejo de normas', criterios: [
                'No hay normas',
                'Hay normas pero no hay dominio, no lo usan',
                'Las normas son elemento vivo, se usan y actualizan'
            ]},
            {campo: 'veedores', titulo: 'Veedores', criterios: [
                'No se realizan veedurías',
                'Existen veedores con poca capacidad de cobertura',
                'Los veedores generan informes de calidad con 100% de cobertura'
            ]},
            {campo: 'comiteEtica', titulo: 'Comité de ética', criterios: [
                'No hay comite de ética',
                'Tienen un comité de ética con reducida participación',
                'El comité de ética está completo y con conocimientos suficientes'
            ]}
        ];

        _.each(criterios, function (criterio) {
            OrganizacionIndicadores.insert(criterio);
        });
    }
});


