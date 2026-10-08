
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    console.log(e);
    console.log(e.target);

    // Code to show modal  - Use event parameter 'e'   
    // figure out which image was clicked on
    const imgClicked = e.target;
    const fileName = imgClicked.getAttribute("src");
    const alt = imgClicked.alt;
    // get name of large image
    const largeImg = fileName.replace("sm", "full");
    // put correct src path in the dialog
    modalImage.src = largeImg
    modalImage.alt = alt
    modalImage
    // show dialog
    modal.showModal();
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
