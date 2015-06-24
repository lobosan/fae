Template.listOrganizaciones.events({
    'click .export': function () {
        var organizaciones = Organizaciones.find({}).fetch();
        Meteor.call('organizacionesExcel', organizaciones, function(error, fileUrl) {
            var link = document.createElement('a');
            link.download = 'Fichas de Diagnóstico de Organizacion.xlsx';
            link.href = fileUrl;
            link.click();
        });
    },
    'click .compare': function () {
        var organizacionIds = [];
        $('.reactive-table input:checkbox:checked').each(function() {
            organizacionIds.push(this.value);
        });
        if (organizacionIds.length < 2 || organizacionIds.length > 3) {
            toastr.options = {"timeOut": "6000", "progressBar": true};
            toastr.error('ERROR: Para comparar necesita seleccionar de 2 a 3 fichas');
        } else {
            Session.setPersistent('organizacionIds', organizacionIds);
            Router.go('detailOrganizacion');
        }
    },
    'click .reactive-table tbody tr': function (event) {
        if (event.target.type == 'checkbox' || event.target.nodeName == "LABEL") {
        } else if (event.target.className !== 'comparar') {
            var organizacionIds = [this._id];
            Session.setPersistent('organizacionIds', organizacionIds);
            Router.go('detailOrganizacion');
        }
    }
});