/* Checks */
function isDesktop() {
    return !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}
/* / Checks */







/* Contacts */
const phone_numbers = [
    '', // 0
    '+797785036397', // 1
    '897222203639', // 2
    '556634894', // 2
    '29800028', // 2
]

document.querySelectorAll('.phone').forEach(phone => {
    const number = phone_numbers[phone.getAttribute('index')]

    const span = document.createElement('span')
    span.textContent = number
    phone.appendChild(span)


    phone.addEventListener('click', () => {
        if (isDesktop()) {
            navigator.clipboard.writeText(number)
            alert('Номер скопирован: ' + number)
        } else {
            window.location.href = `tel:${number}`
        }
    })
});
/* / Contacts */




/* Scrollers */
document.querySelectorAll('.scroller').forEach(scroller => {
    scroller.addEventListener('click', scrollToTarget)
})

function scrollToTarget(event) {
    event.preventDefault()
    var targetElement = document.querySelector(this.getAttribute('href'))
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    })
}
/* / Scrollers */





