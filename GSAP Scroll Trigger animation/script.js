var tl = gsap.timeline()

tl.from("#nav",{
    opacity : 0,
    delay : 0.4
})

tl.from("#nav h1 , #nav-mid h3 , #nav-end h4 , #nav-end img  ",{
    y : -40,
    opacity : 0,
    duration : 0.9,
    stagger : 0.3
})

tl.from("#left h1 , #left-images img , #left-images span",{
    x : -500,
    opacity : 0,
    duration : 1,
    stagger : 0.5
})

tl.from("#left hr",{
    opacity : 0,
    delay : 0.4
})

tl.from("#left h4",{
    y : -30,
    opacity : 0,
    duration : 0.9,
    stagger : 0.3 
})

tl.from("#right img",{
    scale : 0.5 , 
    opacity : 0,
    duration : 0.8
})

gsap.from("#page2 .box",{
    scale : 0,
    opacity : 0 ,
    duration : 1,
    stagger : 0.3,
    scrollTrigger : {
        trigger : "#page2 .box",
        scroller : "body",
        start : "top 100%",
        end : "top 50%",
        // markers : true,
        scrub : 2
        
    }
})