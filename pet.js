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
		if (this.hunger > this.hungerMin) {
			this.hunger -= food;
			this.fun -= food / 2;
		}
		if (this.hunger <= this.hungerMin) {
			alert("Stop feeding me!");
		}
	};

	this.play = function(fun) {
		if (this.fun < this.funMax) {
			this.fun += fun;
			this.hunger += fun /2;
		}
		if (this.fun >= this.funMax) {
			alert("Stop playing with me!");
		}

		// if (this.hunger < this.hungerMax) {
		// 	this.hunger += fun / 2;
		// }
	};
}
