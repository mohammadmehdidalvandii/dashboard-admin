let iconMenu = document.querySelector('.icon_menu')
let menu = document.querySelector('.navbar_menu_items')

let btnNotifi = document.querySelector("#btn_notifi")
let menuNotifi = document.querySelector("#menu_notifi")

export function handlerShowNotification(){
    if(menuNotifi.classList.contains("showNotifi")){
        menuNotifi.classList.remove('showNotifi')
    }else{
        menuNotifi.classList.add('showNotifi')
    }
}

btnNotifi.addEventListener('click', handlerShowNotification)

// handler menu
export function handlerShowMenu(){
    if(menu.classList.contains('active')){
        menu.classList.remove('active')
        iconMenu.classList = 'fa fa-bars'
    }else{
        menu.classList.add('active')
        iconMenu.classList = 'fa fa-times'
    }
}

iconMenu.addEventListener('click' , handlerShowMenu)