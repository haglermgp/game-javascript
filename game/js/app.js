var inicio  = () =>{
	let c = document.getElementById("Canvas");
	let ctx = c.getContext("2d");

	//Creando Usuario

	// //USER DOWN
	// function usuario(){
	// 	camino();
	// 	ctx.beginPath();
	// 	ctx.moveTo(155,235); //(x+5 , y+5) esquina base 1 derecha
	// 	ctx.lineTo(185,235); //(x+35, y+5) esquina base 2 izquierda
	// 	ctx.lineTo(170,265); //(x+20, y+35) esquina direccion down
	// 	ctx.fillStyle='black';
	// 	ctx.fill();
	// }

	// //USER UP
	// function usuario(){
	// 	camino();
	// 	ctx.beginPath();
	// 	ctx.moveTo(185,265); //(x+35 , y+35) esquina base 1 derecha
	// 	ctx.lineTo(155,265); //(x+5, y+35) esquina base 2 izquierda
	// 	ctx.lineTo(170,235); //(x+20, y+5) esquina direccion up
	// 	ctx.fillStyle='black';
	// 	ctx.fill();
	// }

	// //USER RIGHT
	function usuario(){
		camino();
		ctx.beginPath();
		ctx.moveTo(155,235); //(x+5 , y+5) esquina base 1 derecha
		ctx.lineTo(155,265); //(x+5, y+35) esquina base 2 izquierda
		ctx.lineTo(185,250); //(x+35, y+20) esquina direccion right
		ctx.fillStyle='black';
		ctx.fill();
	}

	// //USER LEFT
	// function usuario(){
	// 	camino();
	// 	ctx.beginPath();
	// 	ctx.moveTo(185,235); //(x+35 , y+5) esquina base 1 derecha
	// 	ctx.lineTo(185,265); //(x+35, y+35) esquina base 2 izquierda
	// 	ctx.lineTo(155,250); //(x+5, y+20) esquina direccion left
	// 	ctx.fillStyle='black';
	// 	ctx.fill();
	// }

	//Creando Camino
	function camino(){
		for(let i = 0 ; i < 6 ; i++)
		{
			const x = 150; //eje x
			let x_i = i*40;
			let sum = x + x_i + 40;

			var rectXPos = x+x_i;
			var rectYPos = 230;
			var rectWidth = 40;
			var rectHeight = 40;

			drawBorder(rectXPos, rectYPos, rectWidth, rectHeight) //this function paint the border on the map
			//rectXPos >>

			ctx.fillStyle='#FFF';
			ctx.fillRect(rectXPos, rectYPos, rectWidth, rectHeight);

			function drawBorder(xPos, yPos, width, height, thickness = 1)
			{
				ctx.fillStyle='#000';
				ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
			}
		}
	}

	// NOTE: FUNCTIONS COMANDS



	camino();
	usuario()
}
inicio();


 	//else {
			//alert("perdistes :(")
		//}
