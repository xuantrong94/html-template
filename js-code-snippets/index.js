// Sticky navigation

const navigation = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > navigation.offsetTop) {
    navigation.classList.add("sticky");
  } else {
    navigation.classList.remove("sticky");
  }
});

// scroll to top

const scrollToTopButton = document.getElementById("scroll-to-top-button");

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// lazy loading image
