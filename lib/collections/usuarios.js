Schema = {};

Schema.UserProfile = new SimpleSchema({
    username: {
        type: String,
        label: 'Nombre de usuario',
        regEx: /^[a-z0-9A-Z_]{6,15}$/,
        min: 6,
        max: 15
    },
    email: {
        type: String,
        label: 'Correo electrónico',
        regEx: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    profile: {
        type: Object
    },
    'profile.cedula': {
        type: String,
        label: 'Cédula',
        regEx: /^[0-9]{10}$/,
        min: 10,
        max: 10
    },
    'profile.institucion': {
        type: String,
        label: 'Institución'
    },
    'profile.provincia': {
        type: String,
        label: 'Provincia',
        autoform: {
            type: 'select',
            firstOption: '',
            options: function () {
                return DPA.find({grupo: 'Provincia'}).map(function (dpa) {
                    return {label: dpa.descripcion, value: dpa.descripcion};
                });
            }
        },
        optional: true
    }
});