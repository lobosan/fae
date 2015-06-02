if (Meteor.isClient) {
    Meteor.startup(function () {
        accountsUIBootstrap3.setLanguage('es');
        TAPi18n.setLanguage('es');

        Accounts.ui.config({
            passwordSignupFields: 'USERNAME_AND_EMAIL',
            requestPermissions: {},
            extraSignupFields: [{
                fieldName: 'cedula',
                fieldLabel: 'Cédula',
                inputType: 'text',
                visible: true,
                validate: function (value, errorFunction) {
                    if (/^[0-9]{1,10}$/.test(+value) && value.length == 10)
                        return true;
                    else {
                        errorFunction("Cédula tiene que tener 10 dígitos");
                        return false;
                    }
                }
            }, {
                fieldName: 'institucion',
                fieldLabel: 'Institución',
                inputType: 'text',
                visible: true,
                validate: function (value, errorFunction) {
                    if (!value) {
                        errorFunction("Institución es obligatorio");
                        return false;
                    } else {
                        return true;
                    }
                }
            }]
        });
    });
}

if (Meteor.isServer) {
    Accounts.onCreateUser(function(options, user) {
        user.roles = ['tecnico'];
        return user;
    });
}