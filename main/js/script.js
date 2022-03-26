function timer(i) {
	console.log(i);
	if(i < 60) {
		setTimeout(timer, 1000, ++i);
	} else{
		console.log(0)
	}
}

setTimeout(timer, 1000, 0);



