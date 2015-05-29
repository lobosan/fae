Template.listAcompanamientos.events({
    'click .export': function () {
        Meteor.call('acompanamientosExcel', function(err, fileUrl) {
            var link = document.createElement("a");
            link.download = 'Listado de fichas de diagnóstico y acompañamiento.xlsx';
            link.href = fileUrl;
            link.click();
        });
    }
});