function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    square()

  }
}

function square(x1,y1,x2,y2) {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1, y2);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x2, y1);
    ctx.fill();
  }

}
