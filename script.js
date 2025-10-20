document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');
    const imageCount = 20;

    // Loop to create and append image tags
    for (let i = 1; i <= imageCount; i++) {
        const img = document.createElement('img');
        img.src = `img/c${i}.jpg`;
        img.alt = `Gallery Image ${i}`;
        
        // Anti-copy measures (optional, see previous responses)
        img.oncontextmenu = (e) => e.preventDefault();
        img.ondragstart = (e) => e.preventDefault();

        galleryContainer.appendChild(img);
    }

    // Add event listeners for the gallery container to disable right-click
    galleryContainer.oncontextmenu = (e) => {
        e.preventDefault();
    };

    // Auto-scroll functionality (existing code)
    let scrollInterval;
    let scrollSpeed = 50;
    let isPaused = false;

    function startAutoScroll() {
        if (isPaused) return;
        scrollInterval = setInterval(() => {
            galleryContainer.scrollTop += 1;
            if (galleryContainer.scrollTop + galleryContainer.clientHeight >= galleryContainer.scrollHeight) {
                galleryContainer.scrollTop = 0;
            }
        }, scrollSpeed);
    }

    function stopAutoScroll() {
        clearInterval(scrollInterval);
    }

    startAutoScroll();

    galleryContainer.addEventListener('mouseenter', () => {
        isPaused = true;
        stopAutoScroll();
    });

    galleryContainer.addEventListener('mouseleave', () => {
        isPaused = false;
        startAutoScroll();
    });
});
