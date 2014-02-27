(function ($, undefined) {

	var dataset = [ 5, 10, 15, 20 ];

 	d3.select(".container")
 		.selectAll("p")
	    .data(dataset)
	    .enter()
	    .append("p")
	    .style("background-color", function (d) {
	    	var color = Math.round(d/20 * 255),
	    		colorStr = [color, color, color].join();

	    	return "rgb(" + colorStr + ")";
	    })
	    .text(function(d) { return d; });

}(jQuery));