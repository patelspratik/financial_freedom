<!DOCTYPE HTML>

<html ng-app="FinancialFreedom">

	<head>
		<link rel="stylesheet" type="text/css" href="css/main.css">
	
		<script type="text/javascript" src="vendor/javascript/angular.min.js"></script>
		<script type="text/javascript" src="javascript/retirement_calculator_module.js"></script>
		<script type="text/javascript" src="javascript/app.js"></script>
	
		<title>Financial Freedom</title>
	</head>
	
	<body>
		<div ng-controller="SandboxController" class="first-div">
			<?php echo "this is php" ?>
			<br><br>
			
			<form ng-submit="calculateYearsToRetirement()">
				Net worth: $<input placeholder="50000" ng-model="retirement.net_worth" /><br>
				Annual expenses: $<input placeholder="40000" ng-model="retirement.annual_expenses" /><br>
				Annual salary: $<input placeholder="70000" ng-model="retirement.annual_salary" /><br>
				<input type="submit">
			</form>
			
			<br><br>
			
			Time to retire: <span class="retirement-years" ng-bind="retirement.years_to_retirement + ' years'"></span>
			
		</div>
	</body>

</html>