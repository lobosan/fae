(function (H) {
    H.Chart.prototype.createCanvas = function (divId) {
        var svg = this.getSVG(),
            width = parseInt(svg.match(/width="([0-9]+)"/)[1]),
            height = parseInt(svg.match(/height="([0-9]+)"/)[1]),
            canvas = document.createElement('canvas');

        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);

        if (canvas.getContext && canvas.getContext('2d')) {
            canvg(canvas, svg);
            return canvas.toDataURL("image/jpeg");
        }
        else {
            alert("Your browser doesn't support this feature, please use a modern browser");
            return false;
        }
    }
}(Highcharts));

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
    'click .compare': function () {
        var organizacionIds = [];
        $('.reactive-table input:checkbox:checked').each(function() {
            organizacionIds.push(this.value);
        });
        Session.setPersistent('organizacionIds', organizacionIds);

        Router.go('detailOrganizacion');
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

Template.detailOrganizacion.events({
   'click .print': function () {
       var organizaciones = Organizaciones.find({_id: {$in: Session.get('organizacionIds')}}, {fields: {'createdBy': 0}}).fetch();

       var columns = [
           {title: 'Indicador', key: 'indicador'},
           {title: 'Valor', key: 'value'}
       ];

       var data = [];
       _.each(organizaciones, function (organizacion) {
           data.push(
               {indicador: 'Provincia', value: organizacion.provincia},
               {indicador: 'Cantón', value: organizacion.canton},
               {indicador: 'Parroquia', value: organizacion.parroquia},
               {indicador: 'Sector/es', value: organizacion.sectores}
           );
       });

       var doc = new jsPDF('p', 'pt');

       doc.text(20, 30, 'Reporte de Organización');

       doc.autoTable(columns, data, {});

       doc.addPage();

       $('#reporteOrganizacion').each(function (index) {
           var imageData = $(this).highcharts().createCanvas();
           // imageData, type, x, y, width, height
           doc.addImage(imageData, 'JPEG', 45, 40, 400, 250);
       });

       doc.save('Organización.pdf');
   }
});