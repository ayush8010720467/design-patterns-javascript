/**
 * Structural Patterns
 */

/**
 * Bridge Pattern
 */

/**
 * Problem as explained under Bridge pattern in
 * https://refactoring.guru/design-patterns/bridge
 * for better understanding use - https://quokkajs.com/
 */

/**
 * Composition over Inheritance.
 * Link between two diffrent classes
 */

 
/**
 * Remote Control Class
 */
var RemoteControl = function(device) {
    this.setVolumne = function() {
        return device.setVolumne()
    }
    this.setChannel = function() {
       return device.setChannel()
   }
}

var AdvanceRemoteControl = function(device) {
   RemoteControl.call(this, device)
   this.voiceSearch = function() {
       return 'voice search'
   }
}
AdvanceRemoteControl.prototype = Object.create(RemoteControl)
AdvanceRemoteControl.prototype.constructor = AdvanceRemoteControl.prototype

/**
 * Device that can be controlled by a Remote Control
 */

var Device = function() {
   this.setVolumne = function() {
       return 'volme set'
   }
   this.setChannel = function() {
      return 'channel set'
  }
}

var TV = function() {
   this.setVolumne = function() {
       return 'TV volume set'
   }
   this.setChannel = function() {
      return 'TV channel set'
  }
}

var Radio = function() {
   this.setVolumne = function() {
       return 'Radio volume set'
   }
   this.setChannel = function() {
      return 'Radio channel set'
  }
}

TV.prototype = Object.create(Device)
TV.prototype.constructor = TV.prototype
Radio.prototype = Object.create(Device)
Radio.prototype.constructor = Radio.prototype

var samsung  = new TV();
var remote = new AdvanceRemoteControl(samsung)
console.log(remote.setChannel())
console.log(remote.setVolumne())
console.log(remote.voiceSearch())

var starRadio  = new Radio();
var remote = new RemoteControl(starRadio)
console.log(remote.setChannel())
console.log(remote.setVolumne())
// console.log(remote.voiceSearch())

/**
 * A Shape Class
 */
var Circle = function() {
   this.color = ''
   this.setColor = function(color) {
       this.color = color
   } 
   this.getColor = function() {
       return this.color
   } 
}

/**
 * A Shape Class
 */
var Square = function() {
   this.color = ''
   this.setColor = function(color) {
       this.color = color
   } 
   this.getColor = function() {
       return this.color
   } 
}

/**
 * A Color Class
 */
var Red = function(shape) {
   this.setColor = function() {
       shape.setColor('red')
   }
   this.getColor = function() {
       return shape.color
   } 
   this.setColor()
}

/**
 * A Color Class
 */
var Blue = function(shape) {
   this.setColor = function() {
       shape.setColor('blue')
   } 
   this.getColor = function() {
       return shape.color
   }
   this.setColor()
}

var c1 = new Circle()
var c2  = new Circle()
var s1 = new Square()

// Create a Red Circle
var redC1 = new Red(c1)
// Create a Blue Circle
var blueC2 = new Blue(c2)
// Create a Blue Square
var blueS1 = new Blue(s1)


console.log(redC1.getColor())
console.log(blueC2.getColor())
console.log(s1.getColor())

