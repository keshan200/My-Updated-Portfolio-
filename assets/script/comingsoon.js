
const buttons = document.getElementsByClassName('comingSoon');


Array.from(buttons).forEach(button => {
    button.addEventListener('click', () => {
        Swal.fire({
            title: 'Coming Soon!',
            text: 'This feature is under development and will be available soon.',
            icon: 'info',
            showConfirmButton: true,
            confirmButtonText: 'Got it!',
            customClass: {
                popup: 'swal-popup',
                title: 'swal-title',
                confirmButton: 'swal-confirm-button'
            }
        });
    });
});
