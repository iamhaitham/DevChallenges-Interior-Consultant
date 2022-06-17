const originalMainContent = document.getElementsByTagName('main')[0].innerHTML;
const originalLogoStyle = document.querySelectorAll('header > p')[0].style.visibility;
const originalFooterStyle = document.getElementsByTagName('footer')[0].style.display;
const menuTemplate = '<object type="text/html" data="../templates/menu-template.html" ></object>';

function onMenuTrigger(icon) {
    icon.classList.toggle('menuIconChanged');

    const hasMenuIconChanged = icon.classList.contains('menuIconChanged');
    
    document.getElementsByTagName('main')[0].innerHTML = 
        hasMenuIconChanged ? menuTemplate : originalMainContent;

    document.querySelectorAll('header > p')[0].style.visibility = 
        hasMenuIconChanged ? 'hidden' : originalLogoStyle;

    document.getElementsByTagName('footer')[0].style.display = 
        hasMenuIconChanged ? 'none' : originalFooterStyle;
}