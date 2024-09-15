// STAR RATING SYSTEM

const stars = document.querySelectorAll('.star');
// note select
let selectedRating = 0; 

stars.forEach(star => {
    star.addEventListener('mouseover', () => {
        const value = star.getAttribute('data-value');
        stars.forEach(s => {
            if (s.getAttribute('data-value') <= value) {
                s.style.color = '#f5b921'; 
            } else {
                s.style.color = '#555';
            }
        });
    });

    star.addEventListener('mouseout', () => {
        stars.forEach(s => {
            if (s.getAttribute('data-value') <= selectedRating) {
                s.style.color = '#f5b921'; 
            } else {
                s.style.color = '#555'; 
            }
        });
    });

    star.addEventListener('click', () => {
        const value = star.getAttribute('data-value');
        // Update selected note
        selectedRating = value; 
        updateRating(value);
        stars.forEach(s => {
            if (s.getAttribute('data-value') <= value) {
                s.classList.add('spin');
                setTimeout(() => {
                    s.classList.remove('spin');
                }, 1000);
            }
        });
    });
});

// Updates the appearance of the stars to reflect the selected rating
function updateRating(value) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('selected');
            // Keep yellow stars after click
            star.style.color = '#f5b921'; 
        } else {
            star.classList.remove('selected');
            star.style.color = '#555'; 
        }
    });
}
