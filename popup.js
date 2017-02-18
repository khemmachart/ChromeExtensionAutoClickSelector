document.getElementById("NewsFeed").addEventListener('click', () => {

    function modifyDOM() {

        var likeElements = document.querySelectorAll('.coreSpriteHeartOpen');
        var currentTimeout = 0;

        function getRandomTimeout() {
            var baseTimeout = 5000
            var randTimeout = Math.random() * 5000 + baseTimeout;
            currentTimeout = randTimeout + currentTimeout;
            return currentTimeout
        }

        function likeElementWithTimeout(i) {
            setTimeout(function(i) {
                likeElements[i].click()
                console.log('Liked ' + i)
            }, getRandomTimeout(), i);
        }

        function autoLikeNewFeed() {
            console.log("The AutoClickSelector script is getting started")
            for (i = 0; i < likeElements.length; i++) { 
                likeElementWithTimeout(i);
            }   
        }

        autoLikeNewFeed();
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    });
});

document.getElementById("Photo").addEventListener('click', () => {
    
    function modifyDOM() {
                
        var likeCount = 0;

        function getRandomTimeout() {
            var baseTimeout = 5000
            var randTimeout = Math.random() * 5000 + baseTimeout;
            return randTimeout
        }

        function likeElementWithTimeout() {
            var likeElement = document.querySelector('.coreSpriteHeartOpen');
            var nextElement = document.querySelector('.coreSpriteRightPaginationArrow');
            var nextTime = getRandomTimeout();

            if (likeElement != null) {
                setTimeout(function() {
                    likeElement.click()
                    console.log('Liked ' + likeCount)
                    likeCount++;
                }, nextTime);
            }

            if (nextElement != null) {
                setTimeout(function() {
                    nextElement.click();
                }, nextTime + 1234);

                setTimeout(function() {
                    likeElementWithTimeout();
                }, nextTime + 2345);
            }
        }

        function autoLikePhoto() {
            console.log("The AutoClickSelector script is getting started");
            likeElementWithTimeout();
        }

        autoLikePhoto();
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    });
});