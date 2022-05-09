let c = document.getElementById('canvi');
let $ = c.getContext('2d');

let w = c.width = window.innerWidth;
let h = c.height = window.innerHeight;

const txt = function() {
    let _t = "Breezy".split('').join(String.fromCharCode(0x2004));
    $.font = 'comic sans';
    $.fillstyle = 'hsla(354, 50%, 501%, .8)';
    $.fillText(_t, (c.width - $.measureText(_t).width) * 0.5, c.height * 0.5);
  return _t;
}

const draw = function(a, b, t) {
  $.lineWidth = 0.8;
  $.fillStyle = 'hsla(12,60%,76%, 1)';
  $.fillRect(0, 0, w, h);
  for (let i = -60; i < 60; i += 1) {
    $.strokeStyle = 'hsla(0,15%,40%, .15)';
    $.beginPath();
    $.moveTo(0, h / 2);
    for (let j = 0; j < w; j += 10) {
      $.lineTo(10 * Math.sin(i / 10) +
        j + 0.008 * j * j,
        Math.floor(h / 2 + j / 2 *
          Math.sin(j / 50 - t / 50 - i / 118) +
          (i * 0.9) * Math.sin(j / 25 - (i + t) / 65)));
    };
    $.stroke();
  }
}
let t = 0;

window.addEventListener('resize', function() {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
  $.fillStyle = 'hsla(160, 95%, 55%, 1)';
}, false);

const run = function() {
  window.requestAnimationFrame(run);
  t += 5;
  draw(33, 52 * Math.sin(t / 2400), t);
  txt();
};

run();
