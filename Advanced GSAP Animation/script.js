var loading1 = gsap.timeline()

function loading() {
    var a = 0;
    setInterval(function () {
        a += Math.floor(Math.random() * 18);
        if (a < 100) {
            document.querySelector("#loader h1").innerHTML = a + "%";
        }
        else {
            a = 100;
            document.querySelector("#loader h1").innerHTML = a + "%";
        }
    }, 100)
}


loading1.to("#loader h1", {
    delay: 0.5,
    duration: 1,
    onStart: loading()
})

loading1.to("#loader", {
    top: "-100vh",
    delay: 0.5,
    duration: 1.5
})


var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page1",
      scroller: "body",
      end: "top -200%",
      start: "top 0%",
      scrub: 0.5,
      pin: true
    }
  });
  
  // Add the first part of the animation
  tl.to("#page1 h1", {
    transform: "translateX(-60%)",
    fontWeight: "100"
  });
  
  // Add the second part of the animation
  tl.to("#page1 h1", {
    transform: "translateX(-120%)",
    fontWeight: "900"
  });
