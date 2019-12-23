/**
 * Creational Patterns
 */

/**
 * Protype Method
 */

/**
 * Problem as explained under Protype Method in
 * https://refactoring.guru/design-patterns/abstract-factory
 * for better understanding use - https://quokkajs.com/
 */

var Shape = function(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.move = function(x, y) {
    this.x = x;
    this.y = y;
  };
  this.clone = function() {};
};

var Circle = function(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
  Shape.call(this, x, y, color);
  this.clone = function() {
    return new Circle(this.x, this.y, this.color);
  };
};

var Rectangle = function(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
  Shape.call(this, x, y, color);
  this.clone = function() {
    return new Rectangle(this.x, this.y, this.color);
  };
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle.prototype;

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle.prototype;

var circle = new Circle(10, 20, "red");
circle;

var rectangle = new Rectangle(20, 20, "red");
rectangle;
rectangle.x = 151;
var recClone = rectangle.clone();
recClone;
recClone.x = 11;
recClone;

var ArrayOfShapes = function(shape, n) {
  for (i = 0; i < n; i++) {
    let clone = shape.clone();
    clone;
  }
};

ArrayOfShapes(rectangle, 2);

/**
 * Consider an example where you want to maintain some kind of history for undo/redo
 * or just to save previous version of something.
 *
 */

circle;
rectangle;

/**
 * Move circle to 100, 100 but also save its current position for future ref
 */

var history = [];

history.push(circle.clone());
circle.move(100, 100);
circle;

history.push(rectangle.clone());
rectangle.move(120, 80);
rectangle;

// history object containing previous position of shapes
history;
