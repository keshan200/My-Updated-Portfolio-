document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".certificate-card");
    const showMoreBtn = document.getElementById("show-more-btn");
    let visibleCount = 3;

    // Initially display the first 3 certificates
    cards.forEach((card, index) => {
        if (index < visibleCount) {
            card.classList.add("visible");
        }
    });

    // Show more certificates on button click
    showMoreBtn.addEventListener("click", () => {
        visibleCount += 3; // Increase the number of visible certificates
        cards.forEach((card, index) => {
            if (index < visibleCount) {
                card.classList.add("visible");
            }
        });

        // Hide the button if all certificates are visible
        if (visibleCount >= cards.length) {
            showMoreBtn.style.display = "none";
        }
    });
});