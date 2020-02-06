function showBadge(video) {

    const divAlert = document.createElement("div");
    divAlert.className += "deeptruth-alert";
    divAlert.innerHTML = '<p>DEEPFAKE</p>';

    video.parentNode.appendChild(divAlert);
}

function analyzeVideo(video) {

    const isFake = true;

    if (isFake) {
        showBadge(video);

        const obj = {};
        obj[video.id] = "true";

        chrome.storage.sync.set(obj);
    }
}

function checkWebPage() {

    const videos = document.getElementsByTagName("video");

    for (let index = 0; index < videos.length; index++) {

        const video = videos[index];

        chrome.storage.sync.get(video.id, function (result) {
            if (Object.keys(result).length === 0 && result.constructor === Object) {
                console.log("Video has not been analyzed yet");
                if (video.currentTime > 0 && !video.paused && video.dataset.analyzed === undefined) {
                    analyzeVideo(video);
                }
            } else {
                console.log("Video has already been analyzed");
                video.dataset.analyzed = "true";
                showBadge(video);
            }
        });
    }

    setTimeout(checkWebPage, 2000);
}

(function main() {
    checkWebPage();
})();