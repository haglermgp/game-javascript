// var inicio  = () =>{
// 	let c = document.getElementById("Canvas");
// 	let ctx = c.getContext("2d");
// 	var startX = 170;
// 	var startY = 250;
// 	var degrees=0;
//
//
// 	//Creando Camino
// 	(function camino(){
// 		for(let i = 0 ; i < 6 ; i++)
// 		{
// 			const x = 150; //eje x
// 			let x_i = i*40;
// 			let sum = x + x_i + 40;
//
// 			var rectXPos = x+x_i;
// 			var rectYPos = 230;
// 			var rectWidth = 40;
// 			var rectHeight = 40;
//
// 			drawBorder(rectXPos, rectYPos, rectWidth, rectHeight) //this function paint the border on the map
// 			//rectXPos >>
//
// 			ctx.fillStyle='#FFF';
// 			ctx.fillRect(rectXPos, rectYPos, rectWidth, rectHeight);
//
// 			function drawBorder(xPos, yPos, width, height, thickness = 1)
// 			{
// 				ctx.fillStyle='#000';
// 				ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
// 			}
// 		}
// 	})()
//
// 	// NOTE: FUNCTIONS COMANDS
//
// 	//ROTATE
//
//
// 	function printUser(color, startX, startY, degrees) {
//
// 			// first save the untranslated/unrotated context
// 			ctx.save();
//
// 			ctx.beginPath();
// 			// move the rotation point to the center of the rect
// 			ctx.translate(startX , startY );
// 			// rotate the rect
// 			ctx.rotate(degrees * Math.PI / 180);
//
// 			// draw the rect on the transformed context
// 			// Note: after transforming [0,0] is visually [x,y]
// 			// so the rect needs to be offset accordingly when drawn
// 			ctx.moveTo(0, 0); //(x+5 , y+5) direccion
// 			ctx.lineTo(-15, -15); //(x+5, y+35) esquina base 2 derecha
// 			ctx.lineTo(15, 0); //(x+35, y+20) esquina direccion izquierda
// 			ctx.lineTo(-15, 15); //(x+35, y+20) esquina direccion izquierda
// 			ctx.lineTo(-15, -15); //(x+35, y+20) esquina direccion izquierda
//
//
//
// 			ctx.fillStyle = color;
// 			ctx.fill();
//
// 			// restore the context to its untranslated/unrotated state
//
// 	}
//
// 	function rotateUser(direction) {
// 		if (direction == 'left') {
// 			degrees -= 90 // decrease cuantity of degrees, so, the direction of triangle
// 			console.log("es left" + degrees);
// 			return degrees = ((degrees <= -360) ? 0 : degrees) // this conditional reestart the value of degrees if is less than -360
// 			// console.log('llego a -360 y reestart a 0:' + degrees);
// 		}else if (direction == 'right') {
// 			degrees += 90 // increase cuantity of degrees, so, the direction of triangle
// 			return degrees = ((degrees >= 360) ? 0 : degrees) // this conditional reestart the value of degrees if is more than +360
// 			// console.log('llego a +360 y reestart a 0:' + degrees);
// 		}
//
// 		//this part reload initial degrees value when the rotation pass by position intial
// 	}
//
// 	//function that makes moving on objectUser
// 	function moveUser(degrees) {
//
// 	   //MOVEMENT IN X
// 		if (degrees == 0) {
// 			return startX += 40
// 		}else if ( (degrees == -180) || (degrees == 180) ) {
// 			return startX -= 40
// 		}else {
// 		 startX
// 		}
//
// 	   //MOVEMENT IN Y
// 		if ((degrees == 90) || (degrees == -270)) {
// 		 return startY += 40
// 		}else if ((degrees == 270) || (degrees == -90) ) {
// 		 return startY -= 40
// 		}else {
// 		 startY
// 		}
//
// 	}
//
//
//
// 	function objectUser() {
// 		this.printUser = printUser
// 		this.rotateUser = rotateUser
// 		this.moveUser = moveUser
// 	}
//
// 	var User = new objectUser()
//
//
//
//
//
// 	//CONTROLS
//
// 	function programList() {
// 	  this.add = add
// 	  this.datastore = new Array()
// 	  this.find = find
// 	  this.remove = remove
// 	  this.showAll = showAll
// 	  this.clear = clear
// 	  this.count = count
// 		// this.Rotate = Rotate
// 		// this.Move = Move
// 	}
//
// 	function add(key, value) {
// 	  this.datastore[key] = value
// 	}
//
// 	function find(key) {
// 	  return this.datastore[key]
// 	}
//
// 	function remove(key) {
// 	  delete this.datastore[key] // >> the DELETE operator removes a property from an object
// 	}
//
// 	function clear() {
// 	  for (var key in this.datastore) {
// 	    if (this.datastore.hasOwnProperty(key)) {
// 	      delete this.datastore[key]
// 	    }
// 	  }
// 	}
//
// 	function showAll() {
//
// 	  for (var key of this.datastore) {
// 	    console.log("the key are sort >> " + key + " >> the value " + this.datastore[key]);
// 	  }
// 	}
//
// 	function count() {
// 	  var n = 0
// 	  for (var key in this.datastore) {
// 	    ++n
// 	  }
// 	  return n
// 	}
//
// 	//this List ad a dictionary save all the steeps that we want the objectUser to do
// 	var programStack = new programList()
//
// 			// console.log(programStack.count());
//
// 	var buttonLeft = document.getElementById('dirLeft'),
// 			buttonRight = document.getElementById('dirRight'),
// 			buttonMove = document.getElementById('moveOn'),
// 			buttonStart = document.getElementById('start');
//
// 	//declare watchButtons, self-invoking function, that watch what button has been clicked
// 	(function watchButtons() {
// 		var countKey = programStack.count()
// 		var row = document.getElementById('listButtons')
//
// 		//directions
// 		buttonLeft.addEventListener('click', function () {
// 			programStack.add(countKey, 'left')
// 			let rowCell = row.insertCell(-1)
// 			rowCell.innerHTML = '<li><button> icoLeft </button></li>'
// 			++countKey
// 		});
//
// 		buttonRight.addEventListener('click', function () {
// 			programStack.add(countKey, 'right')
// 			let rowCell = row.insertCell(-1)
// 			rowCell.innerHTML = '<button> icoRight </button>'
// 			++countKey
// 		});
//
// 		//move
// 		buttonMove.addEventListener('click', function () {
// 			programStack.add(countKey, 'degrees')
// 			let rowCell = row.insertCell(-1)
// 			rowCell.innerHTML = '<button> Move </button>'
// 			++countKey
// 		});
//
//
// 		buttonStart.addEventListener('click', function () {
//
// 			if (programStack.count()>0) {
// 				for (var i = 0; i < programStack.count(); i++) {
//
//
// 					switch (programStack.datastore[i]) {
// 						case 'left':
// 							console.log('aplicaras Rotate(left)');
// 							User.rotateUser('left')
// 							break;
// 						case 'right':
// 							console.log('entraste right');
// 							user.rotateUser('right')
// 						case 'degrees':
// 							console.log('entraste move');
// 							User.moveUser(degrees)
// 							break;
// 						default:
// 					}
// 				}
//
// 			}else {
// 				console.log('Not have programStack');
// 			}
//
//
//
// 		})
//
// 	})()
//
// 	console.log('degres ' +degrees);
//
//
//
//
// 	//whit this code, we debugger if the programStack are save all the function we passed on
// 	// buttonLeft.addEventListener('click', function () {
// 	// 	console.log(programStack);
// 	// })
//
//
//
//
// 	User.printUser('red', startX, startY, degrees)
//
// }
// inicio();
