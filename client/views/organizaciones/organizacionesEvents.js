Template.listOrganizaciones.events({
    'click .export': function () {
        var organizaciones = Organizaciones.find({}).fetch();
        Meteor.call('organizacionesExcel', organizaciones, function(err, fileUrl) {
            var link = document.createElement('a');
            link.download = 'Fichas de Diagnóstico de Organizacion.xlsx';
            link.href = fileUrl;
            link.click();
        });
    },
    'click .reactive-table tbody tr': function (event) {
        if (event.target.type == 'checkbox') {
        } else if (event.target.className !== 'comparar') {
            var organizacionId = this._id;
            Session.setPersistent('organizacionId', organizacionId);
            Router.go('detailOrganizacion');
        }
    }
});