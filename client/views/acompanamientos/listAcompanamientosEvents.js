Template.listAcompanamientos.events({
    'click .export': function () {
        var acompanamientos = Acompanamientos.find({}).fetch();
        Meteor.call('acompanamientosExcel', acompanamientos, function(err, fileUrl) {
            var link = document.createElement("a");
            link.download = 'Fichas de Diagnóstico y Acompañamiento.xlsx';
            link.href = fileUrl;
            link.click();
        });
    },
    'click .compare': function () {
        var acompanamientoIds = [];
        $('.reactive-table input:checkbox:checked').each(function() {
            acompanamientoIds.push(this.value);
        });
        if (acompanamientoIds.length < 2 || acompanamientoIds.length > 3) {
            toastr.options = {"timeOut": "6000", "progressBar": true};
            toastr.error('ERROR: Para comparar necesita seleccionar de 2 a 3 fichas');
        } else {
            Session.setPersistent('acompanamientoIds', acompanamientoIds);
            Router.go('detailAcompanamiento');
        }
    },
    'click .reactive-table tbody tr': function (event) {
        if (event.target.type == 'checkbox' || event.target.nodeName == "LABEL") {
        } else if (event.target.className !== 'comparar') {
            var acompanamientoIds = [this._id];
            Session.setPersistent('acompanamientoIds', acompanamientoIds);
            Router.go('detailAcompanamiento');
        }
    }
});