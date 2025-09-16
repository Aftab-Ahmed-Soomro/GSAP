// gsap.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     borderRadius: "50%",
//     scale: "0.5",
//     repeat: Infinity,
//     yoyo: true 
// })

// gsap.from("#box2", {
//     x:500,
//     y:500,
//     duration:2,
//     delay:1
// })

// gsap.from("h1", {
//     // color: "red",
//     opacity: 0,
//     y:30,
//     duration: 1,
//     delay: 1,
//     stagger: 0.3
//     // stagger: -1 // ulta chalega
// })

// gsap.to("#box1", {
//     x:1500,
//     rotate: 360,
//     duration:1.5,
//     delay:1
//     // total duration: 2.5 sec
// })

// gsap.to("#box2", {
//     x: 1500,
//     backgroundColor: "yellow",
//     duration: 1.5,
//     delay: 2.5
// })

// gsap.to("#box3", {
//     x: 1500,
//     scale: 0.5,
//     borderRadius: "50%",
//     duration: 1.5,
//     delay: 4
// })

// var tl = gsap.timeline()

// tl.to("#box1", {
//     x:1500,
//     rotate:360,
//     duration:1,
//     delay:1
// })

// tl.to("#box2", {
//     x:1500,
//     duration:1.5,
// })

// tl.to("#box3", {
//     x:1500,
//     duration:1.5,
// })

var navTL = gsap.timeline()

navTL.from("h2", {
    y:-30,
    opacity:0.8,
    duration:1,
    delay:0.5
})


navTL.from("h4", {
    y:-30,
    opacity:0,
    duration:1,
    stagger : 0.3
})

navTL.from("h1", {
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2
})

navTL.to("#box1", {
    x: 1190,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "red",
    borderRadius: "50%",
    scale: "0.5",
    repeat: Infinity,
    yoyo: true 
})

// Animation --> it is all about intial to final 
// to --> final pr changes aajayengi
// from --> initial pr changes aajayengi
// yoyo work like --> like we create to funtionality then it will work for from too no need to to create from functionality
// timeline --> no need to worry about delay timeline will fix that problem