document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Safe Loader Fading
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 600);
    }

    // 2. Light / Dark Theme Control
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.onclick = () => {
            document.body.classList.toggle('light');
            themeBtn.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
        };
    }

    // 3. Counter Animation Engine
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
        counter.textContent = '0';
        const target = +counter.getAttribute('data-target');
        let currentNum = 0;
        const incrementSpeed = Math.ceil(target / 30); 
        
        const updateCounter = setInterval(() => {
            currentNum += incrementSpeed;
            if (currentNum >= target) {
                counter.textContent = target + "+";
                clearInterval(updateCounter);
            } else {
                counter.textContent = currentNum;
            }
        }, 60);
    });

    // 4. Fine-Tuned Project Filtering Engine
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
