// fill skills
let progressBars = document.querySelectorAll(".skills .progress-bar");
let skillsContainer = document.querySelector(".about-section .about-info");
let numberProgressBars = document.querySelectorAll(
  ".about-section .skills .skill-item .progress-bar span"
);

// start cursor
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll("nav .nav-links li");
let linkItems = document.querySelectorAll(".link-item");
let portfolioFilters = document.querySelectorAll(
  ".portfolio-section .portfolio-filter .filter-item"
);
let aboutTabs = document.querySelectorAll(
  ".about-section .about-tabs .tap-item"
);
let socialLinks = document.querySelectorAll(
  ".about-section .about-img .social-links a"
);
let portfolioItems = document.querySelectorAll(
  ".portfolio-section .portfolio-item"
);
let btns = document.querySelectorAll(".btn-1");
let hamburgerBtnHover = document.querySelector("nav .hamburger-btn");
let ppClose = document.querySelector(
  ".portfolio-popup .pp-main .pp-main-inner .pp-close"
);
let iconHamburgerBtn = document.querySelector("nav .hamburger-btn span");
let styleSwitcher = document.querySelector(".style-switcher");
let switcherToggler = document.querySelector(".style-switcher .s-icon i");
let ppNext = document.querySelector(".portfolio-popup .pp-main .pp-next i");
let ppPrev = document.querySelector(".portfolio-popup .pp-main .pp-prev i");
let ppProjectDetailsBtn = document.querySelector(
  ".portfolio-popup .pp-main .pp-main-inner .pp-project-details-btn"
);
let logo = document.querySelector(".logo a");
let aboutBtn = document.querySelector(".home-section .home-text .btn-1");
document.addEventListener("click", () => {
  mouseCursor.classList.add("expand");
  setTimeout(() => {
    mouseCursor.classList.remove("expand");
  }, 500);
});
window.addEventListener("mousemove", cursor);
function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.transform = "translate(-50%, -50%)";
}
linkItems.forEach((linkItem) => {
  linkItem.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow", "show-front");
  });
});
linkItems.forEach((linkItem) => {
  linkItem.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow", "show-front");
  });
});
btns.forEach((btn) => {
  btn.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow", "show-front");
  });
});
btns.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow", "show-front");
  });
});
socialLinks.forEach((socialLink) => {
  socialLink.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow", "show");
  });
});
socialLinks.forEach((socialLink) => {
  socialLink.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow", "show");
  });
});
portfolioItems.forEach((portfolioItem) => {
  portfolioItem.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow", "show-front");
  });
});
portfolioItems.forEach((portfolioItem) => {
  portfolioItem.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow", "show-front");
  });
});
aboutTabs.forEach((aboutTab) => {
  aboutTab.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow", "show");
  });
});
aboutTabs.forEach((aboutTab) => {
  aboutTab.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow", "show");
  });
});
portfolioFilters.forEach((portfolioFilter) => {
  portfolioFilter.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow", "show");
  });
});
portfolioFilters.forEach((portfolioFilter) => {
  portfolioFilter.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow", "show");
  });
});

let navLis = document.querySelectorAll(".nav-menu ul li a");
navLis.forEach((navLi) => {
  navLi.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow", "show-front");
  });
});
navLis.forEach((navLi) => {
  navLi.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow", "show-front");
  });
});
document
  .querySelector(".nav-menu .close-nav-menu")
  .addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow", "show-front");
  });
document
  .querySelector(".nav-menu .close-nav-menu")
  .addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow", "show-front");
  });
