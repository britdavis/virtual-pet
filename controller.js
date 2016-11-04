function Controller(model) {

	this.addPet = function(name) {
		var p = new Pet(name);
		model.addPet(p);
		return p;
	};

	this.playWithPet = function(name, amount) {
		var p = model.getPetByName(name);
		p.play(amount);
		return p;
	};

	this.getAllPets = function() {
		return model.getAllPets();
	};
	// start BCD
	this.feedPet = function(name, amount) {
		var p = model.getPetByName(name);
		p.feed(amount);
		return p;
	// end BCD
	
	};
	// ** TODO **
	// need to get all pets and for each
	// this.hungryBored = function()
	// window.setInterval(this.hungryBored, 2000)
	// function hungryBored () {
	//	feedPet (name, amount) {
	//	var p = model.getPetByName(name);
	//	p.feed(amount);
	//	return p;
	//	}
	// }
	
}
