(function(){  	
  	function MainCtrl($scope, $http){
  		$http.get("feature-Charts/demoData.json").then(function(response){
  			$scope.data=response.data;
  			$scope.fillme();
  		});	
  		$scope.fillme = function(){
  			$scope.lineChartYData=$scope.data.yData;
  			$scope.lineChartXData=$scope.data.xData;
  		}				
  	}
  	var app123 = angular.module('dirchartApp', []);

  	app123.directive('chart', function () {
  		return {
  			restrict:'A',
  			template:'<chart title="Line chart example" xData="lineChartXData" yData="lineChartYData" xName="Week" yName="Hours" subtitle="This is an example"></chart>',
  			replace:true,
  			controller: MainCtrl,
  			link:function (scope, element, attrs) {
  				var opt = 
  				{
  					chart:
  					{
  						renderTo:element[0],
  						type:'line'
  					},
  					title:
  					{
  						text:attrs.title,
  						x:-20 //center
					},
				subtitle:
					{
						text:attrs.subtitle,
						x:-20
					},
				xAxis:
					{
						title:
						{
							text:attrs.xname
						}
					},
				plotOptions:
					{
						lineWidth:0.5
					},
				yAxis:
					{
						title:
						{
						text:attrs.yname
						}
					},
				tooltip:{
					formatter:scope[attrs.formatter]||function () {
						return '<b>' + this.y + '</b>'
						}
					},
				legend:
					{
						layout:'vertical',
						align:'right',
						verticalAlign:'top',
						x:-10,
						y:100,
						borderWidth:0
					},
				series:[]
				}
				scope.$watch(function (scope)
					{
						return JSON.stringify(
							{
								xAxis:
								{
									categories:scope[attrs.xdata]
								},
								series:scope[attrs.ydata]
							});
					}, function (newval)
						 	{
								newval = JSON.parse(newval)
								if (!newval.series)return;
								angular.extend(opt,newval)
								var chart = new Highcharts.Chart(opt);
					});
				}
			}
	})		
})();