logo.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow", "show");
});
logo.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow", "show");
});
ppPrev.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow", "show-front");
});
ppPrev.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow", "show-front");
});
ppNext.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow", "show-front");
});
ppNext.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow", "show-front");
});
ppClose.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow", "show-front");
});
ppClose.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow", "show-front");
});
ppProjectDetailsBtn.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow", "show-front");
});
ppProjectDetailsBtn.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow", "show-front");
});
aboutBtn.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow", "show");
});
aboutBtn.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow", "show");
});
hamburgerBtnHover.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow", "show");
});
hamburgerBtnHover.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow", "show");
});
if (switcherToggler) {
  switcherToggler.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow", "show");
  });
  switcherToggler.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow", "show");
  });
}
iconHamburgerBtn.addEventListener("mouseleave", () => {
  mouseCursor.classList.remove("link-grow", "show");
});
iconHamburgerBtn.addEventListener("mouseover", () => {
  mouseCursor.classList.add("link-grow", "show");
});
navLinks.forEach((navLink) => {
  navLink.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow", "show");
    navLink.classList.remove("hovered-link");
  });
  navLink.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow", "show");
    navLink.classList.add("hovered-link");
  });
});
// let cursor = document.querySelector("#cursor");
// let test = document.querySelector(".test");
// document.addEventListener("mousemove", (event) => {
//   test.style.backgroundPositionX = event.pageX / -4 + "px";
//   test.style.backgroundPositionY = event.pageY / -4 + "px";
//   cursor.style.top = event.pageY + "px";
//   cursor.style.left = event.pageX + "px";
// });
// end cursor
// navigation btn
const hamburgerBtn = document.querySelector(".hamburger-btn"),
  navMenu = document.querySelector(".nav-menu"),
  closeBtn = document.querySelector(".close-nav-menu");

