function View(controller) {

	this.createPetHTML = function(pet) {
		var $button = $("<button>Play!</button>");
		// start BCD
		var $playButtonAmt = $("<button>Play Amt</button>")
		var $feedButton = $("<button>Feed!</button>");
		var $feedButtonAmt = $("<button>Feed Amt</button>");
		// end BCD

		// var self = this;
		// $button.click(function() {
		// 	controller.playWithPet(pet.name, 10);
		// 	self.showAllPets();
		// });

		$button.click(function() {
			controller.playWithPet(pet.name, 10);
			this.showAllPets();
		}.bind(this));

		// start BCD
		$playButtonAmt.click(function() {
			var playAmt = parseFloat(prompt("how much play?"));
			controller.playWithPet(pet.name, playAmt);
			this.showAllPets();
		}.bind(this));
		// end BCD

		// start BCD
		$feedButton.click(function() {
			// start BCD
			controller.feedPet(pet.name,8);
			this.showAllPets();
		}.bind(this));
		// end BCD


		// start BCD
		$feedButtonAmt.click(function() {
			// start BCD
			var foodAmt = parseFloat(prompt("how much?"));
			controller.feedPet(pet.name, foodAmt); // BCD replaced value with foodAmt
			this.showAllPets();
		}.bind(this));
		// end BCD

		var $pet = $("<p>" +
			pet.name +
			":: " +
			"hunger: " +
			pet.hunger +
			" and " +
			"fun: " +
			pet.fun +
			" __ " +
			"</p>"
		);
		$pet.append($button);
		// start BCD
		$pet.append($playButtonAmt);
		$pet.append($feedButton);
		$pet.append($feedButtonAmt);
		// end BCD
		return $pet;
	};

	this.showAllPets = function() {
		$('#output').html("");
		var allPets = controller.getAllPets();
		for(var pet of allPets) {
			var petHTML = this.createPetHTML(pet);
			$('#output').append(petHTML);
			// begin BCD
			document.getElementById("petname").value = "";
			// end BCD
		}
	};

	this.createPet = function() {
		var name = $('#petname').val();
		controller.addPet(name);
		this.showAllPets();
	}

}
