Template.listVeedurias.events({
    'click .export': function () {
        var veedurias = Veedurias.find({}).fetch();
        Meteor.call('veeduriasExcel', veedurias, function(err, fileUrl) {
            var link = document.createElement("a");
            link.download = 'Fichas de Diagnóstico y Acompañamiento.xlsx';
            link.href = fileUrl;
            link.click();
        });
    },
    'click .compare': function () {
        var veeduriaIds = [];
        $('.reactive-table input:checkbox:checked').each(function() {
            veeduriaIds.push(this.value);
        });
        if (veeduriaIds.length < 2 || veeduriaIds.length > 3) {
            toastr.options = {"timeOut": "6000", "progressBar": true};
            toastr.error('ERROR: Para comparar necesita seleccionar de 2 a 3 fichas');
        } else {
            Session.setPersistent('veeduriaIds', veeduriaIds);
            Router.go('detailVeeduria');
        }
    },
    'click .reactive-table tbody tr': function (event) {
        if (event.target.type == 'checkbox' || event.target.nodeName == "LABEL") {
        } else if (event.target.className !== 'comparar') {
            var veeduriaIds = [this._id];
            Session.setPersistent('veeduriaIds', veeduriaIds);
            Router.go('detailVeeduria');
        }
    }
});