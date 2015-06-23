AutoForm.hooks({
    'insertConsumidorForm': {
        onSuccess: function (operation, result, template) {
            toastr.options = {"timeOut": "2000", "progressBar": true};
            toastr.success('La ficha ha sido guardada exitosamente');
        },
        onError: function (operation, error, template) {
            toastr.options = {"timeOut": "6000", "progressBar": true};
            toastr.error('ERROR: La ficha no pudo ser guardada, verifique sus datos');
        }
    }
});