var inicio  = () =>{
	let c = document.getElementById("Canvas");
	let ctx = c.getContext("2d");

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

	//ROTATE

	var startX = 240;
	var startY = 240;

	var a = -20;
	var b = -20;

	var degrees=0;

	function ObjectUser(color, x, y, a, b) {

			// first save the untranslated/unrotated context
			ctx.save();

			ctx.beginPath();
			// move the rotation point to the center of the rect
			ctx.translate(x - a/2 , y - b/2);
			// rotate the rect
			ctx.rotate(degrees * Math.PI / 180);

			// draw the rect on the transformed context
			// Note: after transforming [0,0] is visually [x,y]
			//       so the rect needs to be offset accordingly when drawn
			ctx.moveTo(a+5, b+5); //(x+5 , y+5) esquina base 1 derecha
			ctx.lineTo(a+5, b+35); //(x+5, y+35) esquina base 2 izquierda
			ctx.lineTo(a+35, b+20); //(x+35, y+20) esquina direccion right

			ctx.fillStyle = color;
			ctx.fill();

			// restore the context to its untranslated/unrotated state
			ctx.restore();

	}

	function Rotate(direction) {
		if (direction == 'left') {
			degrees -= 90 // decrease cuantity of degrees, so, the direction of triangle
			console.log("es left" + degrees);
			return degrees = ((degrees <= -360) ? 0 : degrees) // this conditional reestart the value of degrees if is less than -360
			// console.log('llego a -360 y reestart a 0:' + degrees);
		}else if (direction == 'right') {
			degrees += 90 // increase cuantity of degrees, so, the direction of triangle
			return degrees = ((degrees >= 360) ? 0 : degrees) // this conditional reestart the value of degrees if is more than +360
			// console.log('llego a +360 y reestart a 0:' + degrees);
		}

		//this part reload initial degrees value when the rotation pass by position intial
	}

	//function that makes moving on objectUser
	function Move(degrees) {

	//MOVEMENT IN X
		if (degrees == 0) {
			startX += 40
		}else if ( (degrees == -180) || (degrees == 180) ) {
			startX -= 40
		}else {
			startX += 0
		}

	//MOVEMENT IN Y
		if ((degrees == 90) || (degrees == -270)) {
		 startY = startY + 40
		}else if ((degrees == 270) || (degrees == -90) ) {
		 startY = startY - 40
		}else {
		 startY += 0
		}

	}

	//CONTROLS

	function programList() {
	  this.add = add
	  this.datastore = new Array()
	  this.find = find
	  this.remove = remove
	  this.showAll = showAll
	  this.clear = clear
	  this.count = count
	}

	function add(key, value) {
	  this.datastore[key] = value
	}

	function find(key) {
	  return this.datastore[key]
	}

	function remove(key) {
	  delete this.datastore[key] // >> the DELETE operator removes a property from an object
	}

	function clear() {
	  for (var key in this.datastore) {
	    if (this.datastore.hasOwnProperty(key)) {
	      delete this.datastore[key]
	    }
	  }
	}

	function showAll() {

	  for (var key of this.datastore) {
	    console.log("the key are sort >> " + key + " >> the value " + this.datastore[key]);
	  }
	}

	function count() {
	  var n = 0
	  for (var key in this.datastore) {
	    ++n
	  }
	  return n
	}

	//this List ad a dictionary save all the steeps that we want the objectUser to do
	var programStack = new programList()

			console.log(programStack.count());

	var buttonLeft = document.getElementById('dirLeft'),
			buttonRight = document.getElementById('dirRight'),
			buttonMove = document.getElementById('moveOn');

	//declare watchButtons, self-invoking function, that watch what button has been clicked
	(function watchButtons() {
		var countKey = programStack.count()

		//directions
		buttonLeft.addEventListener('click', function () {
			programStack.add(countKey, 'left')
			++countKey
		});

		buttonRight.addEventListener('click', function () {
			console.log('add one right');
			programStack.add(countKey, 'right')
			++countKey
		});

		//move
		buttonMove.addEventListener('click', function () {
			console.log('add one move');
			programStack.add(countKey, 'degrees')
			++countKey
		});

	})()

	//whit this code, we debugger if the programStack are save all the function we passed on 
	// buttonLeft.addEventListener('click', function () {
	// 	console.log(programStack);
	// })

	camino();


	ObjectUser("red", startX, startY, a, b);


}
inicio();
