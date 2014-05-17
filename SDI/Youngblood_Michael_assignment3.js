/*

Author: Michael Youngblood
Date: 2012/05/12
Class: SDI 1202
Project: Assignment3

*/
/*
The story this is based on 

It was a quiet Tuesday night, when all of a sudden Jessica and Jacquie were startled by the door being broken down. 
It was a crowd of zombies breaking in. They were attracted there accute senses of movement and living tissue. It appeared 
that they were trying to spread their deseases. Lucky for them, they were distracted by the sight of the refridgerator. In 
their hopes to find some froyo, The girls were able to escape without being noticed. The zombies were very outraged and started 
to abuse one another when the found only ice cream sandwiches and the girls missing. One of the zombies had threw a carton of 
strawberries about and one landed in anothers mouth. The zombie went nuts with excitement of the taste. It turns out, strawberries
are better then froyo. The zombie crowd made their way to the closest strawberry field and grew 10 times the amount of zombies that
raided Jessica's place. They are now quarentined inside the field. 
*/

var night = "quite Tuesday night";
var girls = ['Jessica','Jacquie'];

var fridgeContainsFroyo = false;
distanceToNearestStrawberryField = 10;

var zombies = {
	favFood: ['froyo'],
	obj: {},
	hungry: true,
	str: 'string',
	hordeSize: 8,
	accuteSenses: ['movement', 'living tissue'],
	deseases: ['plauge','ebola','zombification'],
	changeDirection: function(direction) {
		console.log("Horde is now moving toward " + direction);
	}, 
	growHorde: self.setHordeSize = function (n) {
		var size = zombies.hordeSize;
		var grow = n;
		var newHorde = size + grow;
		zombies.hordeSize = newHorde;
		return zombies.hordeSize;
	},
	raidFridge: function (fridge) {
		if (fridge === true) {
			console.log('The zombies are now raiding the fridge');
			if (fridgeContainsFroyo === true) {
				message = 'The zombies are sooo happy. They found froyo'
			} else {
				message = 'The zombie horde is becomes enraged because there is no Froyo';
			}
		} else {
			message = 'there is not fridge, really? really? who doesn\'t have a fridge. wow';
		}
		return message;
	},
	addFavFood: self.setfavFood = function (favFoods, newFood) {
		var current = favFoods;

		favFoods.push(newFood);
		console.log(newFood + ' has been added to the zombies favorite foods.');
		return favFoods;
	},
	traveling: function (move, distance) {
		if ( move === true ) {
			i = distance;
			while ( i > 1 ) {
				console.log('zombies are on the move. ' + i + ' miles to go.');
				var growBy = i;
				for ( ii = growBy; ii > 0; ii-- ) {
					//console.log(zombies.hordeSize);
					//zombies.growHorde(ii);
					console.log('As the zombies scream and moan, the horde grows in size. The horde is now ' + zombies.growHorde(ii) + ' deep.');
				};
				i--;
			};
		return i;
		};
	},
	exportHorde: function (obj) {
		for (var key in zombies) {
			var lockedupZombies = JSON.stringify(zombies);
		};
		return(lockedupZombies);
	}

};

var main = function () {
	console.log('It was a ' + night + '.');
	console.log(girls + ' was startled by a zombie horde breaking down their door.');
	console.log('The zombie horde was ' + zombies.hordeSize + ' zombies deep.');
	console.log('The zombies appeart to be trying to spead their deseases ' + zombies.deseases);
	console.log('The zombies were then distracted by the fridge');
	console.log(zombies.raidFridge(true));
	console.log('The girls escape while the zombies were distracted by the fridge');
	console.log('The zombies started throwing strawberries from the fridge');
	console.log('A berry landed in zombies mouth');
	console.log('The zombie went crazy with excitement');
	console.log('It turns out strawberries are freakin awesome');
	zombies.favFood = zombies.addFavFood(zombies.favFood, 'strawberries');
	console.log('new favorite foods list: ' + zombies.favFood);
	console.log('zombie horde made way to closest strawberries');
	zombies.changeDirection('nearest strawberry field');
	zombies.traveling(true, distanceToNearestStrawberryField);
	console.log('Now that the zombies are distracted by the strawberry field. The national guard decides to export and quarentine them.');
	console.log(zombies.exportHorde(zombies));
	console.log('Cheers! The town is safe... for now. ;) ');
};

main();




