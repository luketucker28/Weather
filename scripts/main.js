var url = 'http://api.wunderground.com/api/f1501a372244a8fa/forecast10day/q/37201.json';
function getJSONP(url, cbName){ 
  var $script = document.createElement('script');                        
  $script.src = url + '?callback=' + cbName;
  document.body.appendChild($script);
}

function myAwesomeFunction(data){
  for(var i = 0; i < 10; i++) {
  addToUl(data, i);
 }

}  
function addToUl(data, i) {
	var $ulToBe = document.getElementById('5-days');
	var low = data.forecast.simpleforecast.forecastday[i].low.fahrenheit;
 	var day = data.forecast.simpleforecast.forecastday[i].date.weekday;
	var high = data.forecast.simpleforecast.forecastday[i].high.fahrenheit;
	var $li = document.createElement("li");
	$li.innerHTML = " Day " + day + " HIGH " + high + " Low " + low;
	$ulToBe.appendChild($li);
}
 
document.addEventListener("DOMContentLoaded", function() {
  getJSONP(url,'myAwesomeFunction');

});

