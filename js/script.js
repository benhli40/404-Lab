import { generate404, getCurrentTheme } from './generator.js';
import { getExportableHTML, copyHTMLToClipboard } from './export.js';

const preview = document.getElementById('preview');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const themeSelector = document.getElementById('theme-selector');
const themeLabel = document.getElementById('theme-label');

// Refresh function with optional forced theme
function refresh404() {
  const selectedTheme = themeSelector.value;
  generate404(selectedTheme);
  themeLabel.textContent = `🖌️ Theme: ${getCurrentTheme()}`;
}

// Events
window.addEventListener('DOMContentLoaded', () => {
  refresh404();
});

generateBtn.addEventListener('click', refresh404);

themeSelector.addEventListener('change', refresh404);

copyBtn.addEventListener('click', () => {
  const html = getExportableHTML(preview);
  copyHTMLToClipboard(html);
});

// Optional: Future support for download/export toggle could go here
// Optional: Auto-generate 404s every X seconds for "demo mode"
// Optional: Add more themes or messages dynamically