function showAlert(video) {

    // Show an alert under the given video

    const divAlert = document.createElement("div");
    divAlert.className += "deeptruth-alert";
    divAlert.innerHTML = '<p>DEEPFAKE</p>';

    video.parentNode.appendChild(divAlert);
}

function analyzeVideo(video) {

    // Analyze given video to check if it is a deepfake or not

    const classes = video.className.split(' ');

    // if (classes.includes("deepfake")) {
    console.log("This video is a deepfake !");
    showAlert(video);
    video.dataset.analyzed = "1";
    // }
}

function checkWebPage() {

    // Check web page every two seconds for videos playing

    const videos = document.getElementsByTagName("video");

    for (let index = 0; index < videos.length; index++) {

        const video = videos[index];

        if (video.currentTime > 0 && !video.paused && video.dataset.analyzed === undefined) {
            analyzeVideo(video);
        }
    }

    setTimeout(checkWebPage, 2000);
}

(function main() {
    checkWebPage();
})();