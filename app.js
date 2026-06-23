// template_nogff1s
// service_18vh5sr
// user__kpWU_hI5CxB0_IuKy

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
     emailjs
         .sendForm(
            'service_18vh5sr',
            'template_nogff1s', 
           event.target,
            'kpWU_hI5CxB0_IuKy'
         ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
     }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily Unavailable. Please contact me directly at jblon00@gmail.com."
        )
     })
}

function toggleModal() {
    document.body.classList += " modal--open"
}