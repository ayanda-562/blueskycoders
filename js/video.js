document.addEventListener('DOMContentLoaded', function() {
    // Animate stats when they come into view
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'countUp 2s ease-out forwards';
            }
        });
    });

    stats.forEach(stat => observer.observe(stat));

    // Ensure video autoplays
    const videoIframe = document.querySelector('.video-background iframe');
    videoIframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
});