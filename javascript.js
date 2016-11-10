google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
var TotalSaved =0;
var TotalProduced = 0;
var house = 0;
var travel = 0;
var secondry = 0;
var t = 0;
function calc() {
		var pBottle = document.forms["form1"]["calcPurchasePlastic"].value;
		var aCan = document.forms["form1"]["calcPurchaseCans"].value;
		var gBottle = document.forms["form1"]["calcPurchaseGlass"].value;
		var lbBeef = document.forms["form1"]["calcPurchaseBeef"].value;
		var lbPork = document.forms["form1"]["calcPurchasePork"].value;
		var lbOtherMeat = document.forms["form1"]["calcPurchaseOtherMeat"].value;
  	var recyPBottle = document.forms["form1"]["calcRecyPlastic"].value;
    var recyACans = document.forms["form1"]["calcRecyCans"].value;
    var recyGBottle = document.forms["form1"]["calcRecyGlass"].value;
    var recyBoxes = document.forms["form1"]["calcRecyBoxes"].value;
    var recyPapers = document.forms["form1"]["calcRecyPapers"].value;
    var recyElect = document.forms["form1"]["calcRecyElect"].value;
		document.forms["form1"]["calcPurchasePlastic"].value = "0";
	  document.forms["form1"]["calcPurchaseCans"].value = "0";
	  document.forms["form1"]["calcPurchaseGlass"].value = "0";
	  document.forms["form1"]["calcPurchaseBeef"].value = "0";
		document.forms["form1"]["calcPurchasePork"].value = "0";
	  document.forms["form1"]["calcPurchaseOtherMeat"].value = "0";
    document.forms["form1"]["calcRecyPlastic"].value = "0";
    document.forms["form1"]["calcRecyCans"].value = "0";
    document.forms["form1"]["calcRecyGlass"].value = "0";
    document.forms["form1"]["calcRecyBoxes"].value = "0";
    document.forms["form1"]["calcRecyPapers"].value = "0";
    document.forms["form1"]["calcRecyElect"].value = "0";

		TotalProduced = parseFloat((pBottle*0.69 + aCan*0.21 + gBottle*0.28 + lbBeef*5.0 + lbPork*3.0 + lbOtherMeat*2.0)).toFixed(4);
		TotalSaved = parseFloat((recyPBottle*0.15 + recyACans*0.28 + recyGBottle*0.38 + recyBoxes*0.04 + recyPapers*0.11 + recyElect*28)).toFixed(4);
		//totalProduced = localStorage.getItem("global");
		TotalDiff = parseFloat(TotalProduced - TotalSaved).toFixed(4);
		document.getElementById("calcResults").innerHTML = " TotalProduced :" + TotalProduced + " lb CO2";
		document.getElementById("calc").innerHTML = " TotalSaved : " + TotalSaved + " lb CO2";
    document.getElementById("total").innerHTML = " TotalDiff :" + TotalDiff + " lb CO2";

		localStorage.setItem("Totalsaved1",TotalSaved);
		localStorage.setItem("TotalProduced1",TotalProduced);
		var data = new google.visualization.arrayToDataTable([
			["Product" , "Emission" , { role  : "style" }],
			["Plastic_Bottles" , parseFloat(pBottle*0.69) , "orange"],
			["Aluminum_Cans" , parseFloat(aCan*0.21) , "green"],
			["Glass_Bottle" , parseFloat(gBottle*0.28) , "pink"],
			["Pounds_of_Beef" , parseFloat(lbBeef*5.0) , "black"],
			["Pounds_of_Pork" , parseFloat(lbPork*2.0) , "lightblue"],
			["Pounds_of_Chicken/Fish" , parseFloat(lbOtherMeat*2.0) , "violet"],
			["Plastic_Bottles" , parseFloat(recyPBottle*0.15) , "purple"],
			["Aluminum_Cans" , parseFloat(recyACans*.28) , "gold"],
			["Glass_Bottles" , parseFloat(recyGBottle*0.38) , "lightgreen"],
			["Cardboard_Boxes" , parseFloat(recyBoxes*0.04) , "brown"],
			["Magazines/Newspapers" , parseFloat(recyPapers*0.11) , "grey"],
			["Electronics" , parseFloat(recyElect*28) , "silver"],
			["TotalProduced" , parseFloat(TotalProduced) , "red"],
			["TotalSaved" , parseFloat(TotalSaved) , "blue"],
			["Total" , parseFloat(TotalDiff) , "yellow"]

		]);

		var view = new google.visualization.DataView(data);
		view.setColumns([0, 1,
										 { calc: "stringify",
											 sourceColumn: 1,
											 type: "string",
											 role: "annotation" },
										 2]);

		var options = {'title':'Carbon_Emitted in lb CO2',
									 'width':800,
									 'height':800};


		var chart = new google.visualization.BarChart(document.getElementById('graph'));
						chart.draw(view	, options);
	};


	function housing() {
			var pBottle = document.forms["form1"]["calcPurchasePlastic"].value;
			var aCan = document.forms["form1"]["calcPurchaseCans"].value;
			var gBottle = document.forms["form1"]["calcPurchaseGlass"].value;
			var lbBeef = document.forms["form1"]["calcPurchaseBeef"].value;
			document.forms["form1"]["calcPurchasePlastic"].value = "0";
		  document.forms["form1"]["calcPurchaseCans"].value = "0";
		  document.forms["form1"]["calcPurchaseGlass"].value = "0";
		  document.forms["form1"]["calcPurchaseBeef"].value = "0";

			house = parseFloat(pBottle * 1.43 + aCan * 0.49 + gBottle * 6.83 + lbBeef * 3.97).toFixed(4);
			localStorage.setItem("house1",house);

			document.getElementById("calcResults").innerHTML = " TotalProduced :" + house + " lb CO2";

			var data = new google.visualization.arrayToDataTable([
				["Product" , "Emission" , { role  : "style" }],
				["Electricity" , parseFloat(pBottle * 1.43) , "red"],
				["Natural_Gas" , parseFloat(aCan * 0.49) , "blue"],
				["Heating_Oil" , parseFloat(gBottle * 6.83) , "silver"],
				["LPG" , parseFloat(lbBeef * 3.97) , "green"],
				["Total CO2 " , parseFloat(house) , "lightblue"]

			]);

			var view = new google.visualization.DataView(data);
			view.setColumns([0, 1,
											 { calc: "stringify",
												 sourceColumn: 1,
												 type: "string",
												 role: "annotation" },
											 2]);

			var options = {'title':'Carbon_Emitted',
										 'width':600,
										 'height':400};


			var chart = new google.visualization.BarChart(document.getElementById('graphs'));
							chart.draw(view	, options);
		};



		function travels() {
				var pBottle = document.forms["form1"]["calcPurchasePlastic"].value;
				var aCan = document.forms["form1"]["calcPurchaseCans"].value;
				var gBottle = document.forms["form1"]["calcPurchaseGlass"].value;
				var lbBeef = document.forms["form1"]["calcPurchaseBeef"].value;
				document.forms["form1"]["calcPurchasePlastic"].value = "0";
				document.forms["form1"]["calcPurchaseCans"].value = "0";
				document.forms["form1"]["calcPurchaseGlass"].value = "0";
				document.forms["form1"]["calcPurchaseBeef"].value = "0";

				travel = parseFloat(pBottle * 0.25 + aCan * 0.0045 + gBottle * 0.115 + lbBeef * 0.0008).toFixed(4);
				localStorage.setItem("travel1",travel);

				document.getElementById("calcResults").innerHTML = " TotalProduced :" + travel + " lb CO2";

				var data = new google.visualization.arrayToDataTable([
					["Product" , "Emission" , { role  : "style" }],
					["Cars" , parseFloat(pBottle * 0.25) , "red"],
					["Buses" , parseFloat(aCan * 0.0045) , "blue"],
					["Train" , parseFloat(gBottle * 0.115) , "silver"],
					["Flight" , parseFloat(lbBeef * 0.0008) , "green"],
					["Total CO2 " , parseFloat(travel) , "lightblue"]

				]);
				var view = new google.visualization.DataView(data);
				view.setColumns([0, 1,
												 { calc: "stringify",
													 sourceColumn: 1,
													 type: "string",
													 role: "annotation" },
												 2]);

				var options = {'title':'Carbon_Emitted',
											 'width':600,
											 'height':400};


				var chart = new google.visualization.BarChart(document.getElementById('graphs'));
								chart.draw(view	, options);
			};


			function second() {
					var pBottle = document.forms["form1"]["calcPurchasePlastic"].value;
					var aCan = document.forms["form1"]["calcPurchaseCans"].value;
					var gBottle = document.forms["form1"]["calcPurchaseGlass"].value;
					var lbBeef = document.forms["form1"]["calcPurchaseBeef"].value;
				  var lbPork = document.forms["form1"]["calcPurchasePork"].value;
					document.forms["form1"]["calcPurchasePlastic"].value = "0";
					document.forms["form1"]["calcPurchaseCans"].value = "0";
					document.forms["form1"]["calcPurchaseGlass"].value = "0";
					document.forms["form1"]["calcPurchaseBeef"].value = "0";
					document.forms["form1"]["calcPurchasePork"].value = "0";

					secondry = parseFloat(pBottle * 0.00004 + aCan * 0.00002 + gBottle * 0.000013 + lbBeef * 0.000023 + lbPork * 0.000011).toFixed(4);
					localStorage.setItem("secondry1",secondry);

					document.getElementById("calcResults").innerHTML = " TotalProduced :" + secondry + " lb CO2";

					var data = new google.visualization.arrayToDataTable([
						["Product" , "Emission" , { role  : "style" }],
						["Food & Drink" , parseFloat(pBottle * 0.00004) , "red"],
						["Medicines" , parseFloat(aCan * 0.00002) , "blue"],
						["Clothes" , parseFloat(gBottle * 0.000013) , "silver"],
						["Telephone" , parseFloat(lbBeef * 0.000023) , "green"],
						["Recreation" , parseFloat(lbBeef * 0.000011) , "gold"],
						["Total CO2 " , parseFloat(secondry) , "lightblue"]

					]);
					var view = new google.visualization.DataView(data);
					view.setColumns([0, 1,
													 { calc: "stringify",
														 sourceColumn: 1,
														 type: "string",
														 role: "annotation" },
													 2]);

					var options = {'title':'Carbon_Emitted',
												 'width':600,
												 'height':400};


					var chart = new google.visualization.BarChart(document.getElementById('graphes'));
									chart.draw(view	, options);
				};



			function finals() {

					var a = parseFloat(localStorage.getItem("Totalsaved1")).toFixed(4);
					var b = parseFloat(localStorage.getItem("TotalProduced1")).toFixed(4);
					var c = parseFloat(localStorage.getItem("house1")).toFixed(4);
					var d = parseFloat(localStorage.getItem("travel1")).toFixed(4);
					var e = parseFloat(localStorage.getItem("secondry1")).toFixed(4);
					//localStorage.getItem("Totalsaved1");
					t = parseFloat(parseFloat(d) + parseFloat(c) + parseFloat(e) + parseFloat(b) - parseFloat(a)).toFixed(4);
					var data = new google.visualization.arrayToDataTable([
						["Product" , "Emission" , { role  : "style" }],
						["Purchase Emission" , parseFloat(b) , "red"],
						["House Emission" , parseFloat(c) , "blue"],
						["Travel Emission" , parseFloat(d) , "silver"],
						["Secondary Emission" , parseFloat(e) , "pink"],
						["Total Saved" , parseFloat(a) , "green"],
						["Total Emission" , parseFloat(t) , "gold"],
						["Allowed Carbon Emission / person * day" , 10.1 , "lightblue"]
					]);

					var tree = 0;
					if ( t > 10.1)
					{
						tree = parseInt((parseFloat(parseFloat(t)-10.1)/0.1315));
						document.getElementById("trees").innerHTML = " Total No of trees needs to be planted are :" + tree ;
					}
					else {
						document.getElementById("trees").innerHTML = "You are doing a great job , Thanks for taking care of the environment :-) ";
					}
					var view = new google.visualization.DataView(data);
					view.setColumns([0, 1,
													 { calc: "stringify",
														 sourceColumn: 1,
														 type: "string",
														 role: "annotation" },
													 2]);

					var options = {'title':'Carbon_Emitted',
												 'width':800,
												 'height':400};


					var chart = new google.visualization.BarChart(document.getElementById('graphFinal'));
									chart.draw(view	, options);
				};


			//	<button id="BUTTONID" class="btn btn-success" onclick="calc()">Calculate</button>
