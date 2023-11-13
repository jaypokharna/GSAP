gsap.from("#box1",{
    scale : 0,
    opacity : 0,
    duration : 1 ,
    rotate : 360,
    scrollTrigger : {
        trigger : "#page1 #box1",
        scroller : "body",
        markers : true,
        start : "top 50%",
        end : "top 10%",   
        scrub : 2
    }
})

gsap.from("#box2",{
    scale : 0,
    opacity : 0,
    duration : 1 ,
    rotate : 360,
    scrollTrigger : {
        trigger : "#page2 #box2",
        scroller : "body",
        markers : false,
        start : "top 90%",
        end : "top 10%",   
        scrub : 2
    }
})

gsap.from("#box3",{
    scale : 0,
    opacity : 0,
    duration : 1 ,
    rotate : 360,
    scrollTrigger : {
        trigger : "#page3 #box3",
        scroller : "body",
        markers : false,
        start : "top 90%",
        end : "top 10%",   
        scrub : 2
    }
})

gsap.from("#box4",{
    scale : 0,
    opacity : 0,
    duration : 1 ,
    rotate : 360,
    scrollTrigger : {
        trigger : "#page4 #box4",
        scroller : "body",
        markers : false,
        start : "top 90%",
        end : "top 50%",   
        scrub : 2
    }
})