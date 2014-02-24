(function ($, undefined) {

	var dataset = [ 5, 10, 15, 20 ];

	// d3.select("body")
	//    	.selectAll("p")
	//    	.data(dataset)
	//    	.enter()
	//    	.append("p")
	//    	.text("New paragraph");

	// d3.select("body").selectAll("p")
 //    .data(dataset)
 //    .enter()
 //    .append("p")
 //    .text("New paragraph!");

 	// alert("test");

 	d3.select(".container")
 		.selectAll("p")
	    .data(dataset)
	    .enter()
	    .append("p")
	    .text(function(d) { return d; });

}(jQuery));