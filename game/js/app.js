var inicio  = () =>{
	let c = document.getElementById("tablero");
	let ctx = c.getContext("2d");

	function paint_interval(limit, time){

		let counter = 0;

		let paint_arrow = setInterval(function(){
			usuario(counter)
			if (mov[counter]) 
			{
				counter++
			}
			if(counter == limit){
				clearInte1rval(paint_arrow)
				counter = 0;
			}
			
		}, time * 500 );

	}

	//Creando Usuario
	function usuario(i){
		camino();
		ctx.beginPath();
    ctx.moveTo(155+(i*40),240);
    ctx.lineTo(185+(i*40),250);
    ctx.lineTo(155+(i*40),260);
    ctx.fillStyle='black';
		ctx.fill();
	}

	//Creando Camino
	function camino(){
		for(let i = 0 ; i < 6 ; i++)
		{
			const x = 150;
			let x_i = i*40;
			let sum = x + x_i + 40;



			var rectXPos = x+x_i;
			var rectYPos = 230;
			var rectWidth = 40;
			var rectHeight = 40;

			drawBorder(rectXPos, rectYPos, rectWidth, rectHeight)

			ctx.fillStyle='#FFF';
			ctx.fillRect(rectXPos, rectYPos, rectWidth, rectHeight);

			function drawBorder(xPos, yPos, width, height, thickness = 1)
			{
  			ctx.fillStyle='#000';
  			ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
			}
		}	
	}
	

	let mov = [true,true,true,true,true]

	camino();
	paint_interval(6,1)
	

}
inicio();


 	//else {
			//alert("perdistes :(")
		//}