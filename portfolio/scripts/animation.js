// Simple IntersectionObserver to trigger fade-in animations on scroll
document.addEventListener('DOMContentLoaded', function() {
    const fadeEls = document.querySelectorAll('.fade-in');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        fadeEls.forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
    } else {
        // Fallback for old browsers
        fadeEls.forEach(el => {
            el.style.opacity = 1;
            el.style.transform = 'none';
        });
    }
});