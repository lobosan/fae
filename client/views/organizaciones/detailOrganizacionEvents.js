Template.detailOrganizacion.events({
    'click .print': function () {
        var organizaciones = Session.get('detalleOrganizaciones');

        var columns = [{title: 'Indicador', key: 'titulo'}];
        for (var c = 1; c <= organizaciones[0].data.length; c++) {
            columns.push({
                'title': 'Organización ' + c,
                'key' : 'organizacion' + (c-1)
            });
        }

        var data = [];
        for (var i = 0; i < organizaciones.length; i++) {
            var array = [];
            data[i] = {};
            array.push(
                data[i]['titulo'] = organizaciones[i].titulo
            );
            for (var j = 0; j < organizaciones[i].data.length; j++) {
                array.push(
                    data[i]['organizacion' + j] = organizaciones[i].data[j]
                );
            }
            data.push(array);
        }

        var doc = new jsPDF('l', 'pt', 'a4');

        doc.text(40, 45, 'Reporte de Organización');

        var options = {
            renderHeaderCell: function (x, y, width, height, key, value, settings) {
                doc.setFillColor(255, 255, 255);
                doc.setTextColor(51, 51, 51);
                doc.rect(x, y, width, height, 'F');
                y += settings.lineHeight / 2 + doc.internal.getLineHeight() / 2;
                doc.text('' + value, x + settings.padding, y);
            }
        };

        doc.autoTable(columns, data, options);

        $('#reporteOrganizacion').each(function (index) {
            var imageData = $(this).highcharts().createCanvas();
            // imageData, type, x, y, width, height
            doc.addImage(imageData, 'JPEG', 45, 120, 400, 250);
        });

        doc.save('Organización.pdf');
    }
});