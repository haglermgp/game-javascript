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

	function Move() {

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
		this.head = new Node('head')
		this.head.next = this.head
		this.find = find
		this.insert = insert
		this.remove = remove
		this.display = display
		this.findPrevious = findPrevious
		this.findLast = findLast
		this.dispReverse = dispReverse
	}

	function Node(element) {
		this.element = element
		this.next = null
		this.previous = null
	}

	function find(item) {
		var currNode = this.head
		while (currNode.element != item){
			currNode = currNode.next
		}
		return currNode
	}

	function insert(newElement, item) {
		var newNode = new Node(newElement)
	  var current = this.find(item)

	  newNode.next = current.next
	  newNode.previous = current
	  current.next = newNode

	}

	function display() {
	  var currNode = this.head
	  while (!(currNode.next == null)) {
	    console.log(currNode.next.element);
	    currNode = currNode.next
	  }
	}

	function remove(item) {
	  var currNode = this.find(item)
	  if (!(currNode.next == null)) {
	    currNode.previous.next = currNode.next // this instance to himself through previous.next property
	    currNode.next.previous = currNode.previous // this same
	    currNode.next = null
	    currNode.previous = null
	  }
	}

	var programStack = new programList()

	



	var buttonLeft = document.getElementById('dirLeft'),
			buttonRight = document.getElementById('dirRight'),
			buttonMove = document.getElementById('moveOn');
			buttonLeft.addEventListener('click', function () {
			});


	camino();

	ObjectUser("red", startX, startY, a, b);


}
inicio();
