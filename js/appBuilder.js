   


    var canvas = document.getElementById("canvas");

// display a green box on the screen

 var displayCircle = function(){
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    var circle1 = new Path2D();
    circle.moveTo(205, 35);
    circle1.arc(100, 35, 25, 0, 2 * Math.PI);

    var circle = new Path2D();
    circle.moveTo(325, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(circle);
    ctx.stroke(circle1);
  }
}


//window.setTimeout(displayBox, 5000);