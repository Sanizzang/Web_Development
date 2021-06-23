const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;
    
    document.addEventListener('mousemove', (event) => {
        x = event.clientX;
        y = event.clientY;
    
        horizontal.style.transform = `translate(0, ${y}px)`;
        vertical.style.transform = `translate(${x}px, 0)`;
        target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
        tag.style.transform = `translate(${x}px, ${y}px)`;
    
        tag.innerHTML = `${x}px ${y}px`
    })
})