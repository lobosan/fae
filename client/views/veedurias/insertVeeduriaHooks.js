AutoForm.hooks({
    'insertVeeduriaForm': {
        onSuccess: function (operation, result, template) {
            toastr.options = {"timeOut": "2000", "progressBar": true};
            toastr.success('La ficha ha sido guardada exitosamente');
        },
        onError: function (operation, error, template) {
            toastr.options = {"timeOut": "6000", "progressBar": true};
            toastr.error('ERROR: La ficha no pudo ser guardada, verifique sus datos');
        },
        before: {
            insert: function (doc) {
                if ((typeof doc.ubicProvincia && typeof doc.ubicCanton && typeof doc.ubicParroquia) != 'undefined') {
                    doc.ubicProvincia = DPA.findOne({codigo: doc.ubicProvincia}).descripcion;
                    doc.ubicCanton = DPA.findOne({codigo: doc.ubicCanton}).descripcion;
                    doc.ubicParroquia = DPA.findOne({codigo: doc.ubicParroquia}).descripcion;
                }
                return doc;
            }
        }
    }
});