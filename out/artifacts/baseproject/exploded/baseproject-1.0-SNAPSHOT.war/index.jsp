<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="renderer" content="webkit">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
  <link rel="stylesheet" type="text/css" href="css/index.css">

  <!-- 1. 载入库 -->
  <!-- IE 需要 polyfill -->
  <script src="node_modules/core-js/client/shim.min.js"></script>
  <script src="node_modules/zone.js/dist/zone.js"></script>
  <script src="node_modules/reflect-metadata/Reflect.js"></script>
  <script src="node_modules/systemjs/dist/system.src.js"></script>
  <!-- 2. 配置 SystemJS -->
  <script src="systemjs.config.js"></script>
  <script>
    System.import('app').catch(function(err){ console.error(err); });

  </script>
  <script src="js/amcharts.js"></script>
  <script src="js/jquery.min.js"></script>
  <%--  <script src="js/CountAmcharts.js"></script>--%>
  <script src="js/serial.js"></script>

</head>
<body>
<div class="grid-bg"><img src="images/grid-bg.png"></div>
<div class="grid-main">
    <div class="grid-logo"></div>
    <div class="grid-time"><date-app></date-app></div>
    <div class="grid-con">
        <div class="grid-left">
            <div class="grid-left-tj">
              <dept-app></dept-app>
            </div>

            <div class="grid-chart">
                <totalChart-app></totalChart-app>
            </div>

            <div class="grid-chart">
                <itemChart-app></itemChart-app>
            </div>

        </div>
        <div class="grid-right clearfix">
            <all-app></all-app>
        </div>
    </div>
</div>

</body>
</html>