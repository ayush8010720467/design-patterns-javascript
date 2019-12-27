/**
 * Structural Patterns
 */

/**
 * Composite Pattern
 */

/**
 * Problem as explained under Bridge pattern in
 * https://refactoring.guru/design-patterns/composite
 * for better understanding use - https://quokkajs.com/
 */

/**
 * Think of it as recursion
 */

/**
 * We have items and items have price. Then we have a box that can contain
 * no. of items. We need to calculate the price of Box.
 */

var Item = function(name, price) {
  this.name = name;
  this.price = price;
  this.getPrice = function() {
    return this.price;
  };
};

var Box = function() {
  this.items = [];
  this.addItem = function(item) {
    this.items.push(item);
  };
  this.getItems = function() {
    return this.items;
  };
  this.getPrice = function() {
    var price = this.items.reduce((acc, item) => {
      acc += item.getPrice();
      return acc;
    }, 0);
    return price;
  };
};

var i1 = new Item("pen", 10);
var i2 = new Item("pencil", 5);
var i3 = new Item("rubber", 5);
var i4 = new Item("scale", 2);

var geometry = new Box();
geometry.addItem(i1);
geometry.addItem(i2);
geometry.addItem(i3);
geometry.addItem(i4);

console.log(geometry.getItems());
console.log(geometry.getPrice());


/**
 * Composition makes things very handy. You can create composition over
 * already composed objects.
 */

var tiffin = new Item("tiffin", 20);

var bag = new Box();
bag.addItem(geometry);
bag.addItem(tiffin);

console.log(bag.getItems());
console.log(bag.getPrice());

/**
 * Another exampe - Moving a Single shape vs Moving a Group of Shapes.
 * Just call te move function of Grou, It will iterate over
 * all child shapes and move them.
 * Note: A Group can also have multiple groups as a child.
 */
var Shape = function() {
  this.x = 0;
  this.y = 0;
  this.move = function(x, y) {
    this.x += x;
    this.y += y;
  };
};

var Circle = function() {
  Shape.call(this);
  this.getXY = function() {
    return [this.x, this.y];
  };
};
var Rectangle = function() {
  Shape.call(this);
  this.getXY = function() {
    return [this.x, this.y];
  };
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle.prototype;

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle.prototype;

var Group = function() {
  this.list = [];
  this.add = function(shape) {
    this.list.push(shape);
  };
  this.move = function(x, y) {
    this.list.map(function(item) {
      item.move(x, y);
    });
  };
};

var c1 = new Circle();
c1.move(10, 10);
console.log(c1.getXY());

var c2 = new Circle();
c2.move(100, 30);
console.log(c2.getXY());

var g1 = new Group();
g1.add(c1);
g1.add(c2);

var c3 = new Circle();
c3.move(50, 50);
console.log(c3.getXY());

var c4 = new Circle();
c4.move(150, 80);
console.log(c4.getXY());

var g2 = new Group();
g2.add(c3);
g2.add(c4);
g2.add(g1);

console.log(c1.getXY());
console.log(c2.getXY());
console.log(c3.getXY());
console.log(c4.getXY());

g2.move(100, 200);

console.log(c1.getXY());
console.log(c2.getXY());
console.log(c3.getXY());
console.log(c4.getXY());
