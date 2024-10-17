const loadingVideo = document.getElementById('loadingVideo');
const mainVideo = document.getElementById('mainVideo');
const loadingScreen = document.getElementById('loading-screen');

mainVideo.addEventListener('loadeddata', () => {
    // Hide the loading screen and show the main video once it's ready
    loadingScreen.style.display = 'none';
    mainVideo.style.display = 'block'; // Show the main video
    loadingVideo.pause(); // Pause the loading video
});

loadingVideo.addEventListener('ended', () => {
    // In case loading video ends before main video is loaded
    loadingScreen.style.display = 'none';
    mainVideo.style.display = 'block'; // Show the main video
});
