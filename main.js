const showHiddenPass = (inputPass, inputIcon) =>{
   const input = document.getElementById(inputPass),
         iconEye = document.getElementById(inputIcon)
         
   iconEye.addEventListener('click', () =>{
       if(input.type === 'password'){
           input.type = 'text'
           iconEye.classList.add('ri-eye-line')
           iconEye.classList.remove('ri-eye-off-line')
           
       }else{
           input.type = 'password'
           iconEye.classList.remove('ri-eye-line')
           iconEye.classList.add('ri-eye-off-line')
       }
   })
}

showHiddenPass('input-pass','input-icon')

const show = document.querySelector(".login__button")
const hide = document.querySelector(".login__button-ghost")
const remove = document.querySelector(".reenter")
const text = document.querySelector(".login__description")

hide.addEventListener('click', ()=>{
    remove.classList.add('remove')
    text.innerHTML="Login Now!"
    hide.classList.remove("login__button-ghost")
    show.classList.add("login__button-ghost")

})

show.addEventListener('click', ()=>{
    text.innerHTML="Register Now!"
    remove.classList.remove('remove')
    show.classList.remove('login__button-ghost')
    hide.classList.add("login__button-ghost")
})

