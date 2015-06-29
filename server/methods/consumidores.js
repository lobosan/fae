Meteor.methods({
    initializeConsumidores: function () {
        Factory.define('consumidor', Consumidores, {
            consNombre: function () {
                return Fake.fromArray(['María Carrera', 'Juan Chiliquinga', 'Rodrigo Pérez']);
            },
            consContacto: function () {
                return Fake.fromArray(['Juan Guillén', 'María Loor', 'Diego Pilataxi']);
            },
            consCalidadProductoAdquirido: function () {
                return Fake.fromArray(['Excelente', 'Aceptable', 'Por mejorar']);
            },
            consCalidadAtencionVendedor: function () {
                return Fake.fromArray(['Excelente', 'Aceptable', 'Por mejorar']);
            },
            consCalidadAreaExpendio: function () {
                return Fake.fromArray(['Excelente', 'Aceptable', 'Por mejorar']);
            },
            consPresentacionProducto: function () {
                return Fake.fromArray(['Excelente', 'Aceptable', 'Por mejorar']);
            },
            consNombreProductorVisitado: function () {
                return Fake.fromArray(['Energía solidaria', 'Alternativas de desarrollo', 'La lucha de los pobres']);
            },
            consNombreFeriaVisitada: function () {
                return Fake.fromArray(['Feria de Carcelén', 'La Floresta', 'El mercado de San Blas']);
            },
            consComentariosSugerencias: function () {
                return Fake.fromArray(['La feria carece de opciones variadas', 'La atención al cliente es amable y cordial', 'Los precios de los productos son prohibitivos']);
            },
            consImpresionesVisitaFinca: function () {
                return Fake.fromArray(['Las instalaciones carecen de todas las facilidades', 'El horario de atención debería extenderse', 'Buena iniciativa para fomentar la economía solidaria']);
            },
            createdAt: function () {
                return Fake.fromArray(['2015-01-05', '2015-01-26', '2015-02-11', '2015-03-16', '2015-04-08']);
            },
            createdBy: function () {
                return this.userId;
            }
        });

        _(100).times(function () {
            Factory.create('consumidor');
        });
    }
});