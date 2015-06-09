AutoForm.hooks({
    'insertOrganizacionForm': {
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
                if ((typeof doc.provincia && typeof doc.canton && typeof doc.parroquia) != 'undefined') {
                    doc.provincia = DPA.findOne({codigo: doc.provincia}).descripcion;
                    doc.canton = DPA.findOne({codigo: doc.canton}).descripcion;
                    doc.parroquia = DPA.findOne({codigo: doc.parroquia}).descripcion;
                }
                return doc;
            }
        }
    }
});