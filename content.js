function checkVideos() {

    console.log("DeepTruth: Scanning page for videos playing");

    const videos = document.getElementsByTagName("video");

    for (let index = 0; index < videos.length; index++) {

        const video = videos[index];

        if (video.currentTime > 0 && !video.paused) {

            console.log("DeepTruth: video detected", video.src);

            // Code execution must go here !
            // myFunctionToExecute();
        }
    }

    setTimeout(checkVideos, 2000);
}

(function main() {
    checkVideos();
})();