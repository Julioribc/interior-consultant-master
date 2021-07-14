export default function menuBtnHamburguesa(id, aside){
    const $button = document.getElementById(id)
    const $asiderBar = document.querySelector(aside)
    const $body = document.querySelector("body")
    $button.addEventListener("click", function(ev){
        $asiderBar.classList.toggle("active")
        $button.classList.toggle("is-active")
        $body.classList.toggle("overflow-hidden")
    })
}