hamburgerBtn.addEventListener("click", showNavMenu);
closeBtn.addEventListener("click", hideNavMenu);
function showNavMenu() {
  navMenu.classList.add("open");
  bodyScrollingToggle();
}
function hideNavMenu() {
  navMenu.classList.remove("open");
  fadeOutEffect();
  bodyScrollingToggle();
}
function fadeOutEffect() {
  document.querySelector(".fade-out-effect").classList.add("active");
  setTimeout(() => {
    document.querySelector(".fade-out-effect").classList.remove("active");
  }, 600);
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("link-item")) {
    if (event.target.hash !== "") {
      event.preventDefault();
      const hash = event.target.hash;
      // document.querySelector(".section.active").classList.add("hide");
      // document.querySelector(".section.active").classList.remove("active");
      // document.querySelector(hash).classList.add("active");
      // document.querySelector(hash).classList.remove("hide");
      navMenu
        .querySelector(".active")
        .classList.add("hover-in-shadow", "outer-shadow");
      navMenu
        .querySelector(".active")
        .classList.remove("inner-shadow", "active");
    }
    if (navMenu.classList.contains("open")) {
      const hash = event.target.hash;
      let headItems = document.querySelectorAll(".nav-links .link-item");
      headItems.forEach((item) => {
        item.classList.remove("active", "inner-shadow");
      });
      headItems.forEach((item) => {
        if (hash === item.hash) {
          item.classList.add("active", "inner-shadow");
        }
      });
      event.target.classList.add("active", "inner-shadow");
      event.target.classList.remove("outer-shadow", "hover-in-shadow");
      hideNavMenu();
      fadeOutEffect();
    } else {
      const hash = event.target.hash;
      let headItems = document.querySelectorAll(".nav-links .link-item");
      headItems.forEach((item) => {
        item.classList.remove("active", "inner-shadow");
      });
      headItems.forEach((item) => {
        if (hash === item.hash) {
          item.classList.add("active", "inner-shadow");
        }
      });

      let navItems = navMenu.querySelectorAll(".nav-menu-inner .link-item");
      navItems.forEach((item) => {
        if (hash === item.hash) {
          item.classList.remove("outer-shadow", "hover-in-shadow");
          item.classList.add("active", "inner-shadow");
        }
      });
    }
    const hash = event.target.hash;
    window.location.hash = hash;
  }
});
// active btn
(() => {
  const aboutSection = document.querySelector(".about-section");
  tabsContainer = document.querySelector(".about-tabs");
  tabsContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("tap-item") &&
      !event.target.classList.contains("active")
    ) {
      const target = event.target.getAttribute("data-target");
      tabsContainer
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");
      event.target.classList.add("outer-shadow", "active");
      aboutSection
        .querySelector(".tap-content.active")
        .classList.remove("active");
      aboutSection.querySelector(target).classList.add("active");
    }
  });
})();
function bodyScrollingToggle() {
  document.body.classList.toggle("stop-scrolling");
}
// start filter and popup portfolio
(() => {
  const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    popupImgContainer = popup.querySelector(".pp-main"),
    pevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");

  let itemIndex, slideIndex, screenshots;
  // filter portfolio items
  filterContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("filter-item") &&
      !event.target.classList.contains("active")
    ) {
      filterContainer
        .querySelector(".active")
        .classList.remove("active", "outer-shadow");
      event.target.classList.add("active", "outer-shadow");
      const target = event.target.getAttribute("data-target");
      portfolioItems.forEach((item) => {
        if (target == item.getAttribute("data-category") || target === "all") {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.remove("show");
          item.classList.add("hide");
        }
      });
    }
  });
  //active new filter item
  portfolioItemsContainer.addEventListener("click", (event) => {
    if (event.target.closest(".portfolio-item-inner")) {
      const portfolioItem = event.target.closest(
        ".portfolio-item-inner"
      ).parentElement;

      const itemIndex = Array.from(
        portfolioItem.parentElement.children
      ).indexOf(portfolioItem);

      screenshots = portfolioItems[itemIndex]
        .querySelector(".portfolio-item-img img")
        .getAttribute("data-screenshots");
      screenshots = screenshots.split(",");
      slideIndex = 0;
      if (screenshots.length <= 1) {
        pevBtn.style.display = "none";
        nextBtn.style.display = "none";
      } else {
        pevBtn.style.display = "block";
        nextBtn.style.display = "block";
      }
      if (portfolioItems[itemIndex].querySelector(".portfolio-item-details")) {
        const details = portfolioItems[itemIndex].querySelector(
          ".portfolio-item-details"
        ).innerHTML;
        popup.querySelector(".pp-project-details").style.display = "block";
        popup.querySelector(".pp-project-details").innerHTML = details;
      } else {
        popup.querySelector(".pp-project-details").style.display = "none";
      }
      const title = portfolioItems[itemIndex].querySelector(
        ".portfolio-item-title"
      ).innerHTML;
      popup.querySelector(".pp-title h2").innerHTML = title;
      const category = portfolioItems[itemIndex].getAttribute("data-category");
      popup.querySelector(".pp-project-category").innerHTML = category
        .split("-")
        .join(" ");
      popupFunction();
      popupSlideShow();
    }
  });
  function popupFunction() {
    popup.classList.toggle("open");
    bodyScrollingToggle();
  }
  closeBtn.addEventListener("click", () => {
    projectDetailsContainer.classList.remove("active");
    projectDetailsBtn.querySelector("i").classList.add("fa-plus");
    projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
    projectDetailsContainer.style.maxHeight = 0 + "px";
    popupFunction();
  });
  function popupSlideShow() {
    const imgSrc = screenshots[slideIndex];
    popupImg = popup.querySelector(".pp-img");
    // active loader until popupImg loaded
    popup.querySelector(".pp-loader").classList.add("active");
    popupImg.src = imgSrc;
    popupImg.onload = () => {
      popup.querySelector(".pp-loader").classList.remove("active");
    };
    popup.querySelector(".pp-counter").innerHTML =
      slideIndex + 1 + " of " + screenshots.length;
  }
  nextBtn.addEventListener("click", () => {
    if (slideIndex === screenshots.length - 1) {
      slideIndex = 0;
      popup.scrollTo(0, popupImgContainer.offsetTop);
    } else {
      slideIndex++;
      popup.scrollTo(0, popupImgContainer.offsetTop);
    }
    popupSlideShow();
  });
  pevBtn.addEventListener("click", () => {
    if (slideIndex === 0) {
      popup.scrollTo(0, popupImgContainer.offsetTop);
      slideIndex = screenshots.length - 1;
    } else {
      popup.scrollTo(0, popupImgContainer.offsetTop);
      slideIndex--;
    }
    popupSlideShow();
  });
  projectDetailsBtn.addEventListener("click", () => {
    popupDetailsToggle();
  });
  function popupDetailsToggle() {
    if (projectDetailsContainer.classList.contains("active")) {
      projectDetailsContainer.classList.remove("active");
      projectDetailsBtn.querySelector("i").classList.add("fa-plus");
      projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
      projectDetailsContainer.style.maxHeight = 0 + "px";
    } else {
      projectDetailsContainer.classList.add("active");
      projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
      projectDetailsBtn.querySelector("i").classList.add("fa-minus");
      projectDetailsContainer.style.maxHeight =
        projectDetailsContainer.scrollHeight + "px";
      popup.scrollTo(0, projectDetailsContainer.offsetTop);
    }
  }
})();
// end filter and popup portfolio

// preloader active
window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 600);
});

let effects = document.querySelectorAll(".effect-transform-y");
let xlEffects = document.querySelectorAll(".effect-transform-xl");
let xrEffects = document.querySelectorAll(".effect-transform-xr");

