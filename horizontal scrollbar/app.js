var tl = gsap.timeline()

var icon = document.querySelector("#icon")
var closeIcon = document.querySelector("#closeIcon")

// icon.addEventListener("click", function() {
    tl.to("#full", {
        right:0,
        duration: 0.5,
    })

    tl.from("#full h4", {
        x: 150,
        duration: 0.6,
        stagger: 0.28,
        opacity: 0
    })

    tl.from("#full i", {
        opacity: 0
    })
// })

tl.pause()

icon.addEventListener("click", function() {
    tl.play()
})

closeIcon.addEventListener("click", function() {    
    tl.reverse()
})