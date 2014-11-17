var FinancialFreedom = angular.module('FinancialFreedom', ['RetirementCalculatorModule']);

FinancialFreedom.controller('RetirementCalculatorController', ['$scope', 'RetirementCalculatorService',  function($scope, RetirementCalculatorService) {
    $scope.retirement = {
        net_worth: '',
        monthly_expenses: '',
        monthly_pay: '',
        months_to_retirement: '???'
    };
    
    $scope.calculateMonthsToRetirement = function() {
        net_worth = parseInt($scope.retirement.net_worth);
        monthly_pay = parseInt($scope.retirement.monthly_pay);
        monthly_expenses = parseInt($scope.retirement.monthly_expenses);
    
        retirement_data = RetirementCalculatorService.calculateMonthsToRetirement(net_worth, monthly_pay, monthly_expenses);
        $scope.retirement.months_to_retirement = retirement_data['months'];
        
        createRetirementGraph(retirement_data['data_to_graph']);
    };
    
    function createRetirementGraph(data_to_graph) {
        var margin = {top: 20, right: 20, bottom: 30, left: 100},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;
        
        var cur_date = new Date();
        var end_date = new Date();
        end_date.setMonth(end_date.getMonth() + data_to_graph.length);
        
        var max_value = d3.max(data_to_graph, function(d) { return d.withdraw_limit; });
        console.log(max_value);
        console.log(data_to_graph);
        
        var chart = d3.select('#retirement-graph');
        
        chart.selectAll("*").remove();
        
        chart.attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.bottom + margin.top);
            
        var xScale = d3.time.scale()
            .domain([cur_date, end_date])
            .range([0, width]);
            
        var yScale = d3.scale.linear()
            .domain([0, max_value])
            .range([height, 0]);
            
        var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient('bottom');
            
        var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");
            
        chart.append("g")
            .attr("class", "axis x-axis")
            .attr("transform", "translate(" + margin.left + ", " + (height + margin.top) + ")")
            .call(xAxis);
        
        chart.append("g")
            .attr("class", "axis y-axis")
            .attr("transform", "translate(" + margin.left + ", " + margin.top + ")")
            .call(yAxis);
        
        var expense_line = d3.svg.line()
            .x(function(d, i) { 
                var date = new Date();
                return xScale(date.setMonth(cur_date.getMonth() + i));
            })
            .y(function(d) {
                return yScale(d.expenses);
            });
            
        var withdraw_line = d3.svg.line()
            .x(function(d, i) {
                var date = new Date();
                return xScale(date.setMonth(cur_date.getMonth() + i));
            })
            .y(function(d) {
                return yScale(d.withdraw_limit);
            });
            
        chart.append("path")
            .attr("class", "expense-line")
            .attr("d", expense_line(data_to_graph))
            .attr("transform", "translate(" + margin.left + ", " + margin.top + ") ");
        chart.append("path")
            .attr("class", "withdraw-line")
            .attr("d", withdraw_line(data_to_graph))
            .attr("transform", "translate(" + margin.left + ", " + margin.top + ") ");
            
    };
}]);