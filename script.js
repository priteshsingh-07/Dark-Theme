// Function that swaps the stylesheet.
function changeTheme() {
  let theme = document.getElementById("theme");
  let lightTheme = "light.css";
  let darkTheme = "dark.css";
  // Checking what stylesheet the link tag has.
  if (theme.getAttribute("href") == lightTheme) {
    theme.href = darkTheme;
  } else {
    theme.href = lightTheme;
  }
}
