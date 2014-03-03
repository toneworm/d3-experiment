<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>D3 Test</title>
	<script type="text/javascript" src="bower_components/d3js/build/d3.v3.js"></script>
	<script type="text/javascript" src="bower_components/jquery/dist/jquery.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.css">
	<!-- Optional theme -->
	<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap-theme.css">
	<!-- Latest compiled and minified JavaScript -->
	<script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
	<!-- main css -->
	<link rel="stylesheet" href="assets/stylesheets/main.css" type="text/css"/>
	<!--[if lt IE 9]>
		<script src="dist/html5shiv.js"></script>`
	<![endif]-->
</head>
<body>
	<div class="container">
		<h1>Testing 1 2 3</h1>
		<div class="row">
		  <div class="col-xs-6 col-sm-3">Some content here&hellip;</div>
		  <div class="col-xs-6 col-sm-3">Some content here&hellip;</div>

		  <!-- Add the extra clearfix for only the required viewport -->
		  <div class="clearfix visible-xs"></div>

		  <div class="col-xs-6 col-sm-3">Some content here&hellip;</div>
		  <div class="col-xs-6 col-sm-3">Some content here&hellip;</div>
		</div>
	</div>
	<div class="container">
		<div class="svg-container">
			<svg width="500" height="500">
				<rect x="0" y="0" width="500" height="50"/>
				<circle cx="250" cy="100" r="25"/>
				<ellipse cx="250" cy="175" rx="100" ry="25"/>
				<line x1="0" y1="200" x2="500" y2="250" stroke="black"/>
				<text x="250" y="275" fill="black">Testing Text</text>
				<circle cx="50" cy="325" r="25" fill="rgba(0,0,0,0.5)" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
				<circle cx="90" cy="325" r="25" fill="rgba(0,0,0,0.5)" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
				<circle cx="130" cy="325" r="25" fill="rgba(0,0,0,0.5)" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
				<circle cx="170" cy="325" r="25" fill="rgba(0,0,0,0.5)" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
				<circle cx="210" cy="325" r="25" fill="rgba(0,0,0,0.5)" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
			</svg>
		</div>
	</div>

	<script type="text/javascript" src="assets/javascripts/main.js"></script>
</body>
</html>