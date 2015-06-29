Template.listOrganizaciones.events({
    'click .export': function () {
        var organizaciones = Organizaciones.find({}, {fields: {createdBy: 0}, sort: {createdAt: 1}}).fetch();
        var labels = _.without(_.values(Organizaciones.simpleSchema().label()), 'Fecha de creación', 'Created by');
        labels.unshift('Fecha de creación');

        Meteor.call('exportExcel', labels, organizaciones, 'Organizaciones', function(error, fileUrl) {
            var link = document.createElement('a');
            link.download = 'Fichas de Diagnóstico de Organización.xlsx';
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