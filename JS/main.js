let links = document.querySelector(`header .container .links `)

let iconSpanTwo = document.querySelector(`header .container .links .icons span:nth-child(2)`)

let listUl = document.querySelector(`header .links ul`)

let arrowUp = document.querySelector(".arrow-up")

links.onclick = function () {
    listUl.classList.toggle("active-ul")
    iconSpanTwo.classList.toggle("active-span")
}

window.onscroll = function () {
    if (window.scrollY >= 500) {
        arrowUp.classList.add("arrow-block")
    }
    else {
        arrowUp.classList.remove("arrow-block")
    }
}


arrowUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}