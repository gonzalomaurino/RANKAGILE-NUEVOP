# RankAgile — Requerimientos Técnicos de Integración SEO

Documento de referencia para poner en producción la herramienta de análisis
SEO incorporada en `/analisis-seo-gratuito`. Incluye todo lo que **ya quedó
integrado**, lo que **requiere una API key para activarse**, y cómo obtener
cada credencial.

---

## 1. Estado actual de la integración

### 1.1 Módulos funcionales sin configuración adicional

Estos módulos corren **con sólo arrancar el backend** (ya usan fetch nativo +
Cheerio + heurísticas propias):

| Módulo | Archivo | Cubre |
| --- | --- | --- |
| SEO On-Page | `api/services/seo/analyzers/onPage.js` | Title, meta description, H1-H6, canonical, OG/Twitter, alt text, densidad de keywords, ratio texto/HTML, duplicados, longitud |
| SEO Técnico | `api/services/seo/analyzers/technical.js` | robots.txt, sitemap.xml, HTTPS/SSL, redirects, status HTTP, noindex, canonical conflicts, schema JSON-LD, hreflang, URL amigable, profundidad |
| Rendimiento (fallback) | `api/services/seo/analyzers/performance.js` | TTFB medido, peso HTML, recursos bloqueantes, formatos de imagen modernos, lazy-load, cache headers |
| Usabilidad Móvil | `api/services/seo/analyzers/mobile.js` | Viewport, media queries, tamaño de fuente, overflow inline |
| Off-Page (fallback) | `api/services/seo/analyzers/offPage.js` | Detección de perfiles sociales, `sameAs` en JSON-LD |
| Servidor / Estructura | `api/services/seo/analyzers/server.js` | CMS/stack detection, compresión GZIP/Brotli, WWW ↔ non-WWW, enlaces internos |
| GEO (SEO + IA) | `api/services/seo/analyzers/geo.js` | Preguntas en headings, Schema FAQPage, HTML5 semántico, respuestas directas (diferenciador sección 12) |

### 1.2 Infraestructura ya integrada

| Capa | Estado | Notas |
| --- | --- | --- |
| Rate limiting por IP | ✅ Activo (5/día) | `api/middlewares/rateLimit.js`. Configurable con `RATE_LIMIT_FREE` y `RATE_LIMIT_WINDOW_MS` |
| Caché LRU 24h | ✅ Activo | `api/services/seo/cache.js`. TTL configurable con `SEO_CACHE_TTL_MS` |
| Generación PDF (Puppeteer) | ✅ Instalado | `puppeteer@23` como `optionalDependency`. Desactivable con `PDF_ENABLED=false` |
| PostgreSQL | ⚙️ Opt-in | Migraciones automáticas en `api/db.js`. Si no hay `DATABASE_URL` se usa fallback in-memory |
| Lead capture para PDF | ✅ Activo | `POST /api/seo/report/:id/pdf` — exige nombre + email |

---

## 2. API keys que faltan y cómo obtenerlas

**Importante:** todas son **opcionales**. Sin ellas, el backend usa fallbacks
internos y el reporte sigue funcionando — pero estas claves elevan la calidad
del análisis al nivel de SEOptimer / Semrush.

### 2.1 Google PageSpeed Insights API `PAGESPEED_API_KEY`

**Qué desbloquea:** Core Web Vitals reales medidos por Lighthouse en la
infraestructura de Google — LCP (Largest Contentful Paint), CLS (Cumulative
Layout Shift) e INP (Interaction to Next Paint). Cubre el requerimiento 4.3 al
100%.

**Costo:** gratuito. Cuota por defecto: 25.000 queries/día, 400 queries/100
segundos (más que suficiente para el free tier de la herramienta).

**Cómo obtenerla:**

1. Ir a <https://console.cloud.google.com/>
2. Crear un proyecto (o seleccionar uno existente).
3. En el menú lateral: **APIs & Services → Library**.
4. Buscar **"PageSpeed Insights API"** y hacer clic en **Enable**.
5. Ir a **APIs & Services → Credentials → Create Credentials → API Key**.
6. Copiar la clave generada.
7. (Recomendado) Restringir la clave: en el detalle de la key, en
   **API restrictions** seleccionar sólo *PageSpeed Insights API*; en
   **Application restrictions** limitar por IP del servidor Railway.
8. Pegar la clave en Railway → Variables de entorno:
   ```
   PAGESPEED_API_KEY=AIzaSy...
   ```

Doc oficial: <https://developers.google.com/speed/docs/insights/v5/get-started>

---

### 2.2 Backlinks / Domain Authority

El módulo Off-Page (sección 4.5 del requerimientos.md) necesita una fuente
externa para backlinks reales. El stack tiene conectores stub listos — elegí
**una** de las tres opciones:

#### Opción A — Moz API (recomendada para empezar)

**Qué desbloquea:** Domain Authority, Page Authority, backlinks totales,
dominios de referencia únicos, perfil dofollow/nofollow.

**Costo:** free tier limitado (25.000 requests/mes con plan Standard; el plan
gratuito permite pruebas limitadas).

**Cómo obtenerla:**

1. Crear cuenta en <https://moz.com/products/api>.
2. Suscribirse al plan (hay trial de 30 días).
3. En el dashboard ir a **Account → API**.
4. Copiar el **Access ID** y el **Secret Key**.
5. Combinar en un solo string y guardarlo en Railway:
   ```
   MOZ_API_KEY=access_id:secret_key
   ```

Doc: <https://moz.com/help/links-api/getting-started>

#### Opción B — DataForSEO (mejor relación precio/datos)

**Qué desbloquea:** backlinks, DA/PA equivalent, análisis de competencia,
SERP data, keywords.

