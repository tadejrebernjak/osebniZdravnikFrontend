var offset1 = document.getElementById('offset1');
var offset2 = document.getElementById('offset2');

window.onscroll = function() {
    offset1.style.transform = checkVisible(offset1) ? 'translateX(0)' : 'translateX(' + window.innerWidth / 2 + 'px)';
    offset1.style.opacity = checkVisible(offset1) ? '1' : '0';
    offset2.style.transform = checkVisible(offset2) ? 'translateX(0)' : 'translateX(' + -window.innerWidth / 2 + 'px)';
    offset2.style.opacity = checkVisible(offset2) ? '1' : '0';
};

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 150 || rect.top - viewHeight >= -150);
}