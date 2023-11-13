var tl = gsap.timeline()

tl.from("#logo , #nav-mid , #nav-end", {

    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2

})

tl.from("#main-mid h1", {

    y : 100,
    duration: 1,
    delay: 0.5,
    opacity : 0,
    stagger : 0.3

})

tl.from("#image1 ,#image2,#image3,#image4 ", {

    scale : 0,
    stagger : 0.5

})

tl.from("#scroll",{

    scale : 0,
    opacity : 0

})

tl.to("#scroll",{

    y:10,
    repeat : -1,
    duration : 1,
    yoyo : true

})