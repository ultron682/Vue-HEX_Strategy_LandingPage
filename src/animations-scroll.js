function animateHtml() {
    var elements;
    var windowHeight;

    function onResize() {
      windowHeight = window.innerHeight;
    }

    function init() {
      elements = document.querySelectorAll(".hidden-for-anim");
      windowHeight = window.innerHeight;
    }

    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;

        if (
          positionFromTop - windowHeight <= 0 &&
          element.classList.contains("hidden-for-anim")
        ) {
          const targetAnim = element.getAttribute("show-anim");
          if (targetAnim !== null) {
            element.classList.add(targetAnim);
          } else {
            element.classList.add("fade-in-anim"); // Default anim
          }

          element.removeAttribute("show-anim");
          element.classList.remove("hidden-for-anim");
        }
      }
    }

    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", onResize);

    init();
    checkPosition();
}

export default animateHtml;
