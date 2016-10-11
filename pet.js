function Pet(name) {
	this.name = name;
	this.hunger = 0;
	this.fun = 100;
	// start BCD
	this.hungerMin = -20;
	this.hungerMax = 100;
	this.funMin = 0;
	this.funMax = 200;


	this.feed = function(food) {
		this.hunger -= food;
		this.fun -= food / 2;
	}

	this.play = function(fun) {
		if (this.fun < this.funMax) {
			this.fun += fun;
		}	
		if (this.hunger < this.hungerMax) {
			this.hunger += fun / 2;
		}
	}
}
