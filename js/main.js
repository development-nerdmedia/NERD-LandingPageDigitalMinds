document.addEventListener("click", function (e) {
    if (e.target.closest(".menubtn")) {
        document.querySelector(".menupage").classList.toggle("open");
        // jQuery('body').addClass('scrollhidden');
    }
})