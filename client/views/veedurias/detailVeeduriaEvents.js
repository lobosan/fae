Template.detailVeeduria.events({
    'click .print': function () {
        var veedurias = Session.get('detailVeedurias');

        var columns = [{title: '', key: 'titulo', width: 250}];
        for (var c = 0; c < veedurias[0].data.length; c++) {
            columns.push({
                title: 'FICHA ' + veedurias[0].data[c],
                key: 'veeduria' + c,
                width: 160
            });
        }

        var overflowColumns = _.pluck(columns, 'key');

        var grupos = [
            'IDENTIFICACIÓN DEL PRODUCTOR',
            'UBICACIÓN',
            'EL ENTORNO',
            'EL SUBSISTEMA SUELO',
            'EL SUBSISTEMA AGUA Y HUMEDAD',
            'EL SUBSISTEMA CULTIVOS',
            'EL SUBSISTEMA AGROFORESTAL',
            'EL SUBSISTEMA ANIMAL',
            'COSECHA, POSTCOSECHA Y COMERCIALIZACIÓN',
            'JUSTICIA SOCIAL Y DOCUMENTOS'
        ];

        var data = [{'titulo': grupos[0]}];
        for (var i = 1; i < veedurias.length; i++) {
            var temp = {};
            temp['titulo'] = veedurias[i].label;
            for (var j = 0; j < veedurias[i].data.length; j++) {
                temp['veeduria' + j] = veedurias[i].data[j];
            }
            data.push(temp);
            if (i == 5) data.push({'titulo': grupos[1]});
            if (i == 27) data.push({'titulo': grupos[2]});
            if (i == 48) data.push({'titulo': grupos[3]});
            if (i == 62) data.push({'titulo': grupos[4]});
            if (i == 71) data.push({'titulo': grupos[5]});
            if (i == 83) data.push({'titulo': grupos[6]});
            if (i == 89) data.push({'titulo': grupos[7]});
            if (i == 96) data.push({'titulo': grupos[8]});
            if (i == 108) data.push({'titulo': grupos[9]});
        }

        var doc = new jsPDF('l', 'pt', 'a4');

        var options = {
            lineHeight: 16,
            renderHeader: function (doc, pageCount, options) {
                doc.setFontSize(12);
                doc.setTextColor(51, 51, 51);
                doc.text('Reporte de Fichas de Información de Veeduría', 40, 45);
            },
            renderHeaderCell: function (x, y, width, height, key, value, settings) {
                doc.setFontSize(10);
                doc.setLineWidth(0.1);
                doc.setDrawColor(240);
                doc.setFillColor(255, 255, 255);
                doc.setTextColor(21, 21, 21);
                doc.rect(x, y, width, height, 'B');
                y += settings.lineHeight / 2 + doc.internal.getLineHeight() / 2;
                doc.text(value, x + settings.padding, y);
            },
            renderCell: function (x, y, width, height, key, value, row, settings) {
                doc.setFontSize(9);
                doc.setLineWidth(0.1);
                doc.setDrawColor(240);
                if (_.contains([0, 6, 29, 51, 66, 76, 89, 96, 104, 117], row)) {
                    if (value == grupos[0] || value == grupos[1] || value == grupos[2] || value == grupos[3] || value == grupos[4] ||
                        value == grupos[5] || value == grupos[6] || value == grupos[7] || value == grupos[8] || value == grupos[9])
                    {
                        doc.setFontSize(10);
                        doc.setFillColor(245, 245, 245);
                        doc.setTextColor(21, 21, 21);
                        doc.rect(x, y, doc.internal.pageSize.width - settings.margins.horizontal * 2, height, 'F');
                        y += settings.lineHeight / 2 + doc.internal.getLineHeight() / 2 - 2.5;
                        doc.text(value, x + settings.padding, y);
                    }
                } else {
                    doc.setTextColor(51, 51, 51);
                    doc.rect(x, y, width, height, 'S');
                    y += settings.lineHeight / 2 + doc.internal.getLineHeight() / 2 - 2.5;
                    doc.text(value, x + settings.padding, y);
                }
            },
            margins: {horizontal: 40, top: 60, bottom: 30},
            overflow: 'linebreak',
            overflowColumns: overflowColumns
        };
        doc.autoTable(columns, data, options);

        doc.addPage();
        doc.setFontSize(12);
        doc.setTextColor(51, 51, 51);
        doc.text('Reporte de Fichas de Información de Veeduría', 40, 45);
        $('#reporteVeeduria').each(function (index) {
            var imageData = $(this).highcharts().createCanvas();
            doc.addImage(imageData, 'JPEG', 0, 65, 800, 500);  // imageData, type, x, y, width, height
        });

        doc.save('Veeduría.pdf');
    }
});