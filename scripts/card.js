// These are initial values
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const interiorDesignBottomOffset = document.getElementsByClassName('interior-design')[0].getBoundingClientRect().bottom;
const designerCard = document.getElementsByClassName('designer-card')[0];

function decideRatio() {
    /* 
        Calculations were based on Samsung Galaxy S8+ with a height of 740px, 
        so the ratio for 740px is 1.
    */
    const samsungGalaxyS8PlusHeight = 740;
    const samsungGalaxyS8PlusWidth = 360;

    let factorOfSafety;
    
    if(windowWidth >= samsungGalaxyS8PlusWidth) {
        if(windowHeight == samsungGalaxyS8PlusHeight){
            factorOfSafety = 0;
        }else if(windowHeight > samsungGalaxyS8PlusHeight) {
            factorOfSafety = 0.2;
        }else {
            factorOfSafety = 0.1;
        }
    }else {
        factorOfSafety = 0.25;
    }

    return ((windowHeight / samsungGalaxyS8PlusHeight) + factorOfSafety);
}


function decideDesignerCardAbsoluteBottom() {  
    // Note that I am not using the constants at the beginning, because when resizing the viewport, old values will be remembered and not the new ones.
    designerCard.style.bottom = 
        (window.innerHeight - document.getElementsByClassName('interior-design')[0].getBoundingClientRect().bottom) - (document.getElementsByClassName('designer-card')[0].clientHeight / decideRatio()) + 'px';
}


function resetDesignerCardAbsoluteBottom() {
    designerCard.style.bottom = '';
}


// On view initialization
decideDesignerCardAbsoluteBottom();


// On any resize after the view initialization
window.addEventListener('resize', () => {
    resetDesignerCardAbsoluteBottom();
    decideDesignerCardAbsoluteBottom();
});
