// function dropDown() {
//     document.querySelectorAll(".submenu").classList.
//     document.querySelectorAll('.arrow').classList.toggle('rotate-0')
//   }


// dropDown()

let submenu = document.querySelectorAll(".coba")
let lah = document.querySelectorAll(".submenu")
let arrows = document.querySelectorAll(".arrow")

function test() {
    for (let i=0; i < submenu.length; i++) {
        lah[i].onclick = function () {
            submenu[i].classList.toggle('hidden')
            arrows[i].classList.toggle('rotate-0')
        }
    }
}

test()

  function Openbar() {
    document.querySelector('.sidebar').classList.toggle('left-[-300px]')
}


