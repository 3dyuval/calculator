export default function slider(sliderElement, containerElement) {

    const widthSlider = document.querySelector(sliderElement)
    const containerToResize = document.querySelector(containerElement)

    widthSlider.addEventListener("input", () => {
        containerToResize.style.width = `${widthSlider.value}%`
    })



}