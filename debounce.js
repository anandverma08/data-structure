<button onClick="clicked()">
Click Me
</button>


function buttonClicked() {
  console.log("clicked");
}

function debounce(fun, interval) {
  let timer = 0;
  return function(){
   clearTimeout(timer);
    timer = setTimeout(() => {
      fun();
    }, interval);
  }
}
const clicked = this.debounce(this.buttonClicked, 300);