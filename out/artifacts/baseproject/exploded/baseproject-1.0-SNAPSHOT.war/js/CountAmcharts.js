var itemChart;
var totalChart;
var itemCountchart="itemCountchart";
var totalCountChart="totalCountChart";
var itemValue="itemCount";
var totalValue="totalCount";
var itemUrl="http://localhost:8083/gsms/dataListController/getItemList";
var totalUrl="http://localhost:8083/gsms/dataListController/getAll";
var totalTitle = "数据量（万）"
var itemTitle = "资源项（类）";
AmCharts.ready(function () {
    var itemc = showChart(itemChart,itemCountchart,itemValue,itemTitle);
    itemc.write("itemCountchart");
    var totalc = showChart(totalChart,totalCountChart,totalValue,totalTitle);
    totalc.write("totalCountchart");
    loadStringData(itemUrl,itemc);
    loadStringData(totalUrl,totalc);
});

function showChart(nowChart,chartDiv,valueField,nowTitle) {
    // SERIAL CHART

    nowChart = new AmCharts.AmSerialChart();
    nowChart.dataProvider = [];
    nowChart.categoryField = "deptName";
    nowChart.startDuration = 1;

    // AXES
    // x轴
    var categoryAxis = nowChart.categoryAxis;
    categoryAxis.labelRotation = 90;
    categoryAxis.gridPosition = "start";
    categoryAxis.gridAlpha=0;//网格的透明度
    categoryAxis.axisColor = "#B3E7F9";


    //y轴
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.axisColor="#B3E7F9"
    valueAxis.axisThickness=0;//轴的宽度
    valueAxis.title =nowTitle;
    nowChart.addValueAxis(valueAxis);

    // value
    // in case you don't want to change default settings of value axis,
    // you don't need to create it, as one value axis is created automatically.

    // GRAPH
    var graph = new AmCharts.AmGraph();
    graph.valueField = valueField;
    graph.colorField = "color";
    graph.balloonText = "[[deptName]]:[[value]]";
    graph.type = "column";
    graph.lineAlpha = 0;
    graph.fillAlphas = 0.8;
    // graph.lineColor="40E527"
    nowChart.addGraph(graph);

    // CURSOR
    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.cursorAlpha = 0;
    chartCursor.zoomable = false;
    chartCursor.categoryBalloonEnabled = false;
    nowChart.addChartCursor(chartCursor);

    nowChart.creditsPosition = "top-right";
    nowChart.color="#F8FAFF";//坐标名称颜色


    return nowChart;
}
function loadStringData(url,nowChart) {//发送ajax数据动态获取数据
    $.ajax({
        type: "POST",
        url: url,
        dataType:"json",
        cache: false,
        success: function (msg) {
            nowChart.dataProvider = msg;
            nowChart.validateNow();
            nowChart.validateData();  //刷新柱状图
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
}
setTimeout("loadStringData(itemUrl,showChart(itemChart,itemCountchart,itemValue,itemTitle))", 100);
setTimeout("loadStringData(totalUrl,showChart(totalChart,totalCountChart,totalValue,totalTitle))", 100);

