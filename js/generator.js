// generator.js

const messages = [
  "Oops. This page packed its bags and left.",
  "404. You found the void.",
  "Nothing here. Just echoes.",
  "Page not found, but existential dread located.",
  "Lost? This page sure is.",
  "Gone. Like your hopes during deployment.",
  "Here lies a broken link. RIP."
];

const themes = [
  {
    name: "Glitch",
    class: "theme-glitch"
  },
  {
    name: "Neon",
    class: "theme-neon"
  },
  {
    name: "Void",
    class: "theme-void"
  }
];

const previewContainer = document.getElementById("preview");
let lastTheme = null;

export function generate404(forcedTheme = null) {
  const message = messages[Math.floor(Math.random() * messages.length)];
  let theme;

  if (forcedTheme && forcedTheme !== "random") {
    theme = themes.find(t => t.name === forcedTheme) || themes[0];
  } else {
    theme = themes[Math.floor(Math.random() * themes.length)];
  }

  lastTheme = theme.name;

  previewContainer.className = `preview ${theme.class}`;
  previewContainer.innerHTML = `
    <div class="error-code">404</div>
    <p class="error-message">${message}</p>
  `;
}

export function getCurrentTheme() {
  return lastTheme || "Unknown";
}