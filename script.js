var likeElement = document.querySelector('.coreSpriteHeartOpen');
var nextElement = document.querySelector('.coreSpriteRightPaginationArrow');
var likeCount = 0;
var currentTimeout = 0;

function getRandomTimeout() {
	var baseTimeout = 5000
	var randTimeout = Math.random() * 5000 + baseTimeout;
	currentTimeout = randTimeout + currentTimeout;
	return currentTimeout
}

function likeElementWithTimeout() {
	setTimeout(function() {
		if likeElement != null {
			likeElement.click()
			console.log('Liked ' + likeCount)
		}
	}, getRandomTimeout());
}

function autoLikePhoto() {
	console.log("The AutoClickSelector script is getting started");
	likeElementWithTimeout();
}

autoLikePhoto();