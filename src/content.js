const AMOUNT = 100;
const MIN = 50;
let amount = 100;
let x = undefined;
let y = undefined;
let count = 0;
let scrolling = false;

// window.addEventListener('scroll', (event) => {
//   window.console.log('scroll')
// })

window.addEventListener('keyup', (event) => {
  x = undefined;
  y = undefined;
  count = 0;
  scrolling = false;
  amount = 100;
});

window.addEventListener('keydown', (event) => {
  // if (event.preventDefault) {
  //   event.preventDefault();
  // }

  // if (++count > 1) {
  //   // amount = MIN;
  //   // amount = MIN + (AMOUNT / count);
  // }

  if (x === undefined) {
    x = window.pageXOffset
  }
  if (y === undefined) {
    y = window.pageYOffset;
  }

  // window.console.log({x, y, count, amount});

  if (scrolling === false) {
    if (event.ctrlKey === false && event.keyCode) {
      scrolling = true;
      setTimeout((event) => { scrolling = false; }, 100);
      // window.console.log(event);
    }
    if (event.target.localName !== 'body') {
      return false;
    }
    if (event.ctrlKey === false) {
      switch (event.keyCode) {
        case 72: // h
          // window.scrollBy(10, 0);
          event.preventDefault();
          x = window.pageXOffset - amount;
          // x = x - amount;
          window.requestAnimationFrame(() => {
            window.scrollTo({
              left: x,
              // left: window.pageXOffset + x,
              // left: window.pageXOffset - amount,
              // left: window.scrollX - amount,
              behavior: "smooth"
            });
          });
          break;
        case 74: // j
          // window.scrollBy(0, 10);
          event.preventDefault();
          y = window.pageYOffset + amount;
          // y = y + amount;
          window.requestAnimationFrame(() => {
          window.scrollTo({
            top: y,
            // top: window.pageYOffset + y,
            // top: window.pageYOffset + amount,
            // top: window.scrollY + amount,
            behavior: "smooth"
          });
          });
          break;
        case 75: // k
          // window.scrollBy(0, -10);
          event.preventDefault();
          y = window.pageYOffset - amount;
          // y = y - amount;
          window.requestAnimationFrame(() => {
          window.scrollTo({
            top: y,
            // top: window.pageYOffset + y,
            // top: window.pageYOffset - amount,
            // top: window.scrollY - amount,
            behavior: "smooth"
          });
          });
          break;
        case 76: // l
          // window.scrollBy(-10, 0);
          event.preventDefault();
          x = window.pageXOffset + amount;
          // x = x + amount;
          window.requestAnimationFrame(() => {
          window.scrollTo({
            left: x,
            // left: window.pageXOffset + x,
            // left: window.pageXOffset + amount,
            // left: window.scrollX + amount,
            behavior: "smooth"
          });
          });
          break;
        default:
          break;
      }
    }
  }
});
