export const rippleEffect = (event) => {
    const target = event.currentTarget

    const circle = document.createElement("span")
    const diameter = Math.max(target.clientWidth, target.clientHeight)
    const radius = diameter / 2

    circle.classList.add('ripple__effect')
    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - target.getBoundingClientRect().left - radius}px`
    circle.style.top = `${event.clientY - target.getBoundingClientRect().top - radius}px`

    target.appendChild(circle)

    setTimeout(() => {
        target.removeChild(circle)
    }, 1500);
}