DPA = new Mongo.Collection('dpa');

DPA.attachSchema(new SimpleSchema({
    codigo: {
        type: String,
        index: true,
        unique: true
    },
    grupo: {
        type: String
    },
    descripcion: {
        type: String
    }
}));