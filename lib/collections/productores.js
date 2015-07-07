Productores = new Mongo.Collection('productores');

Productores.attachSchema(new SimpleSchema({
    prdResponsableProduccion: {
        type: String,
        label: 'Responsable de la producción'
    },
    prdNombreFinca: {
        type: String,
        label: 'Nombre de la finca'
    },
    prdCorreoElectronico: {
        type: String,
        label: 'Correo electrónico',
        regEx: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    prdTelefonoFijo: {
        type: String,
        label: 'Teléfono fijo',
        regEx: /^0[2-7]{1}-?\d{3}-?\d{4}$/,
        autoform: {
            placeholder: '02-000-0000'
        }
    },
    prdSectorComunidad: {
        type: String,
        label: 'Sector o comunidad'
    },
    prdProvincia: {
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
    prdCanton: {
        type: String,
        label: 'Cantón',
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                var codigoProvincia = AutoForm.getFieldValue('prdProvincia');
                var cantones = new RegExp('^' + codigoProvincia + '[\\d]{2}$');
                return DPA.find({codigo: {$regex: cantones}}).map(function (dpa) {
                    return {label: dpa.descripcion, value: dpa.codigo};
                });
            }
        }
    },
    prdParroquia: {
        type: String,
        label: 'Parroquia',
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                $("[name='prdProvincia']").change(function() {
                    $("[name='prdParroquia'] option[value!='']").remove();
                });
                var codigoCanton = AutoForm.getFieldValue('prdCanton');
                var parroquias = new RegExp('^' + codigoCanton + '[\\d]{2}$');
                return DPA.find({codigo: {$regex: parroquias}}).map(function (dpa) {
                    return {label: dpa.descripcion, value: dpa.codigo};
                });
            }
        }
    },
    prdCoordenadas: {
        type: String,
        label: 'Coordenadas geográficas',
        regEx: /^[NS]([0-8][0-9](\.[0-5]\d){2}|90(\.00){2})\040[EW]((0\d\d|1[0-7]\d)(\.[0-5]\d){2}|180(\.00){2})$/,
        autoform: {
            placeholder: 'N00.00.00 W000.00.00'
        }
    },
    prdCostoJornalZona: {
        type: Number,
        decimal: true,
        label: 'Costo de un jornal en la zona (USD)',
        min: 0
    },
    prdDuracionJornalZona: {
        type: Number,
        decimal: true,
        label: 'Duración del jornal en la zona (horas)',
        min: 0,
        max: 14
    },
    /*** Registro de Actividades ***/
    registroDeActividades: {
        type: Array,
        optional: true
    },
    "registroDeActividades.$": {
        type: Object
    },
    "registroDeActividades.$.fechaInicio": {
        type: String,
        label: 'Fecha de inicio de actividad',
        regEx: /^(19|20)\d\d([-])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/,
        autoform: {
            placeholder: 'aaaa-mm-dd'
        }
    },
    "registroDeActividades.$.actividad": {
        type: String,
        label: 'Actividad'
    },
    "registroDeActividades.$.horasFamiliar": {
        type: Number,
        decimal: true,
        label: 'Total horas de mano de obra familiar',
        min: 0
    },
    "registroDeActividades.$.jornalesFamiliares": {
        type: Number,
        decimal: true,
        label: 'Jornales familiares',
        autoValue: function() {
            var jornalesFamiliares = (this.siblingField('horasFamiliar').value / this.field('prdDuracionJornalZona').value).toFixed(2);
            return parseFloat(jornalesFamiliares);
        },
        autoform: {
            type: 'hidden',
            label: false
        }
    },
    "registroDeActividades.$.costoFamiliar": {
        type: Number,
        decimal: true,
        label: 'Costo de mano de obra familiar',
        autoValue: function() {
            var costoFamiliar = (this.siblingField('jornalesFamiliares').value * this.field('prdCostoJornalZona').value).toFixed(2);
            return parseFloat(costoFamiliar);
        },
        autoform: {
            type: 'hidden',
            label: false
        }
    },
    "registroDeActividades.$.horasContratada": {
        type: Number,
        decimal: true,
        label: 'Total horas de mano de obra contratada',
        min: 0
    },
    "registroDeActividades.$.jornalesContratados": {
        type: Number,
        decimal: true,
        label: 'Jornales contratados',
        autoValue: function() {
            var jornalesContratados = (this.siblingField('horasContratada').value / this.field('prdDuracionJornalZona').value).toFixed(2);
            return parseFloat(jornalesContratados);
        },
        autoform: {
            type: 'hidden',
            label: false
        }
    },
    "registroDeActividades.$.costoContratada": {
        type: Number,
        decimal: true,
        label: 'Costo de mano de obra contratada',
        autoValue: function() {
            var costoContratada = (this.siblingField('jornalesContratados').value * this.field('prdCostoJornalZona').value).toFixed(2);
            return parseFloat(costoContratada);
        },
        autoform: {
            type: 'hidden',
            label: false
        }
    },
    "registroDeActividades.$.costoTotal": {
        type: Number,
        decimal: true,
        label: 'Costo total',
        autoValue: function() {
            var costoTotal = (parseFloat(this.siblingField('costoFamiliar').value) + parseFloat(this.siblingField('costoContratada').value)).toFixed(2);
            return parseFloat(costoTotal);
        },
        autoform: {
            type: 'hidden',
            label: false
        }
    },
    /*** Registro de compras ***/
    registroDeCompras: {
        type: Array,
        optional: true
    },
    "registroDeCompras.$": {
        type: Object
    },
    "registroDeCompras.$.fecha": {
        type: String,
        label: 'Fecha',
        regEx: /^(19|20)\d\d([-])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/,
        autoform: {
            placeholder: 'aaaa-mm-dd'
        }
    },
    "registroDeCompras.$.producto": {
        type: String,
        label: 'Producto'
    },
    "registroDeCompras.$.cantidad": {
        type: Number,
        decimal: true,
        label: 'Cantidad',
        min: 0
    },
    "registroDeCompras.$.costoUnitario": {
        type: Number,
        decimal: true,
        label: 'Costo Unitario',
        min: 0
    },
    "registroDeCompras.$.costo": {
        type: Number,
        decimal: true,
        label: 'Costo',
        autoValue: function() {
            var costo = (this.siblingField('cantidad').value * this.siblingField('costoUnitario').value).toFixed(2);
            return parseFloat(costo);
        },
        autoform: {
            type: 'hidden',
            label: false
        }
    },
    /*** Registro de cosechas y Ventas ***/
    registroDeCosechasY_Ventas: {
        type: Array,
        optional: true
    },
    "registroDeCosechasY_Ventas.$": {
        type: Object
    },
    "registroDeCosechasY_Ventas.$.fecha": {
        type: String,
        label: 'Fecha',
        regEx: /^(19|20)\d\d([-])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/,
        autoform: {
            placeholder: 'aaaa-mm-dd'
        }
    },
    "registroDeCosechasY_Ventas.$.producto": {
        type: String,
        label: 'Producto'
    },
    "registroDeCosechasY_Ventas.$.unidad": {
        type: String,
        label: 'Unidad'
    },
    "registroDeCosechasY_Ventas.$.cantidadTotal": {
        type: Number,
        decimal: true,
        label: 'Cantidad total',
        min: 0
    },
    "registroDeCosechasY_Ventas.$.cantidadVendida": {
        type: Number,
        decimal: true,
        label: 'Cantidad vendida',
        min: 0
    },
    "registroDeCosechasY_Ventas.$.autoconsumo": {
        type: Number,
        decimal: true,
        label: 'Autoconsumo',
        min: 0
    },
    "registroDeCosechasY_Ventas.$.intercambio": {
        type: Number,
        decimal: true,
        label: 'Intercambio',
        min: 0
    },
    "registroDeCosechasY_Ventas.$.otrosUsos": {
        type: Number,
        decimal: true,
        label: 'Otros usos',
        min: 0
    },
    createdAt: {
        type: String,
        label: 'Fecha de creación',
        autoValue: function() {
            var currentDate = new Date();
            var date = currentDate.getFullYear() + '-' + ('0' + (currentDate.getMonth()+1)).slice(-2) + '-' + ('0' + currentDate.getDate()).slice(-2);
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