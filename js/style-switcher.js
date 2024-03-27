(() => {
  let colorSpans = document.querySelectorAll(".style-switcher .colors span");
  colorSpans.forEach((colorSpan) => {
    colorSpan.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow", "show-front");
    });
  });
  colorSpans.forEach((colorSpan) => {
    colorSpan.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow", "show-front");
    });
  });

  // toggle colors switcher
  const styleSwitcherToggler = document.querySelector(
    ".style-switcher-toggler"
  );
  if (styleSwitcherToggler) {
    styleSwitcherToggler.addEventListener("click", (event) => {
      event.stopPropagation();
      document.querySelector(".style-switcher").classList.toggle("open");
    });

    window.onscroll = function () {
      if (
        document.querySelector(".style-switcher").classList.contains("open")
      ) {
        document.querySelector(".style-switcher").classList.remove("open");
      }
    };
    document.addEventListener("click", () => {
      if (
        document.querySelector(".style-switcher").classList.contains("open")
      ) {
        document.querySelector(".style-switcher").classList.remove("open");
      }
    });
    window.addEventListener("scroll", () => {
      if (
        document.querySelector(".style-switcher").classList.contains("open")
      ) {
        document.querySelector(".style-switcher").classList.remove("open");
      }
    });
  }
})();

// hide switcher toggle when scroll
const alternateStyles = document.querySelectorAll(".alternate-style");

function changeColor() {
  const styleSwitcherToggler = document.querySelector(
    ".style-switcher-toggler"
  );
  if (styleSwitcherToggler) {
    alternateStyles.forEach((style) => {
      if (style.getAttribute("title") === localStorage.getItem("color")) {
        document.querySelector(".style-switcher").classList.remove("open");
        style.removeAttribute("disabled");
      } else {
        style.setAttribute("disabled", "true");
      }
    });
  }
}

function setActiveStyle(color) {
  localStorage.setItem("color", color);
  changeColor();
}
if (localStorage.getItem("color") !== null) {
  changeColor();
}
// dark mode
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
if (styleSwitcherToggler) {
  const dayNight = document.querySelector(".day-night");

  dayNight.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow", "show");
  });
  dayNight.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow", "show");
  });

  dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
    updateIcon();
  });

  function themMode() {
    if (localStorage.getItem("theme") !== null) {
      if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
    updateIcon();
  }
  function updateIcon() {
    if (document.body.classList.contains("dark")) {
      dayNight.querySelector("i").classList.remove("fa-moon");
      dayNight.querySelector("i").classList.add("fa-sun");
    } else {
      dayNight.querySelector("i").classList.remove("fa-sun");
      dayNight.querySelector("i").classList.add("fa-moon");
    }
  }
  window.addEventListener("load", () => {
    themMode();
  });
}
