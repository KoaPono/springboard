document.addEventListener('mousemove', (e) => {
    const b = normalize(e.clientX, window.innerWidth);
    const g = normalize(e.clientY, window.innerHeight);
    document.body.style.backgroundColor = `rgb(0, ${b}, ${g})`;
})

function normalize(val, max) {
    return Math.round(val / max * 255);
}