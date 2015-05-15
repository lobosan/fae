Grupos = new Mongo.Collection('grupos');

Grupos.attachSchema(new SimpleSchema({
    provincia: {
        type: String,
        label: 'Provincia',
        allowedValues: ['Pichincha', 'Imbabura', 'Loja'],
        autoform: {
            afFieldInput: {
                firstOption: "Seleccione una Provincia"
            }
        }
    },
    canton: {
        type: String,
        label: 'Cantón',
        allowedValues: ['Quito', 'Alausí', 'Archidona'],
        autoform: {
            afFieldInput: {
                firstOption: "Seleccione un Cantón"
            }
        }
    },
    parroquia: {
        type: String,
        label: 'Parroquia',
        allowedValues: ['Abdón Calderón', 'Achupallas', 'Alamor, Cabecera Cantonal'],
        autoform: {
            afFieldInput: {
                firstOption: "Seleccione una Parroquia"
            }
        }
    },
    sectores: {
        type: String,
        label: 'Sector/es'
    },
    nombreGrupo: {
        type: String,
        label: 'Nombre del grupo',
        max: 1024
    },
    representante: {
        type: String,
        label: 'Representante'
    },
    correo: {
        type: String,
        label: 'Correo electrónico',
        regEx: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    telefonoFijo: {
        type: String,
        label: 'Teléfono Fijo'
    },
    telefonoCelular: {
        type: String,
        label: 'Teléfono Celular'
    },
    personeriaJuridica: {
        type: String,
        label: 'Personería jurídica',
        autoform: {
            type: "select-radio-inline",
            defaultValue: 'No',
            options: function () {
                return [
                    {label: "Si", value: "Si"},
                    {label: "No", value: "No"}
                ];
            }
        }
    },
    adjudica: {
        type: Boolean,
        label: 'Adjudica'
    },
    tiempoVidaGrupo: {
        type: String,
        label: 'Tiempo de vida del grupo'
    },
    juridica: {
        type: Boolean,
        label: 'Jurídica'
    },
    deHecho: {
        type: Boolean,
        label: 'De hecho'
    },
    numeroMiembros: {
        type: Number,
        label: 'Número de miembros',
        min: 1
    },
    diaPreferidoReuniones: {
        type: String,
        label: 'Día y hora preferido para reuniones/talleres',
        autoform: {
            afFieldInput: {
                type: "bootstrap-datetimepicker"
            }
        }
    },
    conocimientosGenerales: {
        type: Number,
        label: 'Conocimientos de los principios generales de la agroecología',
        min: 1,
        max: 10
    },
    decisionPolitica: {
        type: Number,
        label: 'Decisión política',
        min: 1,
        max: 10
    },
    disenioFinca: {
        type: Number,
        label: 'Diseño de finca',
        min: 1,
        max: 10
    },
    capacidadesTecnicas: {
        type: Number,
        label: 'Capacidades técnicas',
        min: 1,
        max: 10
    },
    capacidadTecnicaGrupo: {
        type: Number,
        label: 'Capacidad técnica instalada en el grupo',
        min: 1,
        max: 10
    },
    capacidadOrganizacional: {
        type: Number,
        label: 'Capacidad Organizacional',
        min: 1,
        max: 10
    },
    mecanismoApoyoInterno: {
        type: Number,
        label: 'Mecanismo de apoyo interno',
        min: 1,
        max: 10
    },
    promotores: {
        type: Number,
        label: 'Promotores',
        min: 1,
        max: 10
    },
    manejoNormas: {
        type: Number,
        label: 'Manejo de normas',
        min: 1,
        max: 10
    },
    veedores: {
        type: Number,
        label: 'Veedores',
        min: 1,
        max: 10
    },
    comiteEtica: {
        type: Number,
        label: 'Comité de ética',
        min: 1,
        max: 10
    },
    createdBy: {
        type: String,
        autoValue: function () {
            return this.userId
        }
    }
}));

if (Meteor.isServer) {
    Grupos.allow({
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