gsap.to('.h-el', {
    y: 100,
    opacity: 1,
    duration: 1,
    delay: 1,
    repeat: 0,
    stagger: .1,
    ease: "power2.nOut",
})

gsap.to('.hero-el', {
    x: 100,
    opacity: 1,
    duration: 1,
    delay: 1,
    repeat: 0,
    stagger: .1,
    ease: "power2.nOut",
})

document.querySelector('.about').addEventListener('mouseover', function() {
    gsap.to('.about-el-left', {
        x: 100,
        opacity: 1,
        duration: 1,
        delay: 1,
        repeat: 0,
        stagger: .1,
        ease: "power2.nOut",
    })

    gsap.to('.about-el-right', {
        x: -100,
        opacity: 1,
        duration: 1,
        delay: 1,
        repeat: 0,
        stagger: .1,
        ease: "power2.nOut",
    })
})

// window.scroll()

