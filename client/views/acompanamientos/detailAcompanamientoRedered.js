Template.detailAcompanamiento.onRendered(function () {
    Tracker.autorun(function () {
        var acompanamientosData = Session.get('detalleAcompanamientos');

        var categories = [
            'Indicadores para el entorno',
            'Indicadores para el subsistema del suelo',
            'Indicadores para el subsistema de agua y humedad',
            'Indicadores para el subsistema de cultivos',
            'Indicadores para el subsistema forestal',
            'Indicadores para el subsistema animal',
            'Indicadores para instalaciones, angares y bodegas'
        ];

        var series = [];
        var colors = ['#26A698', '#777777', '#5D8ED6'];
        for (var j = 0; j < acompanamientosData[0].data.length; j++) {
            var temp = {};
            temp['name'] = 'Ficha ' + acompanamientosData[0].data[j];
            temp['pointPlacement'] = 'on';
            temp['color'] = colors[j];
            var grupo = function (inicio, fin) {
                var grupo = [];
                for (var k = inicio; k <= fin; k++)
                    grupo.push(acompanamientosData[k].data[j]);
                return _.reduce(grupo, function(memo, num) {
                    return (memo + num);
                }, 0) / grupo.length;
            };

            var data = [];
            data.push(grupo(11, 19), grupo(18, 25), grupo(26, 29), grupo(30, 39), grupo(40, 46), grupo(47, 54), grupo(55, 60));
            temp['data'] = data;
            series.push(temp);
        }

        this.$('#reporteAcompanamiento').highcharts({
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
                tickInterval: 2
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
