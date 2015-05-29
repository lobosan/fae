Meteor.startup(function () {
    var countAcompanamientoIndicadores = AcompanamientoIndicadores.find({}).count();

    if (countAcompanamientoIndicadores == 0) {
        var criterios = [
            /*** Indicadores para el entorno ***/
            {campo: 'entoForestalesNativos', titulo: 'Presencia de áreas con especies forestales nativos', criterios: [
                'No hay árboles o arbustos nativos',
                'Presencia esporádica de árboles y arbustos nativos',
                'Suficientes áreas con árboles y arbustos nativos'
            ]},
            {campo: 'entoEspeciesFrutales', titulo: 'Presencia de especies frutales', criterios: [
                'No hay especies frutales',
                'Hay una sola especie frutal',
                'Hay diversidad de especies frutales'
            ]},
            {campo: 'entoCaminosAgua', titulo: 'Protección de caminos de agua', criterios: [
                'Existen cárcavas sin medidas de protección',
                'Cárcavas con protección incompleta',
                'Cárcavas con manejo contra la erosión'
            ]},
            {campo: 'entoMateriaOrganica', titulo: 'Correcto manejo de materia orgánica', criterios: [
                'La materia orgánica se desperdicia',
                'Materia orgánica en proceso de descomposición',
                'Materia orgánica en varios estados de descomposición incluso bien descompuestos'
            ]},
            {campo: 'entoMateriaNoOrganica', titulo: 'Correcto manejo de material no orgánica', criterios: [
                'Basura no biodegradable desperdigada por en la finca',
                'Se guarda la basura pero no se la trata',
                'El manejo del material no orgánico no contamina el medio ambiente'
            ]},
            {campo: 'entoPoscosecha', titulo: 'Área adecuada para poscosecha', criterios: [
                'No existe área para poscosecha',
                'Se lavan productos cosechados en un grifo a cielo abierto',
                'Área implementada para poscosecha'
            ]},
            {campo: 'entoBodegasAlmacenes', titulo: 'Áreas adecuadas para bodegas y almacenes', criterios: [
                'Las herramientas, maquinarias, materiales, utensilios y cosechas están en un solo sitio (cuarto)',
                'Existen al menos 2 espacios como bodegas y almacenes',
                'Las herramientas, maquinarias, materiales, utensilios y cosechas están en su respectivo lugar'
            ]},
            {campo: 'entoAguaHumedad', titulo: 'Manejo racional del agua y humedad', criterios: [
                'Existe desperdicio de agua en la finca (en general)',
                'Se reutiliza parte del agua que se usa en la finca',
                'Se practican coberturas de suelo, reciclamiento y cosecha de agua, se almacena el agua para uso general en la finca'
            ]},
            {campo: 'entoAmenazasExternasContaminacion', titulo: 'Correcta protección de la finca, de las amenazas externas de contaminación', criterios: [
                'No existen medidas de protección en los contornos de la finca ya sean barreras vivas o muertas',
                'La protección existente no garantiza protección',
                'Las barreras vivas o muertas alrededor de la finca garantizan protección'
            ]},
            /*** Indicadores para el subsistema del suelo ***/
            {campo: 'sueloErosionActual', titulo: 'Control de la erosión actual', criterios: [
                'La capa arable está expuesta al clima',
                'Al menos el 50% de la finca tiene medidas de control contra la erosión',
                'Toda la finca cuenta con protección contra la erosión se ve su funcionamiento'
            ]},
            {campo: 'sueloMecanizacionAgricola', titulo: 'Uso racional de herramientas y mecanización agrícola', criterios: [
                'Se realizan labores a favor de la pendiente; y se voltean las capas del suelo sin criterio alguno',
                'Se toman precauciones pero no son suficientes',
                'Se practica la labranza mínima'
            ]},
            {campo: 'sueloMateriaOrganica', titulo: 'Materia orgánica en el suelo', criterios: [
                'No se ven restos de materia orgánica en el suelo',
                'Al menos se ven raíces secas y en descomposición',
                'Se ve materia orgánica sobre e incorporado al suelo, en diferentes estados de descomposición'
            ]},
            {campo: 'sueloAbastecimientoMateriaOrganica', titulo: 'Abastecimiento de materia orgánica', criterios: [
                'La finca carece de materia orgánica',
                'Solo una fuente de abastecimiento de materia orgánica',
                'Existen varias fuentes de abastecimiento de materia orgánica'
            ]},
            {campo: 'sueloCobertura', titulo: 'Cobertura viva o muerta en el suelo', criterios: [
                'Las áreas de cultivo están expuestas al tiempo y al clima',
                'El 50 % del área de cultivo se encuentra protegido',
                'Existen coberturas vivas y muertas sobre las áreas de cultivo'
            ]},
            {campo: 'sueloSoltura', titulo: 'Soltura del suelo', criterios: [
                'Capa arable casi inexistente o muy dura',
                'Capa arable delgada con alguna grumosidad',
                'Capa arable profunda existe grumosidad'
            ]},
            {campo: 'sueloActividadBiologica', titulo: 'Actividad biológica', criterios: [
                'No hay indicios de macro, mezo y microorganismos en el suelo; no hay efervescencia del suelo con el agua oxigenada',
                'Se ven galerías en el suelo efecto de las lombrices y otros insectos, poca efervescencia del suelo con el agua oxigenada',
                'Es evidente los macro, mezo y microorganismos en el suelo; gran efervescencia del suelo con el agua oxigenada'
            ]},
            {campo: 'sueloEstructura', titulo: 'Estructura del suelo', criterios: [
                'No hay grumos ni terrones en el suelo',
                'Pocos terrones y grumos en el suelo',
                'El suelo forma terrones en forma normal, se ven grumos'
            ]},
            /*** Indicadores para el subsistema de agua y humedad ***/
            {campo: 'aguaCantidad', titulo: 'Cantidad suficiente de agua para los cultivos, animales y poscosecha', criterios: [
                'En época seca, no hay disponibilidad de agua, solo la de red pública',
                'Se traslada agua de la fuente más cercana y de red pública',
                'Existen reservorios de agua que garantizan abastecimiento en épocas secas'
            ]},
            {campo: 'aguaCalidadCultivos', titulo: 'Agua de buena calidad para los cultivos, animales y poscosecha', criterios: [
                'Se toma agua de la acequia o pozo sin tratamiento previo no hay análisis de calidad',
                'Existen medidas de tratamiento de agua, pero no son suficientes',
                'Existen medidas de tratamiento del agua que ingresa a la finca'
            ]},
            {campo: 'aguaCalidadSistemasReserva', titulo: 'Calidad de sistemas de reserva de agua para los cultivos, animales y poscosecha', criterios: [
                'No hay sistemas de reserva de agua, se toma la disponible',
                'Los sistemas no tienen mantenimiento, hay deterioro',
                'Los sistemas funcionan óptimamente y están en buen estado'
            ]},
            {campo: 'aguaHumedadSuelo', titulo: 'Manejo de la humedad en el suelo', criterios: [
                'El suelo se seca rápido',
                'Se seca más lento pero permanece seco en épocas secas',
                'Mantiene algo de humedad hasta en épocas secas'
            ]},
            /*** Indicadores para el subsistema de cultivos ***/
            {campo: 'cultRotacion', titulo: 'Planificación de rotación de cultivos por lotes', criterios: [
                'No se planifica',
                'Existe una tradición de rotación pero no documentada',
                'Existe un documento en donde se evidencia un plan de rotación por lote'
            ]},
            {campo: 'cultAsociacion', titulo: 'Asociación de cultivos', criterios: [
                'Existen lotes con un solo cultivo',
                'El 50% de lotes con solo 2 especies asociadas',
                'Los lotes de cultivos de la finca tienen cultivos asociados'
            ]},
            {campo: 'cultDiversidadVegetal', titulo: 'Diversidad Vegetal', criterios: [
                'Existen menos de 5 especies vegetales en la finca',
                'Existen sobre 10 especies vegetales en la finca',
                'Existen muchas especie de vegetales en la finca'
            ]},
            {campo: 'cultDiversidadGenetica', titulo: 'Diversidad Genética', criterios: [
                'Existe una sola variedad de cada especie cultivada',
                'Existen 2 variedades de cada cultivo',
                'Existen más de 2 variedades de cada especie cultivada'
            ]},
            {campo: 'cultPresenciaFlores', titulo: 'Presencia de Flores', criterios: [
                'No hay parecencia flores',
                'Las flores son esporádicas',
                'Existe abundancia de flores, son parte de las áreas de cultivo'
            ]},
            {campo: 'cultLibreQuimicos', titulo: 'Finca libre de contaminación por químicos, industriales, domésticos o de otra índole en lotes', criterios: [
                'Existen restos derivados de la industria, desperdigados por la finca, se usan agroquímicos',
                'No se usan agroquímicos, pero hay basura en el campo',
                'No se usan agroquímicos, hay un tratamiento correcto de los derivados de la industria'
            ]},
            {campo: 'cultOrigenSemillas', titulo: 'El origen de semillas y plántulas es propio o de la zona', criterios: [
                'Las semillas y plantas se compran en almacenes o de origen desconocido',
                'Parte de las semillas y plantas se obtienen de la finca o de la zona cercana a la finca',
                'Las semillas y plantas en su totalidad son producidas en la finca y también en zonas cercanas a la finca'
            ]},
            {campo: 'cultInsectosEnfermedades', titulo: 'Plan de manejo de insectos y enfermedades en los cultivos', criterios: [
                'No se planifica. Se utilizan agroquímicos',
                'Se actúa según la necesidad, hay conocimiento de bio insumos',
                'Existe un plan basado en los principios de la agroecología'
            ]},
            {campo: 'cultHierbasSilvestres', titulo: 'Plan de manejo de las hierbas silvestres (malezas)', criterios: [
                'No se planifica, se utiliza herbicida',
                'Se controlan con métodos mecánicos',
                'Se controlan con métodos mecánicos y además es considerada como masa foliar que cubre el suelo y es parte de la diversidad de especies en los lotes'
            ]},
            {campo: 'cultAreasSilvestres', titulo: 'Recuperación de áreas silvestres (hábitat de flora y fauna benéfica)', criterios: [
                'Toda el área de la finca está dedicada a cultivos',
                'Pocas manchas de vegetación en las que no se interviene',
                'Existen áreas dedicadas a la regeneración natural, montículos de piedra que brinda casa a la fauna'
            ]},
            /*** Indicadores para el subsistema forestal ***/
            {campo: 'forestFertilidadSuelo', titulo: 'Árboles y arbustos para mejorar y mantener la fertilidad del suelo', criterios: [
                'Solo se distinguen especies arbóreas y arbustivas exóticas agresivas',
                'Hay pocas especies arbóreas y arbustivas que aportan fertilidad al suelo',
                'Existe una gran diversidad y cantidad de árboles y arbustos que incorporan materia orgánica al suelo. La mayoría son leguminosas'
            ]},
            {campo: 'forestErosion', titulo: 'Árboles y arbustos para controlar la erosión del suelo', criterios: [
                'Los árboles y arbustos existentes no controlan la erosión del suelo',
                'Los árboles y arbustos disminuyen la erosión del suelo',
                'Los árboles y arbustos, controlan la erosión en forma eficaz'
            ]},
            {campo: 'forestDivisionesLotes', titulo: 'Árboles y arbustos en las divisiones de lotes', criterios: [
                'Los lotes no tienen cercas vivas',
                'Árboles y arbustos esporádicos en las divisiones de lotes',
                'Los lotes de cultivo están divididos por árboles y arbustos'
            ]},
            {campo: 'forestCortinasRompevientos', titulo: 'Cortinas Rompevientos alrededor de la finca', criterios: [
                'No existen cortinas rompevientos',
                'Los árboles y arbustos existentes, no forman estructura de cortina rompevientos pero disminuye la velocidad del viento',
                'Los árboles y arbustos existentes, rompen con eficiencia la velocidad del viento'
            ]},
            {campo: 'forestLuzSombraArboles', titulo: 'Manejo adecuado de la luz y sombra mediante árboles', criterios: [
                'Áreas deforestadas, el sol y la lluvia, caen directamente a las áreas de cultivo afectaciones sanitarias en cultivos y animales por este efecto)',
                'Pocas áreas de manejo forestal con este fin',
                'Tanto animales y cultivos, se benefician de la sombra de árboles dispuestos en los lotes para este fin (de acuerdo a la zona)'
            ]},
            {campo: 'forestDiversidadEspeciesArboreas', titulo: 'Diversidad en especies (arbóreas, arbustivas, frutales, maderables)', criterios: [
                'Se ven menos de 3 especies (arbóreas, arbustivas, frutales, maderables)',
                'Se ven al menos de 5 especies (arbóreas, arbustivas, frutales, maderables)',
                'Se ven muchas especies (arbóreas, arbustivas, frutales, maderables)'
            ]},
            {campo: 'forestNativas', titulo: 'Las especies forestales son nativas', criterios: [
                'Presencia esporádica de especies nativas',
                'El 50% de las especies son nativas',
                'La mayoría de las especies forestales son nativas'
            ]},
            /*** Indicadores para el subsistema animal ***/
            {campo: 'animalDiversidad', titulo: 'Diversidad de especies de animales', criterios: [
                'No cría animales',
                'Cría una sola especie animal',
                'Cría varias especies de animales'
            ]},
            {campo: 'animalDiversidadGenetica', titulo: 'Diversidad genética de especies de animales', criterios: [
                'Solo una especie',
                'De dos a cuatro especies ',
                'Más de 5 especies'
            ]},
            {campo: 'animalInfraestructuraAdecuada', titulo: 'Infraestructura e instalaciones adecuada al tipo de animal', criterios: [
                'No hay infraestructura o es muy mínima',
                'Infraestructura en mal estado o no adecuada',
                'La infraestructura brinda bienestar a los animales'
            ]},
            {campo: 'animalAlimentoNecesario', titulo: 'Abastecimiento propio de alimento en cantidades necesarias al tipo de animal', criterios: [
                'El 100% de la alimentación es comprada',
                'El 50% es producida en la finca',
                'Por lo menos el 80% es producida en la finca'
            ]},
            {campo: 'animalCalidadNutricionalAlimento', titulo: 'Calidad nutricional del alimento adecuada al tipo de animal', criterios: [
                'Los animales denotan desnutrición',
                'Se completa la cantidad nutricional con fórmulas adquiridas en almacenes',
                'Los animales tienen raciones nutritivas y suficientes, comen a voluntad'
            ]},
            {campo: 'animalSanidadAnimales', titulo: 'Manejo de sanidad en los animales', criterios: [
                'Los animales tienen parásitos y enfermedades',
                'Solo se asiste cuando hay que curar',
                'El manejo adecuado mantiene animales libres de parásitos y enfermedades'
            ]},
            {campo: 'animalLimpiezaInstalaciones', titulo: 'Limpieza de instalaciones animales', criterios: [
                'No hay limpieza',
                'Se limpia cada mes',
                'Se limpia semanalmente y es riguroso'
            ]},
            {campo: 'animalManejoAnimales', titulo: 'Registros del manejo de animales', criterios: [
                'No hay registros',
                'Se lleva un registro pero no es riguroso',
                'Se registran todos los movimientos pecuarios dentro de la finca'
            ]},
            /*** Indicadores para instalaciones angares y bodegas ***/
            {campo: 'instalCondicion', titulo: 'Buenas condiciones de las instalaciones', criterios: [
                'Mal estado de las instalaciones, son riesgosas para personas',
                'Se  prevé mantenimiento y reparaciones a instalaciones',
                'Instalaciones en buen estado y seguras'
            ]},
            {campo: 'instalComodidad', titulo: 'Comodidad en el trabajo dentro de las instalaciones', criterios: [
                'Los trabajadores no tienen comodidad dentro de las instalaciones por varias razones',
                '50% de los trabajadores no están cómodos en las instalaciones',
                'Los trabajadores está a gusto dentro de las instalaciones'
            ]},
            {campo: 'instalRiesgosContaminacion', titulo: 'Protección de posibles riesgos de contaminación de las instalaciones', criterios: [
                'Las instalaciones son solo cuartos sin medidas de protección alguna',
                'Existen por lo menos medidas elementales para evitar posibles contaminaciones en las instalaciones',
                'Las instalaciones de la finca, no tienen riesgos de contaminación'
            ]},
            {campo: 'instalGuardadoHerramientas', titulo: 'Adecuado y ordenado guardado de herramientas, combustibles, lubricantes, materiales de construcción, otros,  en los galpones (no se mezclan con cosechas)', criterios: [
                'Se almacenan cosechas, semillas, junto a otros productos en un mismo lugar',
                'Existe un lugar para cada cosa, pero no hay orden',
                'Hay un orden adecuado, cada cosa en su lugar'
            ]},
            {campo: 'instalSenaletica', titulo: 'Señalética adecuada y suficiente a cada tipo de instalación', criterios: [
                'No hay identificación de áreas en zonas de riesgo',
                'Existen Letreros pero en malas condiciones',
                'Adecuada y suficiente a cada tipo de instalación'
            ]},
            {campo: 'instalDesechos', titulo: 'Desechos provenientes de instalaciones tratados adecuadamente', criterios: [
                'Los desechos de las instalaciones no son tratados',
                'Se tratan solo una parte de ellos',
                'Cada desecho es tratado de acuerdo a su condición'
            ]}
        ];

        _.each(criterios, function (criterio) {
            AcompanamientoIndicadores.insert(criterio);
        });
    }
});


