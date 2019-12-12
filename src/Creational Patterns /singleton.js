/**
 *
 * In plain words:
 * Ensures that only one object of a particular class is ever created.
 *
 * Wikipedia says:
 * In software engineering, the singleton pattern is a software design pattern
 * that restricts the instantiation of a class to one object.
 * This is useful when exactly one object is needed to coordinate actions
 * across the system.
 *
 * Real world example:
 *
 * There can only be one president of a country at a time.
 * The same president has to be brought to action, whenever duty calls.
 * President here is singleton.
 *

 */

var Singleton = (function(name) {
    let instance = null;
    var President = function(name) {
      this.name = name;
      this.superPowers = true;
      this.canControlNation = function() {
        return true;
      };
    };
  
    var createInstance = function(name) {
      instance = new President(name);
    };
    return {
      getInstance: function(name) {
        if (!instance) {
          createInstance(name);
        }
        return instance;
      }
    };
  })();
  
  Singleton;
  var me = Singleton.getInstance("harpreet");
  me;
  
  var me2 = Singleton.getInstance("harpreet singh");
  me2;
  
  console.log("same instance ? ", me == me2);
  
  /**
   * Another way of implementation
   */
  
  var fn = function() {
    if (fn.prototype.static) {
      return fn.prototype.static;
    }
    // Note: this is how instance is being saved
    fn.prototype.static = this;
  
    this.Foo = function() {
      // ...
    };
  };
  
  var a = new fn();
  var b = fn();
  
  console.log(a === b);
  
  // Note: fn and new fn() returning the same instance
  console.log(new fn() === fn());
  