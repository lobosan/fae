AutoForm.hooks({
    'insertUsuarioForm': {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            Meteor.call('createNewUser', insertDoc);
            this.done();
            return false;
        },
        onSuccess: function (operation, result, template) {
            toastr.options = {"timeOut": "2000", "progressBar": true};
            toastr.success('El usuario ha sido creado exitosamente');
        },
        onError: function (operation, error, template) {
            toastr.options = {"timeOut": "6000", "progressBar": true};
            toastr.error('ERROR: El usuario no pudo ser creado, verifique sus datos');
        }
    }
});