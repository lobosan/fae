Consumidores = new Mongo.Collection('consumidores');

Consumidores.attachSchema(new SimpleSchema({
    consNombre: {
        type: String,
        label: 'Nombre'
    },
    consContacto: {
        type: String,
        label: 'Contacto'
    },
    consCalidadProductoAdquirido: {
        type: String,
        label: 'Calidad del producto adquirido',
        autoform: {
            type: 'select-radio-inline',
            options: function () {
                return [
                    {label: 'Excelente', value: 'Excelente'},
                    {label: 'Aceptable', value: 'Aceptable'},
                    {label: 'Por mejorar', value: 'Por mejorar'}
                ];
            }
        },
        optional: true,
        defaultValue: ''
    },
    consCalidadAtencionVendedor: {
        type: String,
        label: 'Calidad de la atención del vendedor',
        autoform: {
            type: 'select-radio-inline',
            options: function () {
                return [
                    {label: 'Excelente', value: 'Excelente'},
                    {label: 'Aceptable', value: 'Aceptable'},
                    {label: 'Por mejorar', value: 'Por mejorar'}
                ];
            }
        },
        optional: true,
        defaultValue: ''
    },
    consCalidadAreaExpendio: {
        type: String,
        label: 'Calidad del área de expendio',
        autoform: {
            type: 'select-radio-inline',
            options: function () {
                return [
                    {label: 'Excelente', value: 'Excelente'},
                    {label: 'Aceptable', value: 'Aceptable'},
                    {label: 'Por mejorar', value: 'Por mejorar'}
                ];
            }
        },
        optional: true,
        defaultValue: ''
    },
    consPresentacionProducto: {
        type: String,
        label: 'Presentación del producto',
        autoform: {
            type: 'select-radio-inline',
            options: function () {
                return [
                    {label: 'Excelente', value: 'Excelente'},
                    {label: 'Aceptable', value: 'Aceptable'},
                    {label: 'Por mejorar', value: 'Por mejorar'}
                ];
            }
        },
        optional: true,
        defaultValue: ''
    },
    consNombreProductorVisitado: {
        type: String,
        label: 'Nombre del productor visitado',
        optional: true,
        defaultValue: ''
    },
    consNombreFeriaVisitada: {
        type: String,
        label: 'Nombre de la feria visitada',
        optional: true,
        defaultValue: ''
    },
    consComentariosSugerencias: {
        type: String,
        label: 'Comentarios y sugerencias sobre la feria',
        max: 2000,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 7
            }
        },
        optional: true,
        defaultValue: ''
    },
    consImpresionesVisitaFinca: {
        type: String,
        label: 'Impresiones de la visita a la finca',
        max: 2000,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 7
            }
        },
        optional: true,
        defaultValue: ''
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