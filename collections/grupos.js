Grupos = new Mongo.Collection('grupos');

Grupos.attachSchema(new SimpleSchema({
    provincia: {
        type: String,
        label: 'Provincia',
        autoform: {
            type: 'select',
            firstOption: 'Seleccione una provincia',
            options: function () {
                return DPA.find({grupo: 'Provincia'}).map(function (dpa) {
                    return {label: dpa.descripcion, value: dpa.codigo};
                });
            }
        }
    },
    canton: {
        type: String,
        label: 'Cantón',
        autoform: {
            type: 'select',
            firstOption: 'Seleccione un cantón',
            options: function () {
                if (Meteor.isClient) {
                    var codigoProvincia = AutoForm.getFieldValue('provincia');
                    var cantones = new RegExp('^' + codigoProvincia + '[\\d]{2}$');
                    return DPA.find({codigo: {$regex: cantones}}).map(function (dpa) {
                        return {label: dpa.descripcion, value: dpa.codigo};
                    });
                }
            }
        }
    },
    parroquia: {
        type: String,
        label: 'Parroquia',
        autoform: {
            type: 'select',
            firstOption: 'Seleccione una parroquia',
            options: function () {
                if (Meteor.isClient) {
                    var codigoCanton = AutoForm.getFieldValue('canton');
                    var parroquias = new RegExp('^' + codigoCanton + '[\\d]{2}$');
                    return DPA.find({codigo: {$regex: parroquias}}).map(function (dpa) {
                        return {label: dpa.descripcion, value: dpa.codigo};
                    });
                }
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
            type: 'select-radio-inline',
            defaultValue: 'En trámite',
            options: function () {
                return [
                    {label: 'Si', value: 'Si'},
                    {label: 'No', value: 'No'},
                    {label: 'En trámite', value: 'En trámite'}
                ];
            }
        }
    },
    tiempoVidaGrupo: {
        type: String,
        label: 'Tiempo de vida del grupo'
    },
    numeroMiembros: {
        type: Number,
        label: 'Número de miembros',
        min: 1
    },
    diaPreferidoReuniones: {
        type: String,
        label: 'Día preferido para reuniones/talleres',
        autoform: {
            type: 'select-radio-inline',
            defaultValue: 'Ninguno',
            options: function () {
                return [
                    {label: 'Lunes', value: 'Lunes'},
                    {label: 'Martes', value: 'Martes'},
                    {label: 'Miércoles', value: 'Miércoles'},
                    {label: 'Jueves', value: 'Jueves'},
                    {label: 'Viernes', value: 'Viernes'},
                    {label: 'Sábado', value: 'Sábado'},
                    {label: 'Domingo', value: 'Domingo'},
                    {label: 'Ninguno', value: 'Ninguno'}
                ];
            }
        }
    },
    conocimientosGenerales: {
        type: Number,
        min: 1,
        max: 10
    },
    decisionPolitica: {
        type: Number,
        min: 1,
        max: 10
    },
    disenioFinca: {
        type: Number,
        min: 1,
        max: 10
    },
    capacidadesTecnicas: {
        type: Number,
        min: 1,
        max: 10
    },
    capacidadTecnicaGrupo: {
        type: Number,
        min: 1,
        max: 10
    },
    capacidadOrganizacional: {
        type: Number,
        min: 1,
        max: 10
    },
    mecanismoApoyoInterno: {
        type: Number,
        min: 1,
        max: 10
    },
    promotores: {
        type: Number,
        min: 1,
        max: 10
    },
    manejoNormas: {
        type: Number,
        min: 1,
        max: 10
    },
    veedores: {
        type: Number,
        min: 1,
        max: 10
    },
    comiteEtica: {
        type: Number,
        min: 1,
        max: 10
    },
    createdBy: {
        type: String,
        autoValue: function () {
            return this.userId
        },
        optional: true,
        autoform: {
            type: 'hidden',
            label: false
        }
    }
}));

if (Meteor.isServer) {

    Meteor.publish('grupos', function (userId) {
        return Grupos.find({createdBy: userId});
    });

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