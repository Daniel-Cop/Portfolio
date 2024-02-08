// SETTING VARABLE
let root = document.querySelector(":root");
let dark = true;

// FUNCTION TO CREATE #N STARS
function multiple_star(n) {
  let box_shadow = `${Math.floor(Math.random() * 2000)}px ${Math.floor(
    Math.random() * 2000
  )}px var(--stars-color)`;

  for (let i = 2; i < n; i++) {
    box_shadow = `${box_shadow}, ${Math.floor(
      Math.random() * 2000
    )}px ${Math.floor(Math.random() * 2000)}px var(--stars-color)`;
  }
  return box_shadow;
}

// DARKMODE FUNCTION
function darkMode() {
  if (dark) {
    dark = false;
    root.style.setProperty(
      "--night-gradient",
      "radial-gradient(ellipse at bottom, #f0ff9d 0%, #ffea76 100%)"
    );
    root.style.setProperty("--stars-color", "black");
  } else {
    dark = true;
    root.style.setProperty(
      "--night-gradient",
      "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)"
    );
    root.style.setProperty("--stars-color", "white");
  }
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
