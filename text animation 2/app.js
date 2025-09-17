function marqueAnimation() {
    // window --> father of all things
    window.addEventListener("wheel", function(dets){
        if (dets.deltaY>0) {
            gsap.to(".marque", {
                transform: 'translateX(-200%)',
                duration:3,
                repeat: Infinity,
                ease: "none"
            })

            gsap.to(".marque img", {
                rotate: 180,
                duration:1,
            })
        } else {
            gsap.to(".marque", {
                transform: 'translateX(0%)',
                duration:3,
                repeat: Infinity,
                ease: "none"
            })

            gsap.to(".marque img", {
                rotate: 0,
                duration:1,
            })
        }
    })
}

marqueAnimation()