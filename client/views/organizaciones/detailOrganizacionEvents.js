Template.detailOrganizacion.events({
    'click .print': function () {
        var organizaciones = Session.get('detalleOrganizaciones');

        var columns = [{title: '', key: 'titulo', width: 250}];
        for (var c = 0; c < organizaciones[0].data.length; c++) {
            columns.push({
                title: 'Ficha ' + organizaciones[0].data[c],
                key: 'organizacion' + c,
                width: 150
            });
        }

        var overflowColumns = _.pluck(columns, 'key');

        var data = [];
        for (var i = 1; i < organizaciones.length; i++) {
            var temp = {};
            temp['titulo'] = organizaciones[i].titulo;
            for (var j = 0; j < organizaciones[i].data.length; j++) {
                temp['organizacion' + j] = organizaciones[i].data[j];
            }
            data.push(temp);
            if (i == 13) data.push({'titulo': 'GRUPO'});
        }

        var doc = new jsPDF('l', 'pt', 'a4');

        var options = {
            lineHeight: 16,
            renderHeader: function (doc, pageCount, options) {
                doc.setFontSize(12);
                doc.setTextColor(51, 51, 51);
                doc.text('Reporte de Fichas de Diagnóstico y Organización', options.margins.horizontal, 40);
            },
            renderHeaderCell: function (x, y, width, height, key, value, settings) {
                doc.setFontSize(10);
                doc.setLineWidth(0.1);
                doc.setDrawColor(240);
                doc.setFillColor(245,245,245);
                doc.setTextColor(21, 21, 21);
                doc.rect(x, y, width, height, 'B');
                y += settings.lineHeight / 2 + doc.internal.getLineHeight() / 2;
                doc.text(value, x + settings.padding, y);
            },
            renderCell: function (x, y, width, height, key, value, row, settings) {
                doc.setFontSize(9);
                doc.setLineWidth(0.1);
                doc.setDrawColor(240);
                if (row === 13) {
                    if (value == 'GRUPO') {
                        doc.setFontSize(10);
                        doc.setFillColor(245,245,245);
                        doc.setTextColor(21, 21, 21);
                        doc.rect(x, y, doc.internal.pageSize.width - settings.margins.horizontal * 2, height, 'F');
                        y += settings.lineHeight / 2 + doc.internal.getLineHeight() / 2 - 2.5;
                        doc.text('INDICADORES DE LA ORGANIZACIÓN', x + settings.padding, y);
                    }
                } else {
                    doc.setTextColor(51, 51, 51);
                    doc.rect(x, y, width, height, 'S');
                    y += settings.lineHeight / 2 + doc.internal.getLineHeight() / 2 - 2.5;
                    doc.text(value, x + settings.padding, y);
                }
            },
            margins: {horizontal: 40, top: 50, bottom: 30},
            overflow: 'linebreak',
            overflowColumns: overflowColumns
        };
        doc.autoTable(columns, data, options);

        doc.addPage();
        doc.setFontSize(12);
        doc.setTextColor(51, 51, 51);
        doc.text('Reporte de Fichas de Diagnóstico y Organización', 40, 40);
        $('#reporteOrganizacion').each(function (index) {
            var imageData = $(this).highcharts().createCanvas();
            doc.addImage(imageData, 'JPEG', 0, 65, 800, 500);  // imageData, type, x, y, width, height
        });

        doc.save('Organización.pdf');
    }
});