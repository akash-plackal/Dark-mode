const toggle = document.querySelector('input[type=checkbox]')

toggle.addEventListener('change', function () {
    document.body.classList.toggle('dark')
})