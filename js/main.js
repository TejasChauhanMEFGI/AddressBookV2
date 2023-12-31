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

/*==================== CONTAINER SHOW / HIDE ====================*/
const container = document.getElementById("container"),
  contactItem = document.querySelectorAll(".contact-item"),
  containerClose = document.getElementById("nav-before-btn"),
  addBtn = document.getElementById("add-btn");

/*===== DETAILS SHOW =====*/
if (contactItem) {
  contactItem.forEach((n) =>
    n.addEventListener("click", () => {
      container.classList.add("show");
    })
  );
}
if (addBtn) {
  addBtn.addEventListener("click", () => {
    container.classList.add("show");
  });
}
/*===== DETAILS HIDE =====*/
if (containerClose) {
  containerClose.addEventListener("click", () => {
    container.classList.remove("show");
  });
}

/*==================== ADD/EDIT DETAILS ====================*/
/*===== FORM VALIDATIONS =====*/
const forms = document.querySelectorAll(".needs-validation");

Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});
