/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'), 
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVER EL MENU DEL MOBILE ===============*/
const navLink = document.querySelectorAll('nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50  ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
    sr.reveal(`.home__data, .footer__container`)
    sr.reveal(`.home__img`, {delay: 700,origin: 'bottom'})
    sr.reveal(`.logos__img, .program__card, .pricing__card` , {interval: 100})
    sr.reveal(`.choose__img, .calculate__content` , {origin: 'left'})
    sr.reveal(`.choose__content, .calculate__img` , {origin: 'right'})

/*=============== CALCULATE JS ===============*/
const   calculateForm      = document.getElementById('calculate-form'),
        calculateCm      = document.getElementById('calculate-cm'),
        calculateKg      = document.getElementById('calculate-kg'),
        calculateMessage = document.getElementById('calculate-message')

        const calculateBmi = (e) =>{
                e.preventDefault()

                if(calculateCm.value === '' || calculateKg.value === ''){

                    //Agregar y Remover Color
                    calculateMessage.classList.remove('color-green')
                    calculateMessage.classList.add('color-red')

                    //Mostrar Mensaje
                    calculateMessage.textContent = 'Complete la Altura y el Peso 🐱‍💻'
            
                    //Remover Mensaje en 3 Segundos
                    setTimeout(() => {
                        calculateMessage.textContent = ''
                    }, 3000)
                } else{
                    //BMI Formula
                    const cm = calculateCm.value / 100,
                    kg = calculateKg.value,
                    bmi = Math.round(kg / (cm * cm))

                if (bmi < 18.5){
                    calculateMessage.classList.add('color-green')
                    calculateMessage.textContent = `Su IMC es ${bmi} y está delgado`
                }   else if(bmi < 25){
                    calculateMessage.classList.add('color-green')
                    calculateMessage.textContent = `Su IMC es ${bmi} y está sano`
                } else{
                    calculateMessage.classList.add('color-green')
                    calculateMessage.textContent = `Su IMC es ${bmi} y está con sobrepeso`
                }
                    //Borrar el campó de entrada
                    calculateCm.value = ''
                    calculateKg.value = ''

                    //Borrar el mensaje en 4 segundos
                    setTimeout(() => {
                        calculateMessage.textContent = ''
                    }, 4000)
                }
        }
        calculateForm.addEventListener('submit', calculateBmi)


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message'),
        contactUser = document.getElementById('contact-user')

        const sendEmail = (e) =>{
            e.preventDefault()


            if(contactUser.value === ''){

                //Agregar y Remover Color
                contactMessage.classList.remove('color-green')
                contactMessage.classList.add('color-red')

                //Mostrar Mensaje
                contactMessage.textContent = 'Ingrese un correo electronico'
            
                //Remover el mensaje en tres Segundos
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 3000)

            } else{

                emailjs.sendForm('service_tjyxasl', 'template_m95zjuc', '#contact-form', 'jyU3GjTmSuNTUFSGb')
                .then(() =>{
                    contactMessage.classList.add('color-green')
                    contactMessage.textContent = 'Registro con exito'

                    setTimeout(() => {
                        contactMessage.textContent = ''
                    }, 3000)

                }, (error) =>{
                    //Alerta de Error
                    alert('OOPS! Algo Salio Mal...', error)
                })

                //Limpiar el input
                contactUser.value = ''
            }
        }

        contactForm.addEventListener('submit', sendEmail)