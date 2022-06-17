const navMenu = document.getElementById('nav-menu');

function chooseNavMenuItem(navMenuItem, navMenuItemIndex){
    resetUnselectedNavMenuItems();

    if(navMenuItemIndex === 1) {
        navMenuItem.classList.toggle('nav-menu-item-selected');
    } else if(navMenuItemIndex === 2) {
        navMenuItem.classList.toggle('nav-menu-item-selected');
    } else if(navMenuItemIndex === 3) {
        navMenuItem.classList.toggle('nav-menu-item-selected');
    } else if(navMenuItemIndex === 4) {
        navMenuItem.classList.toggle('nav-menu-item-selected');
    }
}

function resetUnselectedNavMenuItems() {
    [...navMenu.children].forEach(element => {
        if(element.classList.contains('nav-menu-item-selected')){
            element.classList.remove('nav-menu-item-selected');
        }
    });
}