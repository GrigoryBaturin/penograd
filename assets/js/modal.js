document.addEventListener('DOMContentLoaded', () => {

    const images = document.querySelectorAll('.img_group img');

    const modal = document.querySelector('.image_modal');
    const modalImage = document.querySelector('.modal_image');
    const closeModal = document.querySelector('.close_modal');

    images.forEach(image => {

        image.addEventListener('click', () => {

            modal.classList.add('active');
            modalImage.src = image.src;

        });

    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {

        if (e.target === modal) {
            modal.classList.remove('active');
        }

    });

});