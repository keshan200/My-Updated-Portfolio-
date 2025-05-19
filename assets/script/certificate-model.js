document.addEventListener("DOMContentLoaded", function () {
    const viewButtons = document.querySelectorAll(".view-btn");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close-btn");
    const showMoreBtn = document.getElementById("show-more-btn");

    // Dummy certificate image paths for demonstration
    const certificates = {
        Ai: "assets/certificates/AI_ML Engineering Stage-1.png",
        genAi :"assets/certificates/CertificateOfCompletion_What Is Generative AI 1.jpg",
        neuralNetwork:"assets/certificates/Introduction to Neural Network.jpg",
        introSql:"assets/certificates/Introduction to SQL.jpg",
        intermeadietJava:"assets/certificates/Java Intermediate.jpg",
        basicPython:"assets/certificates/Python_for_Beginners_E-Certificate.jpg",
        intermeadietSql:"assets/certificates/SQL Intermediate.jpg",
        introJava:"assets/certificates/Introduction to java.jpg"
    };

    // Show certificate modal
    viewButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const certId = this.getAttribute("data-certificate");
            modalImg.src = certificates[certId] || "path/to/default-certificate.jpg";
            modal.style.display = "flex";
        });
    });

    // Close modal
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the content
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });


});