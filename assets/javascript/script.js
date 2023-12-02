Shery.mouseFollower();

Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr", {
  videos: [
    "../assets/videos/0.mp4",
    "../assets/videos/2.mp4",
    "../assets/videos/3.mp4",
  ],
});

gsap.to(".f_main_left_elem", {
  scrollTrigger: {
    trigger: ".f_main",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".f_main_left_elem");
Shery.imageEffect(".f_main_right_images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});
