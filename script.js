document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('mainVideo');

    video.addEventListener('mouseenter', function() { 
        this.src = "hover-video.mp4"; 
    });

    video.addEventListener('mouseleave', function() { 
        this.src = "faster-video.mp4"; 
    });
});
