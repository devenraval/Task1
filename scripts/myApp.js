(function(){
var app = angular.module('chartApp',[]);

app.controller('StaticMenuController',function(){
	this.showMe=0;
})

app.controller('MenuController',function($scope,$http){
	$scope.showMe=0;
	$scope.currentMenu=0;
	$http.get('json/menudata.json').then(function(response){
		$scope.menuData = response.data.menus;
	});
	$scope.setCurrent=function(x){
		if($scope.currentMenu==x){
			$scope.currentMenu=0;
		}else{
			$scope.currentMenu=x;
		}		
	};
	$scope.isCurrent=function(x){
		if($scope.currentMenu==x){return $scope.currentMenu;}
	};	
})

app.controller('SearchController',  function($scope,$http){
	$http.get("json/searchData.json").then(function(response){
		$scope.searchTiles=response.data.Tiles;
	});
})

app.controller('TilesController',function($scope,$http){
	$http.get("json/tilesData.json").then(function(response){
		$scope.tilesData=response.data.Tiles;
	});
	$scope.tab=0;
	$scope.setTab = function(tabNo){
      $scope.tab = tabNo;
    };
	$scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };
})

app.controller('SalesController', function($scope,$http) {	 
	 var labels=new Array(); 
	 var format_json = new Array();	 
	 var processed_json = new Array(); 
   		$.getJSON('json/SalesData.json', function(data) {
                   	for (i = 0; i <(data.Complex.length); i++){												
                    	var temp="{\"name\":"+"\""+data.Complex[i].name+"\",\"data\":["+data.Complex[i].data+"]}";
						var obj =JSON.parse(temp.toString());				
                    	format_json.push(obj);			
                    	}	
                    for (i = 0; i <(data.Simple.length); i++){	
                    	var temp1="{\"name\":"+"\""+data.Simple[i].name+"\",\"y\":"+data.Simple[i].values+"}";
						var obj1 =JSON.parse(temp1.toString());
                        processed_json.push(obj1);
                        }

			Highcharts.chart('container',{
			title: {
				text: 'Sales Data'
				},
			xAxis: {
				categories: ['Jan', 'Feb', 'Mar']
				},
			series: format_json
			});	

			Highcharts.chart('container1',{
			chart:{
				type:'column'
			},
			title: {
				text: 'Sales Data'
			},
			xAxis: {
				categories: ['Jan', 'Feb', 'Mar']
			},
			series: format_json
			});

			Highcharts.chart('container2', {
      		title: {
		        text: 'Pie Chart With Json'
		      	},
			chart:{type:'pie'},
			plotOptions:{pie:{dataLabels:
			{enabled:true,
			format:'{point.name}'
			}}},
     
      		series: [{
				name:'Marketing',
      	 	data: processed_json
      		}]
		});

											
	});
})

app.controller('MarketingController', function($scope,$http) {	 
	 var labels=new Array(); 
	 var format_json = new Array();	 
	 var processed_json = new Array(); 
   		$.getJSON('json/marketingData.json', function(data) {
                   	for (i = 0; i <(data.Complex.length); i++){												
                    	var temp="{\"name\":"+"\""+data.Complex[i].name+"\",\"data\":["+data.Complex[i].data+"]}";
						var obj =JSON.parse(temp.toString());				
                    	format_json.push(obj);			
                    	}	
                    for (i = 0; i <(data.Simple.length); i++){	
                    	var temp1="{\"name\":"+"\""+data.Simple[i].name+"\",\"y\":"+data.Simple[i].values+"}";
						var obj1 =JSON.parse(temp1.toString());
                        processed_json.push(obj1);
                        }

			Highcharts.chart('container3',{
			title: {
			text: 'Sales Data'
			},
			xAxis: {
			categories: ['Jan', 'Feb', 'Mar']
			},
			series: format_json
			});

			Highcharts.chart('container5',{
			chart:{
				type:'column'
			},
			title: {
				text: 'Sales Data'
			},
			xAxis: {
				categories: ['Jan', 'Feb', 'Mar']
			},
			series: format_json
			});	

			Highcharts.chart('container4', {
      	title: {
        text: 'Pie Chart With Json'
      	},
			chart:{type:'pie'},
			plotOptions:{pie:{dataLabels:
			{enabled:true,
			format:'{point.name}'
			}}},
     
      	series: [{
				name:'Marketing',
      	 	data: processed_json
      		}]
		});

											
	});
})


})();

	
