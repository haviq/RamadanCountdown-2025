// Tanggal target: 1 Ramadan 2025 (1 Maret 2025)
const ramadanDate = new Date("Maret 1, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = ramadanDate - now;

    // Hitung hari, jam, menit, dan detik
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Tampilkan hasil
    document.getElementById("days").innerText = days < 10 ? `0${days}` : days;
    document.getElementById("hours").innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? `0${seconds}` : seconds;

    // Jika hitung mundur selesai
    if (timeLeft < 0) {
        clearInterval(interval);
        document.querySelector(".countdown").innerHTML = "<h2>Ramadan 2025 telah tiba!</h2>";
    }
}

// Update setiap 1 detik
const interval = setInterval(updateCountdown, 1000);

// Handle audio autoplay with user interaction
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backsound');
    audio.volume = 0.5; // Set volume to 50%
    
    // Create user interaction handler
    function handleInteraction() {
        audio.play();
        // Remove event listeners after first interaction
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
    }

    // Add multiple event listeners for different types of interactions
    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('keydown', handleInteraction);
});

const videos = [
    'vid.mp4',
    'vid2.mp4',
    'vid (1).mp4',
    'vid (2).mp4',
    'vid (3).mp4',
];

let currentVideoIndex = 0;
const videoElement = document.getElementById('bg-video');

// Function to switch videos
function switchVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();
}


setInterval(switchVideo, 10000);

// Also switch when current video ends
videoElement.addEventListener('ended', switchVideo);
