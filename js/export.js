// export.js

export function getExportableHTML(previewElement) {
  // Get the current preview HTML
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>404 - Not Found</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  ${previewElement.innerHTML}
</body>
</html>
  `.trim();

  return html;
}

export function copyHTMLToClipboard(htmlString) {
  navigator.clipboard.writeText(htmlString)
    .then(() => {
      alert('HTML copied to clipboard!');
    })
    .catch(err => {
      console.error('Copy failed:', err);
    });
}