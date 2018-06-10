var my_canvas = $('#plotno');

my_canvas.width = 800;
my_canvas.height = 480;

var ctx = my_canvas[0].getContext("2d");

window.onkeydown = Control;

var move_x = 0;
var move_y = 0;
var x = my_canvas.width/2;
var y = my_canvas.height/2;
var r = 15;

function Draw(){
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2*MathPI);
	ctx.fillStyle = 'purple';
	ctx.fill();
}

Draw();