const navMenu = document.getElementById('nav-menu');

function chooseNavMenuItem(navMenuItem){
    resetUnselectedNavMenuItems();

    navMenuItem.classList.toggle('nav-menu-item-selected');
}

function resetUnselectedNavMenuItems() {
    [...navMenu.children].forEach(element => {
        if(element.classList.contains('nav-menu-item-selected')){
            element.classList.remove('nav-menu-item-selected');
        }
    });
}