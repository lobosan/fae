Template.listGrupos.events({
    'click .export': function () {
        Meteor.call('gruposExcel', function(err, fileUrl) {
            var link = document.createElement("a");
            link.download = 'Listado de fichas de diagnóstico de grupo.xlsx';
            link.href = fileUrl;
            link.click();
        });
    }
});