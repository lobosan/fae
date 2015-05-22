AutoForm.hooks({
    'insertAcompanamientoForm': {
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
                if ((typeof doc.acomProvincia && typeof doc.canton && typeof doc.acomParroquia) != 'undefined') {
                    doc.acomProvincia = DPA.findOne({codigo: doc.acomProvincia}).descripcion;
                    doc.acomCanton = DPA.findOne({codigo: doc.acomCanton}).descripcion;
                    doc.acomParroquia = DPA.findOne({codigo: doc.acomParroquia}).descripcion;
                }
                return doc;
            }
        }
    }
});