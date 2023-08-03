const logo = document.querySelector('.logo');
const logoBG = document.querySelector('.logobg');

console.log(logo.getBoundingClientRect());
console.log(window.innerHeight);
console.log(document.documentElement.clientHeight);

let lastScrollPosition = window.scrollY;
let animationStarted = false;

const animationScaleFade = (element, duration, reverse = false) => {
    const startTimestamp = performance.now();
    const startScale = reverse ? 1.5 : 1;
    const startOpacity = reverse ? 0 : 1;

    const animationStep = (timestamp) => {
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        const scale = startScale + (reverse ? -0.5 : 0.5) * progress;
        const opacity = startOpacity + (reverse ? 1 : -1) * progress;

        element.style.transform = `scale(${scale})`;
        element.style.opacity = opacity;

        if(progress < 1 ){
            requestAnimationFrame(animationStep);
        };
    };

    requestAnimationFrame(animationStep);
};

const isInViewport = (element) => {
    const bounding = element.getBoundingClientRect();
    return(
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
}


const checkAnimation = () => {
    const currentScrollPosition = window.scrollY;
    const scrollDirection = currentScrollPosition > lastScrollPosition ? 'down' : 'up';
    lastScrollPosition = currentScrollPosition;

    if(scrollDirection === 'down' && !animationStarted && isInViewport(logo) && isInViewport(logoBG)) {
        animationScaleFade(logo, 800);
        animationScaleFade(logoBG, 800);
        animationStarted = true;
    };
    if(scrollDirection === 'up' && animationStarted) {
        animationScaleFade(logo, 800, reverse = true);
        animationScaleFade(logoBG, 800, reverse = true);    
        animationStarted = false;
    };
};

window.addEventListener('scroll', checkAnimation);

checkAnimation();