**Costo:** pay-per-request. Aprox. US$0.05 por 1000 backlinks analizados.
No hay free tier pero sí trial de US$1 al registrarse.

**Cómo obtenerla:**

1. Registrarse en <https://dataforseo.com/>.
2. En el dashboard → **API Dashboard → Your Credentials**.
3. Copiar el login y password.
4. En Railway:
   ```
   DATAFORSEO_API_KEY=login:password
   ```

Doc: <https://docs.dataforseo.com/v3/>

#### Opción C — Ahrefs API (premium)

Más cara (plan mínimo US$500/mes) pero con los mejores datos del mercado.
Recomendado sólo cuando se lance el plan Pro.

---

### 2.3 PostgreSQL `DATABASE_URL`

**Qué desbloquea:**
- Persistencia de leads (hoy en memoria, se pierden al reiniciar).
- Historial de análisis (requerimiento 8 — versión Pro con datos históricos).
- Consulta posterior del informe por ID (`GET /api/seo/report/:id`).

**Cómo obtenerla en Railway:**

1. En tu proyecto Railway → **New → Database → Add PostgreSQL**.
2. Railway provisiona la DB y crea la variable `DATABASE_URL` automáticamente
   en el servicio enlazado.
3. No hay que crear tablas manualmente — `api/db.js` ejecuta las migraciones
   al arrancar (`leads`, `seo_analyses`).

Costo en Railway: US$5/mes mínimo (plan Hobby) u on-demand en el plan Pro.

---

### 2.4 (Opcional) Analytics

Pendientes por definir (ver pregunta abierta del requerimientos.md sección 11):

| Herramienta | Variable sugerida | Cuándo |
| --- | --- | --- |
| Google Analytics 4 | `VITE_GA4_ID` | Trackear análisis realizados, conversiones a lead |
| Mixpanel | `VITE_MIXPANEL_TOKEN` | Funnels de conversión tool → plan pago |
| Segment | `VITE_SEGMENT_KEY` | Si se quiere abstraer destino de eventos |

No están instaladas todavía; agregar cuando se defina el stack de métricas.

---

## 3. Variables de entorno — tabla completa

Copiar a Railway → Variables:

```env
# Requerido
NODE_ENV=production
PORT=8000

# Recomendado (Railway lo inyecta al enlazar Postgres)
DATABASE_URL=postgresql://user:pass@host:5432/rankagile

# Opcional: Core Web Vitals reales
PAGESPEED_API_KEY=

# Opcional: backlinks (elegir una)
MOZ_API_KEY=
DATAFORSEO_API_KEY=

# Ajustes del analizador (default en paréntesis)
SEO_REQUEST_TIMEOUT_MS=20000       # (20s)
SEO_ANALYSIS_TIMEOUT_MS=45000      # (45s — requerimiento 7.1)
SEO_CACHE_TTL_MS=86400000          # (24h)
SEO_CACHE_MAX=500
SEO_USER_AGENT=Mozilla/5.0 (compatible; RankAgileBot/1.0; +https://rankagile.com/bot)
SEO_MAX_HTML_BYTES=5000000         # (5 MB)

# Rate limiting (requerimiento 7.1)
RATE_LIMIT_FREE=5                  # análisis diarios por IP
RATE_LIMIT_WINDOW_MS=86400000      # (24h)

# PDF
PDF_ENABLED=true
```

---

## 4. Endpoints disponibles

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/api/health` | Health check |
| `GET` | `/api/seo/analyze?url=<url>` | Ejecuta el análisis. Rate-limited. Cacheado 24h. |
| `GET` | `/api/seo/report/:id` | Devuelve un informe previo por ID |
| `POST` | `/api/seo/report/:id/pdf` | Genera PDF. Body: `{ nombre, email, empresa? }`. Crea lead. |
| `POST` | `/api/contact` | Formulario de contacto genérico (pre-existente) |

---

## 5. Deploy checklist

Antes de pushear a producción, verificar:

- [ ] `DATABASE_URL` seteado en Railway (Postgres addon enlazado).
- [ ] `PAGESPEED_API_KEY` (opcional — lo más costo/beneficio positivo).
- [ ] `MOZ_API_KEY` o `DATAFORSEO_API_KEY` (opcional — sólo si el plan de
      marketing necesita backlinks reales ya).
- [ ] `RATE_LIMIT_FREE` ajustado si se quiere algo distinto a 5/día.
- [ ] Puppeteer: en Railway usar imagen base con Chromium ya instalado o
      agregar `chrome-aws-lambda`. Si el deploy falla por Puppeteer, setear
      `PDF_ENABLED=false` temporalmente (la UI esconde el CTA automáticamente
      cuando recibe 503).
- [ ] CORS: si el frontend se sirve en un dominio distinto al backend,
      configurar `CORS_ORIGIN`.

---

## 6. Fases pendientes del requerimientos.md

Lo que quedó **scaffolded pero no cableado** — listo para activar sin
reescribir código:

1. **Analytics** (sección 11) — hooks de tracking pendientes.
2. **Monitoreo continuo + alertas** (versión Pro, sección 8) — requiere
   scheduler (cron) y stack de notificaciones.
3. **Comparativa con competidores** (versión Pro) — requiere guardar análisis
   por dominio raíz y endpoint de diff.
4. **Embed externo tipo SEOptimer** (pregunta abierta 11) — requiere
   iframe-friendly CSP y widget standalone.
5. **i18n** (pregunta abierta 11) — requiere framework (next-intl / i18next).
6. **Queue asíncrona con Bull** (sugerencia 7.3) — hoy el análisis es
   sincrónico. Para escalar, envolver `runSeoAnalysis` en un job.
