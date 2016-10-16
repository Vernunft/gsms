var chartData2 = [];
var chart2;


AmCharts.ready(function () {
    // SERIAL CHART

    chart2 = new AmCharts.AmSerialChart();
    //chart2.dataProvider = chartData2;
    chart2.categoryField = "deptName";
    chart2.startDuration = 1;

    // AXES
    // category
    var categoryAxis = chart2.categoryAxis;
    categoryAxis.labelRotation = 90;
    categoryAxis.gridPosition = "start";
    categoryAxis.gridAlpha=0;//网格的透明度
    categoryAxis.axisColor = "#B3E7F9";


    //y轴
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.axisColor="#B3E7F9"
    valueAxis.axisThickness=0;//轴的宽度
    valueAxis.title ="资源项（类）";
    chart2.addValueAxis(valueAxis);

    // value
    // in case you don't want to change default settings of value axis,
    // you don't need to create it, as one value axis is created automatically.

    // GRAPH
    var graph = new AmCharts.AmGraph();
    graph.valueField = "itemCount";
    graph.colorField = "color";
    graph.balloonText = "[[deptName]]:[[value]]";
    graph.type = "column";
    graph.lineAlpha = 0;
    graph.fillAlphas = 0.8;
   // graph.lineColor="40E527"
    chart2.addGraph(graph);

    // CURSOR
    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.cursorAlpha = 0;
    chartCursor.zoomable = false;
    chartCursor.categoryBalloonEnabled = false;
    chart2.addChartCursor(chartCursor);

    chart2.creditsPosition = "top-right";
    chart2.color="#F8FAFF";//坐标名称颜色
    chart2.write("itemCountchart");
});
function loadStringData() {//发送ajax数据动态获取数据
    $.ajax({
        type: "POST",
        url: "/dataListController/getItemList",
        dataType:"json",
        cache: false,
        success: function (msg) {
            chart2.dataProvider = msg;
            chart2.validateNow();
            chart2.validateData();  //刷新柱状图
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        }
    });
}
setTimeout("loadStringData()", 100);
