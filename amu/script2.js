function changeImage() {
    let img = document.getElementById("idolImage");
    img.src = img.src.includes("Amu1.jpg") ? "Amu2.jpg" : "Amu1.jpg";
}