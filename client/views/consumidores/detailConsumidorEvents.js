Template.detailConsumidor.events({
    'click .print': function () {
        var consumidor = Session.get('detalleConsumidor');

        var columns = [
            {title: '', key: 'label'},
            {title: 'Ficha ' + consumidor[0].value, key: 'value'}
        ];

        var data = [];
        delete consumidor[0];
        _.each(consumidor, function (item) {
            data.push({
                label: item.label,
                value: item.value
            })
        });

        var doc = new jsPDF('l', 'pt', 'a4');

        var options = {
            lineHeight: 16,
            renderHeader: function (doc, pageCount, options) {
                doc.setFontSize(12);
                doc.setTextColor(51, 51, 51);
                doc.text('Ficha del Consumidor', options.margins.horizontal, 45);
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
                doc.setTextColor(51, 51, 51);
                doc.rect(x, y, width, height, 'S');
                y += settings.lineHeight / 2 + doc.internal.getLineHeight() / 2 - 2.5;
                doc.text(value, x + settings.padding, y);
            },
            margins: {horizontal: 40, top: 60, bottom: 40},
            overflow: 'linebreak'
        };
        doc.autoTable(columns, data, options);

        doc.save('Consumidor.pdf');
    }
});