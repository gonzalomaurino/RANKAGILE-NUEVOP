// Dashboard / visualization placeholders for vignette right-side panels.
// Uses CSS variables so they adapt to light/dark.

const DashHeader = ({ title, tag }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ display: 'flex', gap: 4 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--fg-faint)', opacity: 0.4 }}></span>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--fg-faint)', opacity: 0.4 }}></span>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }}></span>
      </div>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--fg-dim)' }}>{title}</span>
    </div>
    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--accent)', padding: '3px 8px', border: '1px solid var(--accent)', borderRadius: 999 }}>{tag}</span>
  </div>
);

// GEO Visibility radar-style chart
export const DashVisibility = () => {
  const models = ['ChatGPT', 'Gemini', 'Claude', 'Perplexity', 'Copilot', 'Grok'];
  const values = [82, 74, 88, 68, 71, 59];
  return (
    <>
      <DashHeader title="geo-visibility.dash" tag="LIVE" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 4 }}>
        {models.map((m, i) => (
          <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 72, fontSize: 11, color: 'var(--fg-dim)', fontFamily: 'JetBrains Mono, monospace' }}>{m}</span>
            <div style={{ flex: 1, height: 6, background: 'var(--chart-track)', borderRadius: 3, overflow: 'hidden', position: 'relative' }}>
              <div style={{
                width: values[i] + '%',
                height: '100%',
                background: 'var(--chart-bar)',
                borderRadius: 3,
                transition: 'width 1s ease',
              }}></div>
            </div>
            <span style={{ width: 36, textAlign: 'right', fontSize: 11, color: 'var(--fg)', fontFamily: 'JetBrains Mono, monospace' }}>{values[i]}%</span>
          </div>
        ))}
      </div>
    </>
  );
};

// Traffic line chart
export const DashTraffic = () => {
  // Monotonic-ish ascending sparkline
  const pts = [22, 28, 24, 36, 42, 38, 48, 55, 62, 58, 74, 82];
  const max = 100;
  const w = 360, h = 140;
  const step = w / (pts.length - 1);
  const d = pts.map((v, i) => (i === 0 ? 'M' : 'L') + (i * step).toFixed(1) + ',' + (h - (v / max) * h).toFixed(1)).join(' ');
  const area = d + ` L${w},${h} L0,${h} Z`;
  return (
    <>
      <DashHeader title="organic-traffic.dash" tag="+148%" />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: 2 }}>
        <div>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--fg)' }}>142.8K</div>
          <div style={{ fontSize: 10, color: 'var(--fg-faint)', fontFamily: 'JetBrains Mono, monospace', marginTop: 2 }}>SESIONES / MES</div>
        </div>
        <div style={{ fontSize: 11, color: 'var(--accent)', fontFamily: 'JetBrains Mono, monospace' }}>▲ 12.4K ESTA SEMANA</div>
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
          <defs>
            <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map(y => (
            <line key={y} x1="0" y1={h * y} x2={w} y2={h * y} stroke="var(--chart-track)" strokeWidth="1" strokeDasharray="2 4" />
          ))}
          <path d={area} fill="url(#area-grad)" />
          <path d={d} fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          {pts.map((v, i) => (
            <circle key={i} cx={i * step} cy={h - (v / max) * h} r={i === pts.length - 1 ? 4 : 0} fill="var(--accent)" />
          ))}
          {pts.length && (
            <circle cx={(pts.length - 1) * step} cy={h - (pts[pts.length - 1] / max) * h} r="8" fill="var(--accent)" opacity="0.2">
              <animate attributeName="r" values="4;10;4" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
          )}
        </svg>
      </div>
    </>
  );
};

// Keyword / prompt tracking table
export const DashPrompts = () => {
  const rows = [
    { q: '"mejor agencia seo para ia"', pos: 1, d: '+4' },
    { q: '"geo marketing 2026"', pos: 3, d: '+2' },
    { q: '"cómo aparecer en chatgpt"', pos: 2, d: '+7' },
    { q: '"seo generativo españa"', pos: 4, d: '+1' },
    { q: '"optimizar para perplexity"', pos: 1, d: '—' },
  ];
  return (
    <>
      <DashHeader title="prompt-tracker.dash" tag="5 / 248" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, paddingTop: 2, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 44px 44px', padding: '6px 8px', fontSize: 10, color: 'var(--fg-faint)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em' }}>
          <span>PROMPT</span><span style={{ textAlign: 'right' }}>POS</span><span style={{ textAlign: 'right' }}>∆</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '1fr 44px 44px',
            alignItems: 'center',
            padding: '8px',
            borderRadius: 6,
            background: i % 2 ? 'var(--surface)' : 'transparent',
            fontSize: 11.5,
            color: 'var(--fg)',
          }}>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'var(--fg-dim)' }}>{r.q}</span>
            <span style={{ textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', color: r.pos <= 3 ? 'var(--accent)' : 'var(--fg)' }}>#{r.pos}</span>
            <span style={{ textAlign: 'right', fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, color: r.d === '—' ? 'var(--fg-faint)' : 'var(--accent)' }}>{r.d}</span>
          </div>
        ))}
      </div>
    </>
  );
};


