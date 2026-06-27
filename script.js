document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Safe Loader Fade-Out Function
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 400); // Gives time for the smooth CSS transition
        }, 600);
    }

    // 2. Light / Dark Theme Toggle Switch
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.onclick = () => {
            document.body.classList.toggle('light');
            if (document.body.classList.contains('light')) {
                themeBtn.textContent = '☀️';
            } else {
                themeBtn.textContent = '🌙';
            }
        };
    }

    // 3. Dynamic Number Ticker Animation (From Part 4)
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
        counter.textContent = '0';
        const target = +counter.getAttribute('data-target');
        let currentNum = 0;
        
        // Adjust step increments based on total value sizes
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
    const filterButtons = document.querySelectorAll('.filters button');
    const projectCards = document.querySelectorAll('.project-card, .card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Manage active button CSS classes
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Simple filtering match (Assumes data-category matches button text)
            const filterValue = button.textContent.toLowerCase();

            projectCards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                if (filterValue === 'all' || cardText.includes(filterValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
