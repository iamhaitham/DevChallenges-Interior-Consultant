const originalMainContent = document.getElementsByTagName('main')[0].innerHTML;
const originalLogoStyle = document.querySelectorAll('header > p')[0].style.visibility;
const originalFooterStyle = document.getElementsByTagName('footer')[0];
const menuTemplate = '<object type="text/html" data="../templates/menu-template.html" class="nav-menu"></object>';
const navMenu = document.getElementsByClassName('nav-menu');
const navMenuHeight = parent.innerHeight / 2;
const headerHeight = document.getElementsByTagName('header')[0].clientHeight;

function hideOrShowLogo(hasMenuIconChanged) {
    document.querySelectorAll('header > p')[0].style.visibility = 
        hasMenuIconChanged ? 'hidden' : originalLogoStyle;
}

function hideOrShowFooter(hasMenuIconChanged) {
    document.getElementsByTagName('footer')[0].innerHTML = 
        hasMenuIconChanged ? '' : originalFooterStyle;
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
