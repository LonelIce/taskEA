const form = document.getElementById("folForm");
const popup = document.getElementById('popupContainer');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        email: document.querySelector('input[type="email"]').value
    }

    const request = new XMLHttpRequest();
    request.addEventListener('load', () => {
        console.log(request.response);
        popup.classList.remove("none")
    })
    request.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    request.send('email=' + encodeURIComponent(formData.email));
})

const closePopupEl=document.getElementsByClassName('timeExit');
for (let i = 0; i < closePopupEl.length; i++) {
    closePopupEl[i].addEventListener('click', ()=>popup.classList.add("none"))
}
