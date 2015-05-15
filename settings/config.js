if (Meteor.isClient) {
    accountsUIBootstrap3.setLanguage('es');

    Template.FreeLayout.helpers({
        appName: function () {
            return 'Fichas Agroecológicas';
        }
    });

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
            validate: function(value, errorFunction) {
                if (!value) {
                    errorFunction("Institución es obligatorio");
                    return false;
                } else {
                    return true;
                }
            }
        }]
    });
}