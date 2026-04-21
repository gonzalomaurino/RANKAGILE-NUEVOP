// Assemble frontend/index.html using extracted head + body shell
const fs = require('fs');
const path = require('path');

const RAW_DIR = __dirname;
const FRONTEND_DIR = path.resolve(RAW_DIR, '..', '..');

const head = fs.readFileSync(path.join(RAW_DIR, 'head.html'), 'utf8').trim();
const bodyAttrs = fs.readFileSync(path.join(RAW_DIR, 'body-attrs.txt'), 'utf8').trim();

const indexHtml = `<!doctype html>
<html lang="es-ES">
<head>
${head}
</head>
<body ${bodyAttrs}>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(FRONTEND_DIR, 'index.html'), indexHtml);
console.log('Wrote frontend/index.html (' + indexHtml.length + ' bytes)');
