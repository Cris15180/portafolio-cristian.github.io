window.addEventListener("load", () => {
  document.body.style.visibility = "visible";
});

gsap.from(".fto", {
x: -50,
  opacity: 0.1,
  duration: 2,
  stagger: 0.2
});

gsap.from(".sobre-mi", {
  x: 50,
  opacity: 0,
  duration: 1,
  stagger: 1
});
