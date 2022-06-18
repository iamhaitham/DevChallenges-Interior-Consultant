const originalMainContent = document.getElementsByTagName('main')[0].innerHTML;
const originalLogoStyle = document.querySelectorAll('header > p')[0].style.visibility;
const originalFooterStyle = document.getElementsByTagName('footer')[0];
const menuTemplate = '<object type="text/html" data="../templates/menu-template.html" class="nav-menu"></object>';
const navMenu = document.getElementsByClassName('nav-menu');
const navMenuHeight = parent.innerHeight / 1.7;
const headerHeight = document.getElementsByTagName('header')[0].clientHeight;
const menuItems = document.getElementById('menu-items');

function hideOrShowLogo(hasMenuIconChanged) {
    document.querySelectorAll('header > p')[0].style.visibility = 
        hasMenuIconChanged ? 'hidden' : originalLogoStyle;
}

function hideOrShowFooter(hasMenuIconChanged) {
    originalFooterStyle.style.visibility = 
        hasMenuIconChanged ? 'hidden' : 'visible';
}

function hideOrShowNavMenu(hasMenuIconChanged) {
    document.getElementsByTagName('main')[0].innerHTML = 
        hasMenuIconChanged ? menuTemplate : originalMainContent;
}

function addNavMenuStyle() {
    navMenu[0].setAttribute('height', navMenuHeight + 'px');
    navMenu[0].style.position = 'absolute';
    navMenu[0].style.top = ((parent.innerHeight - headerHeight) / 3.5) + 'px';
}

function onMenuTrigger(icon) {
    icon.classList.toggle('menuIconChanged');

    const hasMenuIconChanged = icon.classList.contains('menuIconChanged');
    
    hideOrShowNavMenu(hasMenuIconChanged);
    
    if(navMenu.length === 1) {
        addNavMenuStyle();
    }

    hideOrShowLogo(hasMenuIconChanged);
    
    hideOrShowFooter(hasMenuIconChanged);
}

function chooseMenuItem(menuItems) {
    resetUnselectedMenuItems();

    menuItems.classList.toggle('menu-item-selected');
}

function resetUnselectedMenuItems() {
    [...menuItems.children].forEach(menuItem => {
        if(menuItem.classList.contains('menu-item-selected')){
            menuItem.classList.remove('menu-item-selected');
        }
    });
}