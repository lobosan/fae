Template.listAcompanamientos.events({
    'click .export': function () {
        Meteor.call('acompanamientosExcel', function(err, fileUrl) {
            var link = document.createElement("a");
            link.download = 'Fichas de Diagnóstico y Acompañamiento.xlsx';
            link.href = fileUrl;
            link.click();
        });
    }
});