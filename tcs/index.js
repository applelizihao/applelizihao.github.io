/** @type {HTMLCanvasElement} */
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let blockSize = 10;
var T1;
class Block {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	draw() {
		ctx.fillStyle = "blue"
		ctx.fillRect(this.x, this.y, blockSize, blockSize)
	}
}
class Snake {
	constructor() {
		this.direction = direction;
		this.corporeity = [
			new Block(20, 0),
			new Block(10, 0),
			new Block(0, 0),
		]
	}
	draw() {
		this.corporeity.forEach(element => {
			element.draw();
		});
	}
	move() {
		let head = this.corporeity[0];
		if (this.direction === "right" && direction === "left") {
			direction='right'
		}
		if (this.direction === "left" && direction === "right") {
			direction='left'
		}
		if (this.direction === "up" && direction === "down") {
			direction='up'
		}
		if (this.direction === "down" && direction === "up") {
			direction='down'
		}
		this.direction = direction;
		this.directionFn(this.direction);
	}
	directionFn(direction) {
		let corporeity = this.corporeity.length
		let head = this.corporeity[0];
		let newHead;

		switch (direction) {
			case 'left':
				newHead = new Block(head.x - 10, head.y);
				break;
			case 'right':
				newHead = new Block(head.x + 10, head.y);
				break;
			case 'up':
				newHead = new Block(head.x, head.y - 10);
				break;
			case 'down':
				newHead = new Block(head.x, head.y + 10);
				break;
		}
		for (let i = 0; i < corporeity; i++) {
			if (newHead.x === this.corporeity[i].x && newHead.y === this.corporeity[i].y) {
				let music = new Music("baozha.wav")
				music.run()
				gameOver();
				alert('游戏结束')
				clearInterval(T1)
				return;
			}
		}
		if (this.check(newHead) === true) {
			return
		}
		this.corporeity.unshift(newHead);
		this.corporeity.pop();
	}
	check(newHead) {
		if (newHead.x > canvas.width - 10 || newHead.x < 0 || newHead.y > canvas.height - 10 || newHead.y < 0) {
			let music = new Music("baozha.wav")
			music.run();
			gameOver();
			alert('游戏结束')
			clearInterval(T1)
			return true
		}
		//吃到食物
		if (newHead.x === food.x && newHead.y === food.y) {
			let music = new Music("a.wav")
			let head = this.corporeity[0];
			let newHead;
			switch (direction) {
				case 'left':
					newHead = new Block(head.x - 10, head.y);
					break;
				case 'right':
					newHead = new Block(head.x + 10, head.y);
					break;
				case 'up':
					newHead = new Block(head.x, head.y - 10);
					break;
				case 'down':
					newHead = new Block(head.x, head.y + 10);
					break;
			}
			// debugger;
			fenshu++;
			fenshuDiv.innerText = fenshu;
			this.corporeity.unshift(newHead);
			food.rand();
			food.draw();
			music.run()

		}
	}
}

class Music {
	constructor(src) {
		this.src = src
	}
	run() {
		let Music = document.createElement('audio');
		Music.src = this.src
		Music.play();
		Music.onended = function() {
			this.remove();
		}
		document.body.append(Music);
	}
}
class Food {
	constructor() {
		this.x = randFood()[0];
		this.y = randFood()[1];
		this.foodArr = [
			this.x, this.y
		]
	}
	draw() {
		ctx.beginPath()
		ctx.fillStyle = "orange"
		ctx.fillRect(this.x, this.y, blockSize, blockSize)
		ctx.closePath()
	}
	rand() {
		this.x = randFood()[0];
		this.y = randFood()[1];
	}
}

let gameOver = () => {
	let x = [fenshu, Top1, Top2, Top3].sort(
		function(a, b) {
			return b - a;
		}
	)
	console.log(window.localStorage.Top1 = x[0])
	console.log(window.localStorage.Top2 = x[1])
	console.log(window.localStorage.Top3 = x[2])
}
let randFood = () => {
	let randX = Math.ceil(Math.random() * canvas.width / 10) * 10
	let randY = Math.ceil(Math.random() * canvas.height / 10) * 10
	while (randX <= 5 || randY <= 5 || randX >= canvas.width - 5 || randY >= canvas.height - 5) {
		randX = Math.ceil(Math.random() * canvas.width / 10) * 10
		randY = Math.ceil(Math.random() * canvas.height / 10) * 10
	}
	snake.corporeity.forEach(element => {
		while (element.x === randX && element.y === randY) {
			randX = Math.ceil(Math.random() * canvas.width / 10) * 10
			randY = Math.ceil(Math.random() * canvas.height / 10) * 10
		}
	});
	return [randX, randY]
}
let direction = 'right';

let directionCode = {
	37: 'left',
	38: 'up',
	39: 'right',
	40: 'down'
}

window.onkeydown = (event) => {
	if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
		direction = directionCode[event.keyCode]
	}
};

let snake = new Snake();
let food = new Food()
food.draw();
//初始化
snake.draw();

T1 = setInterval(() => {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	snake.move();
	snake.draw();
	food.draw();
}, 100);

let {
	Top1Div,
	Top2Div,
	Top3Div,
	fenshuDiv
} = window
let {
	Top1,
	Top2,
	Top3,
	fenshu
} = window.localStorage;
(TopFn = () => {
	if (Top1 === undefined) {
		Top1 = 0
	}
	if (Top2 === undefined) {
		Top2 = 0
	}
	if (Top3 === undefined) {
		Top3 = 0
	}
	fenshu = 0;
	Top1Div.innerText = Top1;
	Top2Div.innerText = Top2;
	Top3Div.innerText = Top3;
	fenshuDiv.innerText = fenshu;
})()

let stop = document.querySelector('.stop');

stop.onclick = (stopFn = () => {
	
	var count = 0
	return function() {
		count++;
		console.log(count)
		if (count % 2 === 0) {
			T1 = setInterval(() => {
				ctx.clearRect(0, 0, canvas.width, canvas.height)
				snake.move();
				snake.draw();
				food.draw();
			}, 100)

		} else {
			clearInterval(T1)
		}
		return count
	}
})();
