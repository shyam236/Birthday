// Generate floating hearts randomly
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.querySelector('.hearts-container').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts every 1-3 seconds
setInterval(createHeart, Math.random() * 2000 + 1000);

// Initial hearts on load
for (let i = 0; i < 5; i++) {
    setTimeout(createHeart, i * 500);
}
