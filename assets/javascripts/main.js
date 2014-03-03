(function () {

	var dataset = [ 22, 27, 7, 17, 2, 12, 18, 19, 9, 29, 27, 28, 29, 20, 8, 30, 1, 4, 18, 15, 20, 21, 21, 5, 21, 22 ],
		datasetMax = Math.max.apply(null, dataset),
		w = parseInt(d3.select(".container").style("width")),
		h = 180,
		barW = w / dataset.length;

	var btn = document.querySelector(".go-btn"),
		dataBtn = document.querySelector(".data-btn");

	// bar graph animated
	// set up bars 0 height (calc width in container and split)
	// enter data into bars, tada

	function buildGraph () {
		var barGraph = d3.select(".bar-graph");
		if ( barGraph.empty() ) {

			var divs = d3.select(".container")
						.append("div")
						.attr("class", "bar-graph")
						.selectAll("div")
						.data(dataset)
						.enter()
						.append("div");

			divs.attr("class", "bar")
				.style("left", function (d, i) {
					return (i * (barW - 2)) + "px";
				})
				.style("width", (barW - 3) + "px")
				.style("background", function (d, i) {

						var h = 200,
							s = Math.round(d / datasetMax * 100) + "%",
							l = "70%";

						str = "hsl(" + [h, s, l].join(", ") + ")";
						console.log(str);
						return str;
				});
		}
	}

	function changeData () {
		var barGraph = d3.select(".bar-graph"),
			randomData = [];

		for ( var i = 0; i < 26; i ++ ) {
			randomData.push(Math.round(Math.random()* 30));
		}

		if ( !barGraph.empty() ) {
			barGraph.selectAll("div")
				.data(randomData)
				.enter();
		}
	}

	function animateBars () {
		var barGraph = d3.select(".bar-graph");
		if ( !barGraph.empty() ) {
			barGraph.selectAll("div")
				.transition()
				.delay(function (d, i) {
					return i * 100;
				})
				.duration(100)
				.ease("elastic")
				.style("height", function(d){
					return (d / datasetMax * h) + "px";
				})
				.style("background", function (d, i) {

						var h = 10,
							s = Math.round(d / datasetMax * 100) + "%",
							l = "30%";

						str = "hsl(" + [h, s, l].join(", ") + ")";
						console.log(str);
						return str;
				});
		}
	}

	// clickedy
	btn.addEventListener("click", function () {
		buildGraph();
		animateBars();
	});
	dataBtn.addEventListener("click", function () {
		changeData();
		animateBars();
	});

}());