// SETTING VARABLE
let root = document.querySelector(":root");
let dark = true;
let stars_color = "black";

// FUNCTION TO CREATE MULTIPLE STARS
function multiple_star(n, color) {
  let box_shadow = `${Math.floor(Math.random() * 2000)}px ${Math.floor(
    Math.random() * 2000
  )}px ${color}`;

  for (let i = 2; i < n; i++) {
    box_shadow = `${box_shadow}, ${Math.floor(
      Math.random() * 2000
    )}px ${Math.floor(Math.random() * 2000)}px ${color}`;
  }
  return box_shadow;
}

// DARKMODE FUNCTION
function darkMode() {
  if (dark) {
    dark = false;
    stars_color = "white";
  } else {
    dark = true;
    stars_color = "red";
  }
  console.log(dark);
  console.log(stars_color);

  root.style.setProperty("--shadows-small", multiple_star(700, stars_color));
  root.style.setProperty("--shadows-medium", multiple_star(200, stars_color));
  root.style.setProperty("--shadows-big", multiple_star(100, stars_color));
}

// APPEL DE FONCTIONS ET CHANGEMENTS CSS
root.style.setProperty("--shadows-small", multiple_star(700, stars_color));
root.style.setProperty("--shadows-medium", multiple_star(200, stars_color));
root.style.setProperty("--shadows-big", multiple_star(100, stars_color));
