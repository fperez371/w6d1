
Function.prototype.inherits = function(supe) {
  function Surrogate(){}
  Surrogate.prototype = supe.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits2 = function (supe) {
  this.prototype = Object.create(supe.prototype);
  this.prototype.constructor = this;
};


//Testing above method
function MovingObject() {}

MovingObject.prototype.woosh = function() {
  console.log("Moves through space!");
}

function Ship() { }
Ship.inherits2(MovingObject);

function Asteroid() { }
Asteroid.inherits2(MovingObject);

const ship = new Ship();
ship.woosh();

const mover = new MovingObject();
mover.woosh();

const ast = new Asteroid();
ast.woosh();

console.log(mover instanceof MovingObject);
console.log(ship instanceof Ship);
console.log(ast instanceof Asteroid);