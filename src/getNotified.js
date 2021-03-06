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
const form = document.getElementById("followForm");
const popup = document.getElementById('popupFade');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const request = new XMLHttpRequest();
    request.open(form.method, form.action, true);

    const titlePopup = document.getElementsByClassName('titlePopup')
    const descriptionPopup = document.getElementsByClassName('descPopup')
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            titlePopup[0].innerText = POPUP_CONST.SUCCESS.title;
            descriptionPopup[0].innerText = POPUP_CONST.SUCCESS.description;
            popup.style.display='flex';
        } else {
            titlePopup[0].innerText = POPUP_CONST.FAILURE.title;
            descriptionPopup[0].innerText = POPUP_CONST.FAILURE.description;
            popup.style.display='flex';
        }
    }

    const formData = {
        email: document.querySelector('input[type="email"]').value
    }
    request.send(`email=${formData.email}`);
})

const closePopupEl = document.getElementsByClassName('closePopup');
for (let i = 0; i < closePopupEl.length; i++) {
    closePopupEl[i].addEventListener('click', () => {
        popup.style.display='none';
    })
}
