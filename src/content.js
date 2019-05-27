const amount = 100;
let x = undefined;
let y = undefined;
let count = 0;
let scrolling = false;

// window.addEventListener('onscroll', (event) => {
//   window.console.log('onscroll')
//   window.console.log(event)
// })

window.addEventListener('keyup', (event) => {
  x = undefined;
  y = undefined;
  count = 0;
  scrolling = false;
});

window.addEventListener('keydown', (event) => {
  if (event.preventDefault) {
    event.preventDefault();
  }

  let amount = 100;

  if (++count > 1) {
    amount = amount / 2;
  }

  if (x === undefined) {
    x = window.pageXOffset
  }
  if (y === undefined) {
    y = window.pageYOffset;
  }

  if (scrolling === false) {
    if (event.ctrlKey === false && event.keyCode) {
      scrolling = true;
      setTimeout((event) => { scrolling = false; }, 200);
    }
    if (event.ctrlKey === false) {
      switch (event.keyCode) {
        case 72: // h
          // window.scrollBy(10, 0);
          window.pageXOffset <= x && window.scroll({
            left: x = (x + amount),
            // left: window.pageXOffset - amount,
            // left: window.scrollX - amount,
            behavior: "smooth"
          });
          break;
        case 74: // j
          // window.scrollBy(0, 10);
          window.pageYOffset >= y && window.scroll({
            top: y = (y + amount),
            // top: window.pageYOffset + amount,
            // top: window.scrollY + amount,
            behavior: "smooth"
          });
          break;
        case 75: // k
          // window.scrollBy(0, -10);
          window.pageYOffset <= y && window.scroll({
            top: y = (y - amount),
            // top: window.pageYOffset - amount,
            // top: window.scrollY - amount,
            behavior: "smooth"
          });
          break;
        case 76: // l
          // window.scrollBy(-10, 0);
          window.pageXOffset >= x && window.scroll({
            left: x = (x + amount),
            // left: window.pageXOffset + amount,
            // left: window.scrollX + amount,
            behavior: "smooth"
          });
          break;
        default:
          // window.console.log('?');
          break;
      }
    }
  }
});
