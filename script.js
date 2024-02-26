// SETTING VARABLE
let root = document.querySelector(":root");
let screen_w = screen.width;
let screen_h = screen.height;

// FUNCTION TO CREATE STARS
function multiple_star(n) {
  let box_shadow = `${Math.floor(
    Math.random() * (screen_w * 1.5)
  )}px ${Math.floor(Math.random() * (screen_h * 1.5))}px var(--stars-color)`;

  for (let i = 2; i < n; i++) {
    box_shadow = `${box_shadow}, ${Math.floor(
      Math.random() * (screen_w * 1.5)
    )}px ${Math.floor(Math.random() * (screen_h * 1.5))}px var(--stars-color)`;
  }
  return box_shadow;
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

// LANGUAGE FUNCTIONS
function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = langData[key];
  });
} // update content

function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
} // set user's preferred language

async function fetchLanguageData(lang) {
  const response = await fetch(`languages/${lang}.json`);
  return response.json();
} // fetch language data

async function changeLanguage(lang) {
  await setLanguagePreference(lang);

  const langData = await fetchLanguageData(lang);
  updateContent(langData);
} // change language

// THEME FUNCTIONS
function setThemePreference(theme) {
  localStorage.setItem("theme", theme);
}

async function changeMode(theme) {
  await setThemePreference(theme);

  switch (theme) {
    case "light":
      root.style.setProperty(
        "--night-gradient",
        "radial-gradient(ellipse at bottom, #ececec 0%, #c4c4c4 100%)"
      );
      root.style.setProperty("--stars-color", "black");
      document.getElementById("dark_box").innerHTML = "□";
      document.getElementById("light_box").innerHTML = "■";
      break;

    case "dark":
      root.style.setProperty(
        "--night-gradient",
        "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)"
      );
      root.style.setProperty("--stars-color", "white");
      document.getElementById("dark_box").innerHTML = "■";
      document.getElementById("light_box").innerHTML = "□";
      break;

    default:
      root.style.setProperty(
        "--night-gradient",
        "radial-gradient(ellipse at bottom, #ececec 0%, #c4c4c4 100%)"
      );
      root.style.setProperty("--stars-color", "black");
      document.getElementById("dark_box").innerHTML = "□";
      document.getElementById("light_box").innerHTML = "■";
  }
}

// NAV FUNCTIONS
function about() {
  document.getElementById("li_about").classList.add("is-selected");
  document.getElementById("li_projects").classList.remove("is-selected");
  document.getElementById("li_contact").classList.remove("is-selected");
  document.getElementById("about_me").classList.add("is-selected");
  document.getElementById("projects").classList.remove("is-selected");
  document.getElementById("contact").classList.remove("is-selected");
  document.getElementById("header").classList.toggle("on-top");
}

function projects() {
  document.getElementById("li_about").classList.remove("is-selected");
  document.getElementById("li_projects").classList.add("is-selected");
  document.getElementById("li_contact").classList.remove("is-selected");
  document.getElementById("about_me").classList.remove("is-selected");
  document.getElementById("projects").classList.add("is-selected");
  document.getElementById("contact").classList.remove("is-selected");
}

function contact() {
  document.getElementById("li_about").classList.remove("is-selected");
  document.getElementById("li_projects").classList.remove("is-selected");
  document.getElementById("li_contact").classList.add("is-selected");
  document.getElementById("about_me").classList.remove("is-selected");
  document.getElementById("projects").classList.remove("is-selected");
  document.getElementById("contact").classList.add("is-selected");
}

// CALLING FUNCTIONS AND  CHANGING CSS
const creation_stars_small = multiple_star(800);
const creation_stars_medium = multiple_star(400);
const creation_stars_big = multiple_star(150);
root.style.setProperty("--shadows-small", creation_stars_small);
root.style.setProperty("--shadows-medium", creation_stars_medium);
root.style.setProperty("--shadows-big", creation_stars_big);

document.addEventListener("mousemove", parallax);
document.addEventListener("drag", parallax);

window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "en";
  const langData = await fetchLanguageData(userPreferredLanguage);
  const userPreferredTheme = localStorage.getItem("theme");
  changeMode(userPreferredTheme);
  updateContent(langData);
}); // call updateContent() on page load

// load animation
window.addEventListener("load", function () {
  window.setTimeout(function () {
    document.getElementById("body").classList.remove("is-preloaded");
  }, 100);
});
