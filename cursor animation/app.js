var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function(val) {
    gsap.to(cursor, {
        x:val.x,
        y:val.y,
        duration: 1,
        // ease: "back.out"
    })
})

imageDiv.addEventListener("mouseenter", function() {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 2.5,
        backgroundColor: "#ffffff5c"

    })
})

imageDiv.addEventListener("mouseleave", function() {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#ffffff"
    })
})