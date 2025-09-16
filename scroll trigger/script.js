// gsap.from("#page1 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360
// })

// gsap.from("#page2 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%"
//     }
// })

// gsap.from("#page3 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: "#page3 #box",
//         scroller: "body",
//     }
// })

// gsap.from("#page2 h1", {
//     opacity: 0,
//     x: 500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         start: "top 60%"
//     }
// })

// gsap.from("#page2 h2", {
//     opacity: 0,
//     x: -500,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 h2",
//         scroller: "body",
//         start: "top 60%"
//     }
// })

// gsap.from("#page2 #box", {
//     scale: 0,
//     opacity: 0,
//     rotate: 720,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 30%",
//         // scrub: true // rough
//         // scrub: 2 // smooth
//         scrub: 2,
//         pin: true
//     }
// })

gsap.to("#page2 h1", {
    transform: "translateX(150%)",
    // duration:2,
    // delay:1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -100%", 
        scrub: 4,
        pin: true
    }
})

// set timeline only for one sight like 100% width and height