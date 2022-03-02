(function() {
    const label = document.querySelector('label')
    const check = document.querySelector('#check')
    const nav = document.querySelector('header nav')
    label.addEventListener('click', () => {
        if (!(check.checked)) {
            nav.classList.add('active')
        } else {
            nav.classList.remove('active')
        }
    })
})()