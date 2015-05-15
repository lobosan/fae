Meteor.startup(function () {

    Factory.define('grupo', Grupos, {
        provincia: function () {
            return Fake.fromArray(['Pichincha', 'Imbabura', 'Loja']);
        },
        canton: function () {
            return Fake.fromArray(['Quito', 'Alausí', 'Archidona']);
        },
        parroquia: function () {
            return Fake.fromArray(['Abdón Calderón', 'Achupallas', 'Alamor, Cabecera Cantonal']);
        },
        sectores: function () {
            return Fake.fromArray(['Cotocollao', 'La Independencia', 'Pedro de Jaramillo']);
        },
        nombreGrupo: function () {
            return Fake.fromArray(['Energía solidaria', 'Alternativas de desarrollo', 'La lucha de los pobres']);
        },
        representante: function () {
            return Fake.fromArray(['Juan Guillén', 'María Loor', 'Diego Pilataxi']);
        },
        correo: function () {
            return Fake.fromArray(['test@test.com', 'pedro@test.com', 'lucho@test.com']);
        },
        telefonoFijo: function () {
            return Fake.fromArray(['025689569', '042365856', '062214455']);
        },
        telefonoCelular: function () {
            return Fake.fromArray(['0985475221', '0812322332', '0999925466']);
        },
        personeriaJuridica: function () {
            return Fake.fromArray(['Si', 'No']);
        },
        adjudica: function () {
            return Fake.fromArray([true, false]);
        },
        tiempoVidaGrupo: function () {
            return Fake.word();
        },
        juridica: function () {
            return Fake.fromArray([true, false]);
        },
        deHecho: function () {
            return Fake.fromArray([true, false]);
        },
        numeroMiembros: function () {
            return _.random(1, 100);
        },
        diaPreferidoReuniones: function () {
            return Fake.fromArray(['06/04/2015 2:30 PM', '21/06/2015 8:30 AM', '15/07/2015 10:00 AM']);
        },
        conocimientosGenerales: function () {
            return _.random(1, 10);
        },
        decisionPolitica: function () {
            return _.random(1, 10);
        },
        disenioFinca: function () {
            return _.random(1, 10);
        },
        capacidadesTecnicas: function () {
            return _.random(1, 10);
        },
        capacidadTecnicaGrupo: function () {
            return _.random(1, 10);
        },
        capacidadOrganizacional: function () {
            return _.random(1, 10);
        },
        mecanismoApoyoInterno: function () {
            return _.random(1, 10);
        },
        promotores: function () {
            return _.random(1, 10);
        },
        manejoNormas: function () {
            return _.random(1, 10);
        },
        veedores: function () {
            return _.random(1, 10);
        },
        comiteEtica: function () {
            return _.random(1, 10);
        },
        createdBy: function () {
            return Fake.fromArray(['JHspeLawggiZJdCeq', 'auPQTd3aaR9yr2G4Q']);
        }
    });

    if (Grupos.find({}).count() < 100) {
        _(100).times(function (n) {
            Factory.create('grupo');
        });
    }
});