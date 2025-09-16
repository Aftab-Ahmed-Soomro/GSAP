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

var tl = gsap.timeline()

tl.from(".logo .discord-server", {
    y: -30,
    duration: 1,
    opacity: 0.8
})

tl.from(".navbar h3", {
    y: -30,
    duration: 1,
    opacity: 0,
    stagger: 0.2
})

tl.from(".hello-banner h1", {
    scale: 0,
    opacity: 0.2,
    duration: 1
})

gsap.from(".video-banner .video", {
    scale: 0.3,
    duration: 2,
    scrollTrigger: {
        trigger: ".video-banner .video",
        scroller: "body",
        scrub: 2,
    }
})

// Fixed GSAP animation
gsap.to("#page2 h1", {
    transform: "translateX(100%)",
    ease: "none", // Important for smooth scrub animation
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top top", // When top of trigger hits top of viewport
        end: "+=500%", // Very long scroll distance for very slow movement
        scrub: 3, // Higher scrub value for even smoother movement
        pin: true,
        anticipatePin: 1, // Helps with smooth pinning
        // markers: true // Uncomment to see markers for debugging
    }
});

var initialPath = `M 10 100 Q 500 100 990 100`
var finalPath = `M 10 100 Q 500 100 990 100`

var string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    let path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path", {
        attr:{d:path},
        duration : 0.3,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path", {
        attr: {d:finalPath},
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    })
})

gsap.to("#box1", {
    x: 1190,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "red",
    // borderRadius: "50%",
    // scale: "0.5",
    repeat: Infinity,
    yoyo: true 
})