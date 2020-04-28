/**
 * Structural Patterns
 */

/**
 * Adapter Pattern
 */

/**
 * https://refactoring.guru/design-patterns/adapter
 * for better understanding use - https://quokkajs.com/
 */

//  Value Conversion is the best example of Adaptor Pattern
/**
 * Celcius to Degree
 * XML to JSON
 * ORMs - Query for any DB
 * Not excatly but middlewares are also a type of adaptor pattern
 */

/**
 * A Class used to return TopSpeed of a Car in miles/hour in US.
 * Same code need to be used in Uk as Km/hrs
 */

var Car = function(speed) {
  this.model = "";
  this.speed = speed;
  this.getSpeed = function() {
    return this.speed;
  };
};

var CarInUK = function(speed) {
  Car.call(this, speed);
  var inKM_PH = function(speed) {
    return speed * 20;
  };
  this.getSpeed = function() {
    return inKM_PH(this.speed);
  };
};

CarInUK.prototype = Object.create(Car);
CarInUK.prototype.constructor = CarInUK.prototype;

var car1 = new Car(120);
car1;
console.log(car1.getSpeed());

var car2 = new CarInUK(120);
console.log(car2.getSpeed());

/**
 * Use case: Request from different source
 */

var fetch = (function() {
  var fetchUsingAJAX = function() {
    return "data from AJAX";
  };
  var fetchUsingSockets = function() {
    return "data from Sockets";
  };
  var fetchUsingMQTT = function() {
    return "data from MQTT";
  };
  return function(type) {
    switch (type) {
      case "ajax":
        return fetchUsingAJAX();
      case "sockets":
        return fetchUsingSockets();
      case "mqtt":
        return fetchUsingMQTT();
    }
  };
})();

var result = fetch("ajax");
result;

var result = fetch("sockets");
result;

var result = fetch("mqtt");
result;

/**
 * Save to localDB vs Save To MySQL using API
 * Detect network conenction status and decide where to save data.
 */

var isConnected = false;
var save = function(isConnected) {
  var saveTOLocal = function() {
    return "saved to locaDB";
  };
  var saveToOnlineStorage = function() {
    return "saved to online db";
  };
  if (!isConnected) {
    return saveTOLocal();
  } else {
    return saveToOnlineStorage();
  }
};

var res = save(false);
res;

var res = save(true);
res;

/**
 * Reading different file format with
 * same interface.
 */

//  Read a file
var File = function() {
  this.read = function() {
    return "file data";
  };
};

// Zip a file
var Zip = function(file) {
  this.zip = file;
  this.unzip = function() {
    // unzip file;
    return this.zip;
  };
};

var f1 = new File();
console.log(f1.read());

var z1 = new Zip(f1);
console.log(z1.unzip());
 console.log(z1.unzip().read())

// Unzip and Read File
var zipAdaptor = function(zip) {
  this.read = function() {
    return zip.unzip().read();
  };
};

zipAdaptor.prototype = Object.create(File);
zipAdaptor.prototype.constructor = zipAdaptor.prototype;

var zp = new zipAdaptor(z1);
console.log(zp.read());

/**
 * Primus JS/ Socket.io internally use AJAX if some legacy OS version/Browser version
 * does nto support Sockets. They internally use adapter pattern.
 */
