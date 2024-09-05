// Custom JavaScript (optional animation or interaction)
document.querySelectorAll('.link-btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transition = 'transform 0.3s ease';
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});
