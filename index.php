<!DOCTYPE HTML>

<html ng-app="FinancialFreedom">

    <head>
        <link href='http://fonts.googleapis.com/css?family=Oxygen:400,300,700' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="stylesheets/output/screen.css">
        <script type="text/javascript" src="bower_components/d3/d3.min.js"></script>
        <script type="text/javascript" src="vendor/javascript/angular.min.js"></script>
        <script type="text/javascript" src="vendor/javascript/angular-route.js"></script>
        <script type="text/javascript" src="javascript/retirement_calculator_module.js"></script>
        <script type="text/javascript" src="javascript/app.js"></script>
    
        <title>Financial Freedom</title>
    </head>
    
    <body>

        <div class="header navbar navbar-default">
            <div class="headerText">
                <p class="productName">Beanstalk</p>
                <p class="tagLine">Countdown to retirement</p>
            </div>
        </div>

        <div ng-view></div>

    </body>

</html>