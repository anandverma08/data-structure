<input type="text" onkeyup="typed()">

function searched() {
    console.log("some key pressed")
  }
  
  
  function throttle(fn, timer) {
    var called = false;
    return function() {
      if (!called) {
        fn();
        called = true;
        setTimeout(function() {
          called = false;
        }, timer);
      }
    };
  }
  
  
  var typed = this.throttle(this.searched, 1400);