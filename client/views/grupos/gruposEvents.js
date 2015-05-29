Template.listGrupos.events({
    'click .export': function () {
        Meteor.call('gruposExcel', function(err, fileUrl) {
            var link = document.createElement("a");
            link.download = 'Fichas de Diagnóstico de Grupo.xlsx';
            link.href = fileUrl;
            link.click();
        });
    }
});