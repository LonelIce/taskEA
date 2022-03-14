const POPUP_CONST = {
    SUCCESS: {
        title: 'SUCCESS!',
        description: 'You have successfully subscribed to the email newsletter'
    },
    FAILURE: {
        title: 'FAILURE!',
        description: 'Sorry! Try again.'
    }
}
const form = document.getElementById("folForm");
const popup = document.getElementById('popupContainer');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        email: document.querySelector('input[type="email"]').value
    }

    const request = new XMLHttpRequest();
    request.open(form.method, 'https://jsonplaceholder.typicode.com/posts', true);

    const titlePopup = document.getElementsByClassName('titlePopup')
    const descriptionPopup = document.getElementsByClassName('descriptionPopup')
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            titlePopup[0].innerText = POPUP_CONST.SUCCESS.title;
            const descriptionPopup = document.getElementsByClassName('descriptionPopup')
            descriptionPopup[0].innerText = POPUP_CONST.SUCCESS.description;
            popup.classList.remove("none")
        } else {
            titlePopup[0].innerText = POPUP_CONST.FAILURE.title;
            const descriptionPopup = document.getElementsByClassName('descriptionPopup')
            descriptionPopup[0].innerText = POPUP_CONST.FAILURE.description;
            popup.classList.remove("none")
        }
    }

    request.send();
})

const closePopupEl = document.getElementsByClassName('timeExit');
for (let i = 0; i < closePopupEl.length; i++) {
    closePopupEl[i].addEventListener('click', () => popup.classList.add("none"))
}
