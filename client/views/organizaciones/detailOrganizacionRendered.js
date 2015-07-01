Template.detailOrganizacion.onRendered(function () {
    Tracker.autorun(function () {
        var organizacionesData = Session.get('detailOrganizaciones');

        var categories = [];
        for (var i = 14; i < organizacionesData.length; i++) {
            categories.push(organizacionesData[i].titulo);
        }

        var series = [];
        var colors = ['#26A698', '#777777', '#5D8ED6'];
        for (var j = 0; j < organizacionesData[0].data.length; j++) {
            var temp = {};
            temp['name'] = 'Ficha ' + organizacionesData[0].data[j];
            temp['pointPlacement'] = 'on';
            temp['color'] = colors[j];
            var data = [];
            for (var k = 14; k < organizacionesData.length; k++) {
                data.push(organizacionesData[k].data[j]);
            }
            temp['data'] = data;
            series.push(temp);
        }

        this.$('#reporteOrganizacion').highcharts({
            chart: {
                polar: true,
                type: 'line',
                width: '800',
                height: '500'
            },
            pane: {
                size: '80%'
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
                pointFormat: '<span style="color:{series.color}">{series.name}: {point.y:,.0f}</span><br/>'
            },
            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 50,
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
