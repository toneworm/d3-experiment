(function ($, undefined) {

	var dataset = [ 5, 10, 25, 20, 40 ],
		datasetMax = Math.max.apply(null, dataset),
		w = 500,
		h = 200;
	
	var svg = d3.select("body")
		.append("svg")
		.attr("width", w)
		.attr("height", h);

	var circles = svg.selectAll("circle")
		.data(dataset)
		.enter()
		.append("circle");

	// circles next to eachother, same vertical alignment, distance between them circle next to it
	circles.attr("cx", function(d, i) {
			return (i * 50) + 25;
		})
		.attr("cy", function (d) {
			return d * 2;
		})
		.attr("r", function (d) {
			return d;
		})
		.attr("fill", function (d, i) {
			var cm = 50 + Math.round(d / 40 * 150);
			return "rgb(" + [cm,cm,cm].join() + ")";
		});

 	d3.select(".container")
 		.selectAll("circle")
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