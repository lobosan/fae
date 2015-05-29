Template.listGrupos.events({
    'click .export': function () {
        var grupos = Grupos.find({}).fetch();
        Meteor.call('gruposExcel', grupos, function(err, fileUrl) {
            var link = document.createElement("a");
            link.download = 'Fichas de Diagnóstico de Grupo.xlsx';
            link.href = fileUrl;
            link.click();
        });
    }
});