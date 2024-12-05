document.querySelectorAll('.arrows div').forEach(arrow => {
    arrow.addEventListener('click', () => {
        const slides = document.querySelectorAll('input[name="slider"]');
        let currentIndex = Array.from(slides).findIndex(slide => slide.checked);
        const isNext = arrow.dataset.slide === 'next';

        // Рассчитываем индекс следующего/предыдущего слайда
        const newIndex = isNext
            ? (currentIndex + 1) % slides.length
            : (currentIndex - 1 + slides.length) % slides.length;

        slides[newIndex].checked = true;
    });
});