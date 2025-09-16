const page3 = document.querySelector(".page3");
let page3Width = page3.offsetWidth;
let amountToScroll = page3Width - window.innerWidth;

const tween = gsap.to(page3, {
    x: -amountToScroll,
    ease: "none"
});

ScrollTrigger.create({
    trigger: ".main-container",
    start: "top top",
    end: () => "+=" + amountToScroll,
    pin: true,
    animation: tween,
    scrub: 1,
});