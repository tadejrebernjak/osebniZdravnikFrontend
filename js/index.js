var offset1 = document.getElementById('offset1');
var offset2 = document.getElementById('offset2');
let done1 = false;
let done2 = false;

window.onscroll = function() {
  if (!done1)
    done1 = check1();
  if (!done2)
    done2 = check2();
};

function check1() {
  offset1.style.transform = checkVisible(offset1) ? 'translateX(0)' : 'translateX(' + window.innerWidth / 2 + 'px)';
  offset1.style.opacity = checkVisible(offset1) ? '1' : '0';
  let done1 = checkVisible(offset1) ? true : false;
  return done1;
}

function check2() {
  offset2.style.transform = checkVisible(offset2) ? 'translateX(0)' : 'translateX(' + -window.innerWidth / 2 + 'px)';
  offset2.style.opacity = checkVisible(offset2) ? '1' : '0';
  let done2 = checkVisible(offset2) ? true : false;
  return done2;
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 150 || rect.top - viewHeight >= -150);
}