// SETTING VARABLE
let root = document.querySelector(":root");

// FUNCTION TO CREATE #N STARS
function multiple_star(n) {
  let box_shadow = `${Math.floor(Math.random() * 3000)}px ${Math.floor(
    Math.random() * 3000
  )}px var(--stars-color)`;

  for (let i = 2; i < n; i++) {
    box_shadow = `${box_shadow}, ${Math.floor(
      Math.random() * 3000
    )}px ${Math.floor(Math.random() * 3000)}px var(--stars-color)`;
  }
  return box_shadow;
}

// DARKMODE/LIGHT FUNCTION
function darkMode() {
  root.style.setProperty(
    "--night-gradient",
    "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)"
  );
  root.style.setProperty("--stars-color", "white");
  document
    .getElementById("light")
    .style.setProperty("background-color", "transparent");
  document
    .getElementById("dark")
    .style.setProperty("background-color", "var(--stars-color)");
}

function lightMode() {
  root.style.setProperty(
    "--night-gradient",
    "radial-gradient(ellipse at bottom, #ececec 0%, #c4c4c4 100%)"
  );
  root.style.setProperty("--stars-color", "black");
  document
    .getElementById("dark")
    .style.setProperty("background-color", "transparent");
  document
    .getElementById("light")
    .style.setProperty("background-color", "var(--stars-color)");
}

// PARALLAX FUCNTION
function parallax(event) {
  this.querySelectorAll("body .star").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;
    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// CALLING FUNCTIONS AND  CHANGING CSS
const creation_stars_small = multiple_star(700);
const creation_stars_medium = multiple_star(200);
const creation_stars_big = multiple_star(100);
root.style.setProperty("--shadows-small", creation_stars_small);
root.style.setProperty("--shadows-medium", creation_stars_medium);
root.style.setProperty("--shadows-big", creation_stars_big);

document.addEventListener("mousemove", parallax);
document.addEventListener("scroll", parallax);
