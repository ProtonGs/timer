const hourValue = document.getElementById('hour')
const minValue = document.getElementById('min')
const secValue = document.getElementById('sec')

const startBtn = document.getElementById('start-btn')


let timerId = setInterval(() => countdown , 1000)

var x = 0


function countdown() {
	if (x < 3) {
		x++
		secValue.innerHTML ="0" + x 
	} else {

		setInterval(() => countdown() , 1000)
	}
}

function startBtnFunc() {
	console.log('lds')
	setInterval(() => countdown() , 1000)
}


startBtn.onclick = startBtnFunc



