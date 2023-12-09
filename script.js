function generateStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 200; // You can adjust this number

    for (let i = 0; i < numberOfStars; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // Optional: Randomize the size of stars
        const starSize = Math.random() * 3; // max size of 3px
        star.style.width = `${starSize}px`;
        star.style.height = `${starSize}px`;

        starsContainer.appendChild(star);
    }
}

generateStars();

function openModal(src) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
