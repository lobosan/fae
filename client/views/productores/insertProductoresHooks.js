AutoForm.hooks({
    'insertProductorForm': {
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
                if ((typeof doc.prdProvincia && typeof doc.canton && typeof doc.prdParroquia) != 'undefined') {
                    doc.prdProvincia = DPA.findOne({codigo: doc.prdProvincia}).descripcion;
                    doc.prdCanton = DPA.findOne({codigo: doc.prdCanton}).descripcion;
                    doc.prdParroquia = DPA.findOne({codigo: doc.prdParroquia}).descripcion;
                }
                return doc;
            }
        }
    }
});