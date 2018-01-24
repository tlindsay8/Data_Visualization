var wins = [[[0,10],[1,8],[2,4],[3, 10],[4,10],[5,7],[6,7]]];
var years = [[0, "2010"],[1, "2011"],[2,"2012"],[3,"2013"],[4,"2014"],[5,"2015"],[6,"2017"]];
var wins2 = [[[0,13],[1,9],[2,7],[3,3]]];
var teams = [[0, "Eagles"],[1, "Cowboys"],[2, "Redskins"],[3, "Giants"]];
window.onload = function(){
	Flotr.draw(
		document.getElementById("chart"),
		wins,
		{
			title: "Philadelphia Eagles Wins",
			colors: ["#004953"],
			bars:{
				show:true,
				barWidth: 0.5,
				shadowSize: 0,
				fillOpacity: 1,
				lineWidth: 0
				},
			yaxis:{
				min: 0,
				tickDecimals: 0
			},
			xaxis:{
				ticks: years
			},
			grid: {
				horizontalLines: false,
				verticalLines: false
			}
		}
	
	);
	Flotr.draw(
		document.getElementById("chart-teams"),
		wins2,
		{
			title: "NFC East Records",
			colors: ["#004953","#000080", "#800020", "#0000ff"],
			bars:{
				show:true,
				barWidth: 0.5,
				shadowSize: 0,
				fillOpacity: 1,
				lineWidth: 0
				},
			yaxis:{
				min: 0,
				tickDecimals: 0
			},
			xaxis:{
				ticks: teams
			},
			grid: {
				horizontalLines: false,
				verticalLines: false
			}
		}
	
	);

};

