var btn  = document.querySelectorAll('#btn')

btn.forEach( (cadaPunto , i ) => {
    btn[i].addEventListener('click', () => {
        let posicion = i

        btn.forEach( ( cadaPunto , i ) => {
            btn[i].classList.remove('active')
            btn[i].classList.remove('fs-5')
        })
        btn[i].classList.add('active')
        btn[i].classList.add('fs-5')
    })
})
