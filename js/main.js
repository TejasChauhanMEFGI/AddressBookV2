/*==================== DARK LIGHT THEME ====================*/
const chkTheme = document.getElementById("chkTheme");

const darkMode = "dark_mode",
  lightMode = "light_mode";

const getCurrentTheme = () =>
  document.body.classList.contains(darkMode) ? darkMode : lightMode;

chkTheme.addEventListener("change", () => {
  if (chkTheme.checked) {
    document.body.classList.add("dark_mode");
  } else {
    document.body.classList.remove("dark_mode");
  }
  localStorage.setItem("selected-theme", getCurrentTheme());
});

const selectedTheme = localStorage.getItem("selected-theme");
if (selectedTheme === darkMode) {
  document.body.classList.add(darkMode);
  chkTheme.checked = true;
} else {
  document.body.classList.remove(darkMode);
  chkTheme.checked = false;
}
