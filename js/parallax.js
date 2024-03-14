let bg = document.querySelector(".bg")

document.onmousemove = (e) => {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    bg.style.transform = "translate(-" + x * 60 + "px, -" + y * 60 + "px)";


}