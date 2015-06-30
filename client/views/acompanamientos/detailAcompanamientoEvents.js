Template.detailAcompanamiento.events({
    'click .print': function () {
        var acompanamientos = Session.get('detalleAcompanamientos');

        var columns = [{title: '', key: 'titulo', width: 300}];
        for (var c = 0; c < acompanamientos[0].data.length; c++) {
            columns.push({
                title: 'FICHA ' + acompanamientos[0].data[c],
                key: 'acompanamiento' + c,
                width: 140
            });
        }

        var overflowColumns = _.pluck(columns, 'key');

        var grupos = [
            'INDICADORES PARA EL ENTORNO',
            'INDICADORES PARA EL SUBSISTEMA DEL SUELO',
            'INDICADORES PARA EL SUBSISTEMA DE AGUA Y HUMEDAD',
            'INDICADORES PARA EL SUBSISTEMA DE CULTIVOS',
            'INDICADORES PARA EL SUBSISTEMA FORESTAL',
            'INDICADORES PARA EL SUBSISTEMA ANIMAL',
            'INDICADORES PARA INSTALACIONES, ANGARES Y BODEGAS'
        ];

        var data = [];
        for (var i = 1; i < acompanamientos.length; i++) {
            var temp = {};
            temp['titulo'] = acompanamientos[i].titulo;
            for (var j = 0; j < acompanamientos[i].data.length; j++) {
                temp['acompanamiento' + j] = acompanamientos[i].data[j];
            }
            data.push(temp);
            if (i == 10) data.push({'titulo': grupos[0]});
            if (i == 19) data.push({'titulo': grupos[1]});
            if (i == 27) data.push({'titulo': grupos[2]});
            if (i == 31) data.push({'titulo': grupos[3]});
            if (i == 41) data.push({'titulo': grupos[4]});
            if (i == 48) data.push({'titulo': grupos[5]});
            if (i == 57) data.push({'titulo': grupos[6]});
        }

        var doc = new jsPDF('l', 'pt', 'a4');

        var options = {
            lineHeight: 16,
            renderHeader: function (doc, pageCount, options) {
                doc.setFontSize(12);
                doc.setTextColor(51, 51, 51);
                doc.text('Reporte de Fichas de Diagnóstico y Acompañamiento', 40, 45);
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
                if (_.contains([10, 20, 29, 34, 45, 53, 63], row)) {
                    if (value == grupos[0] || value == grupos[1] || value == grupos[2] || value == grupos[3] ||
                        value == grupos[4] || value == grupos[5] || value == grupos[6]) {
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
        doc.text('Reporte de Fichas de Diagnóstico y Acompañamiento', 40, 45);
        $('#reporteAcompanamiento').each(function (index) {
            var imageData = $(this).highcharts().createCanvas();
            doc.addImage(imageData, 'JPEG', 0, 65, 800, 500);  // imageData, type, x, y, width, height
        });

        doc.save('Acompañamiento.pdf');
    }
});