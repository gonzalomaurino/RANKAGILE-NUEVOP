# RankAgile Fullstack

Migración del export estático de WordPress (Simply Static) a un monorepo Node + React.

## Estructura

```
/
├── frontend/      React + Vite — home migrado a componentes JSX
│   ├── public/    Assets estáticos originales de WP (wp-content, wp-includes, sitemaps, favicons, otras páginas)
│   └── src/
│       ├── components/   Header, Footer, Layout, sections/*
│       ├── assets/       Assets que Vite procesa (bundled)
│       ├── hooks/        useLegacyScripts — carga los scripts Divi tras el mount
│       ├── services/     Cliente HTTP hacia /api
│       └── raw/          Fragmentos HTML extraídos del export original
└── api/           Node.js + Express
    ├── routes/ services/ repositories/ models/ middlewares/ data/ legacy/
    ├── app.js
    └── db.js
```

## Puesta en marcha

```bash
# Frontend (http://localhost:5173)
cd frontend
npm install
npm run dev

# API (http://localhost:3001)
cd api
npm install
npm run dev
```

El dev server de Vite proxea `/api/*` al backend en `localhost:3001`.
