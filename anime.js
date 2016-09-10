const fs = require('fs');
var points = [7, 5, 3, 2, 1] //modify weights for preferences here
var animeList = [];
//type the titles here, order here must match order on ballot
var titles =
	["Relife",
		"Orange",
		"Mob Psycho 100",
		"Amaama to Inazuma",
		"Boku no Hero Academia",
		"Kiznaiver",
		"Sakamoto Desuga",
		"91 Days",
		"Fukigen na Mononokean",
		"Alderamin on the Sky"
	];


//string to output file in csv order
var csv_output = " ,";

//inititalize list
for (var o in titles) {
	animeList.push({
		name: titles[o],
		sum: 0
	});

	csv_output += titles[o].name + ","

}
csv_output += "\n"

var lines = fs.readFileSync("votes.txt");
var x = lines.toString();

var lineArray = x.split("\n");


for (var index in lineArray) {
	var line = lineArray[index].toLowerCase();
	line = line.replace('\r', "");
	line = line.replace('\n', "");


	console.log(line);


	var totalArray = [];
	for (var i = 0; i < animeList.length; i++) {
		totalArray.push(0);
	}

	for (var i = 0; i < points.length; i++) {
		var animeCode = line.charCodeAt(i) - "a".charCodeAt(0);

		if (animeCode >= 0 && animeCode <= animeList.length) {
			animeList[animeCode].sum += points[i];
			totalArray[animeCode] = points[i];
		}

	}
	csv_output += line.substring(points.length) + "," + totalArray.toString() + "\n";

}

console.log("");

console.log(JSON.stringify(animeList));
console.log("\n");
console.log(csv_output);


animeList.sort(function(a, b) {
	return b.sum - a.sum;
});

for (var o in animeList) {
	console.log(animeList[o].name + " " + animeList[o].sum);

}

fs.writeFileSync("anime_sum.csv", csv_output);