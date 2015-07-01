Template.detailVeeduria.onRendered(function () {
    Tracker.autorun(function () {
        var veeduriasData = Session.get('detailVeedurias');
        console.table(veeduriasData);

        var categories = [
            'El Subsistema Suelo',
            'El Subsistema Agua y Humedad',
            'El Subsistema Cultivos',
            'El Subsistema Agroforestal',
            'El Subsistema Animal',
            'Cosecha, Postcosecha y Comercialización',
            'Justicia Social y Documentos'
        ];

        var series = [];
        var colors = ['#26A698', '#777777', '#5D8ED6'];
        for (var j = 0; j < veeduriasData[0].data.length; j++) {
            var temp = {};
            temp['name'] = 'Ficha ' + veeduriasData[0].data[j];
            temp['pointPlacement'] = 'on';
            temp['color'] = colors[j];
            var grupo = function (inicio, fin, numIndicadores) {
                var grupo = [];
                for (var k = inicio; k <= fin; k++) {
                    var indicador = veeduriasData[k].data[j];
                    if (indicador == 'Cumple') grupo.push(100/numIndicadores);
                    else if (indicador == 'Cumple parcialmente') grupo.push(50/numIndicadores);
                    else if (indicador == 'No cumple') grupo.push(0);
                    else console.log(veeduriasData[k].fieldName);
                }
                console.log(grupo);
                return _.reduce(grupo, function(memo, num) {
                    return (memo + num);
                }, 0);
            };

            var data = [];
            data.push(grupo(49, 61, 13), grupo(63, 70, 8), grupo(72, 82, 11),
                grupo(84, 88, 5), grupo(90, 95, 6), grupo(97, 107, 11), grupo(109, 111, 3));
            temp['data'] = data;
            series.push(temp);
        }
        console.log(series);

        this.$('#reporteVeeduria').highcharts({
            chart: {
                polar: true,
                type: 'line',
                width: '800',
                height: '500'
            },
            title: {
                text: null
            },
            xAxis: {
                categories: categories,
                tickmarkPlacement: 'on',
                lineWidth: 0
            },
            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0,
                tickInterval: 20
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: {point.y:,.2f}</span><br/>'
            },
            legend: {
                align: 'right',
                verticalAlign: 'top',
                layout: 'vertical',
                itemStyle: {
                    'font-family': '"Roboto", sans-serif',
                    'color': '#676a6c',
                    'padding': '5px'
                }
            },
            series: series,
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            }
        });
    });
});
