function swap() {
    var images = document.querySelectorAll(".grillen");
    var i = 0;
    while (i < images.length) {
        images[i].classList.toggle("hidden");
        i += 1;
    }
}