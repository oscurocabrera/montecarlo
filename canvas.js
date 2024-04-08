function line(x1,y1,x2,y2){
	x1=+x1;
	y1=+y1;
	x2=+x2;
	y2=+y2;
var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();

}

function circulo(){
	var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(250, 250, 250, 0, 2 * Math.PI);
ctx.stroke();

}
function TotalGotas(gotas){
		
		document.getElementById("gotas").value= gotas;

}

function GotasDentro(Gotas){
		
		document.getElementById("gotas_dentro").value= Gotas;

}

function pi(TG,GDC){
		
		document.getElementById("pi").value= 4*parseInt(GDC)/parseInt(TG);

}

function drawCircle(posx,posy,size,color){
	var canvas = document.getElementById("canvas1");
	var context = canvas.getContext('2d');
	context.beginPath();
	context.fillStyle = color;
	context.strokeStyle="black";
	context.arc(posx, posy, size, 0, 2 * Math.PI, false);
	context.fill();
	context.stroke();

}

function MakeRandom(){
	var NumeroGotas = document.getElementById("gotas").value;
	var GotasDentroCirculo = document.getElementById("gotas_dentro").value;

	var recta =0;

	posx = Math.floor(Math.random() * 500);
	posy= Math.floor(Math.random() * 500);
	size=Math.floor(Math.random() * 20);
	if(posx>0||posy>0){
		
		
		NumeroGotas = parseInt(NumeroGotas)+1;
		
		recta = Math.sqrt(Math.pow(posx-250,2)+Math.pow(posy-250,2));

		if(recta<250){
			GotasDentroCirculo = parseInt(GotasDentroCirculo)+1;
			drawCircle(posx,posy,2,"blue");
		}else{

			drawCircle(posx,posy,2,"red");
		}


		

		}
		TotalGotas(String(NumeroGotas));
		GotasDentro(String(GotasDentroCirculo));
		pi(String(NumeroGotas),String(GotasDentroCirculo));
		circulo();
}

window.setInterval("MakeRandom()",10);