document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Loader Removal handling
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 600);
    }

    // 2. Light / Dark Theme Toggle Switch
    const themeBtn = document.getElementById('themeBtn');
    themeBtn.onclick = () => {
        document.body.classList.toggle('light');
        if (document.body.classList.contains('light')) {
            themeBtn.textContent = '☀️';
        } else {
            themeBtn.textContent = '🌙';
        }
    };

    // 3. Dynamic Number Ticker Animation (From Part 4)
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
        counter.textContent = '0';
        const target = +counter.getAttribute('data-target');
        let currentNum = 0;
        
        // Adjust incremental calculation step speeds
        const incrementSpeed = Math.ceil(target / 40); 
        
        const updateCounter = setInterval(() => {
            currentNum += incrementSpeed;
            if (currentNum >= target) {
                counter.textContent = target + "+";
                clearInterval(updateCounter);
            } else {
                counter.textContent = currentNum;
            }
        }, 50);
    });

    // 4. Portfolio Filter Engine 
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update Active class on button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    // Trigger simple fade-in layout recalculation entry effect
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