let homeSection = document.querySelector(".home-section");
let aboutSection = document.querySelector(".about-section");
let serviceSection = document.querySelector(".service-section");
let portfolioSection = document.querySelector(".portfolio-section");
let contactSection = document.querySelector(".contact-section");

document.addEventListener("scroll", function () {
  if (window.scrollY < aboutSection.offsetTop - 200) {
    linkItems.forEach((linkItem) => {
      if (linkItem.innerHTML == "Home") {
        linkItem.classList.add("active", "inner-shadow");
      } else {
        linkItem.classList.remove("active", "inner-shadow");
      }
    });
  } else if (
    window.scrollY > aboutSection.offsetTop - 200 &&
    window.scrollY < serviceSection.offsetTop - 200
  ) {
    linkItems.forEach((linkItem) => {
      if (linkItem.innerHTML == "About") {
        linkItem.classList.add("active", "inner-shadow");
      } else {
        linkItem.classList.remove("active", "inner-shadow");
      }
    });
  } else if (
    window.scrollY > serviceSection.offsetTop - 200 &&
    window.scrollY < portfolioSection.offsetTop - 200
  ) {
    linkItems.forEach((linkItem) => {
      if (linkItem.innerHTML == "Services") {
        linkItem.classList.add("active", "inner-shadow");
      } else {
        linkItem.classList.remove("active", "inner-shadow");
      }
    });
  } else if (
    window.scrollY > portfolioSection.offsetTop - 200 &&
    window.scrollY < contactSection.offsetTop - 200
  ) {
    linkItems.forEach((linkItem) => {
      if (linkItem.innerHTML == "Portfolio") {
        linkItem.classList.add("active", "inner-shadow");
      } else {
        linkItem.classList.remove("active", "inner-shadow");
      }
    });
  } else if (window.scrollY > contactSection.offsetTop - 200) {
    linkItems.forEach((linkItem) => {
      if (linkItem.innerHTML == "Contact") {
        linkItem.classList.add("active", "inner-shadow");
      } else {
        linkItem.classList.remove("active", "inner-shadow");
      }
    });
  }
});
document.addEventListener("scroll", function () {
  effects.forEach((effect) => {
    if (isInView(effect)) {
      effect.classList.remove("effect-transform-y");
      effect.classList.add("effect-transform-visible-y");
    } else {
      effect.classList.remove("effect-transform-visible-y");
      effect.classList.add("effect-transform-y");
    }
  });
  xrEffects.forEach((effect) => {
    if (isInView(effect)) {
      effect.classList.remove("effect-transform-xr");
      effect.classList.add("effect-transform-visible-x");
    } else {
      effect.classList.remove("effect-transform-visible-x");
      effect.classList.add("effect-transform-xr");
    }
  });
  xlEffects.forEach((effect) => {
    if (isInView(effect)) {
      effect.classList.remove("effect-transform-xl");
      effect.classList.add("effect-transform-visible-x");
    } else {
      effect.classList.remove("effect-transform-visible-x");
      effect.classList.add("effect-transform-xl");
    }
  });
  if (window.scrollY + 200 >= skillsContainer.offsetTop) {
    numberProgressBars.forEach((numberProgressBar) => {
      numberProgressBar.style.opacity = "1";
    });
    progressBars.forEach((progressBar) => {
      progressBar.style.width = progressBar.dataset.width;
    });
  } else {
    numberProgressBars.forEach((numberProgressBar) => {
      numberProgressBar.style.opacity = "0";
    });
    progressBars.forEach((progressBar) => {
      progressBar.style.width = "0";
    });
  }
});
effects.forEach((effect) => {
  if (isInView(effect)) {
    effect.classList.remove("effect-transform-y");
    effect.classList.add("effect-transform-visible-y");
  } else {
    effect.classList.remove("effect-transform-visible-y");
    effect.classList.add("effect-transform-y");
  }
});
xrEffects.forEach((effect) => {
  if (isInView(effect)) {
    effect.classList.remove("effect-transform-xr");
    effect.classList.add("effect-transform-visible-x");
  } else {
    effect.classList.remove("effect-transform-visible-x");
    effect.classList.add("effect-transform-xr");
  }
});
xlEffects.forEach((effect) => {
  if (isInView(effect)) {
    effect.classList.remove("effect-transform-xl");
    effect.classList.add("effect-transform-visible-x");
  } else {
    effect.classList.remove("effect-transform-visible-x");
    effect.classList.add("effect-transform-xl");
  }
});
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < window.innerHeight - 150;
}
