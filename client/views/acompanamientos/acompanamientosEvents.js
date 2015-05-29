Template.listAcompanamientos.events({
    'click .export': function () {
        var acompanamientos = Acompanamientos.find({}).fetch();
        Meteor.call('acompanamientosExcel', acompanamientos, function(err, fileUrl) {
            var link = document.createElement("a");
            link.download = 'Fichas de Diagnóstico y Acompañamiento.xlsx';
            link.href = fileUrl;
            link.click();
        });
    }
});