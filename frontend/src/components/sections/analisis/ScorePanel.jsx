const CIRCUMFERENCE = 283;
const STATUS_LABELS = {
  excellent: 'EXCELENTE',
  good: 'BUENO',
  warning: 'REGULAR',
  poor: 'DEFICIENTE',
};

function severity(score) {
  if (score >= 75) return 'good';
  if (score >= 50) return 'warning';
  return 'poor';
}

export default function ScorePanel({ score, status, issuesCount }) {
  const sev = score >= 75 ? 'good' : score >= 50 ? 'warning' : 'poor';
  const offset = CIRCUMFERENCE - (score / 100) * CIRCUMFERENCE;
  const label = STATUS_LABELS[status] || STATUS_LABELS[severity(score)];

  return (
    <div className="ra-ana-gratis-score-panel">
      <div className={`ra-ana-gratis-score-circle is-${sev}`}>
        <svg viewBox="0 0 100 100">
          <circle className="ra-ana-gratis-score-bg" cx="50" cy="50" r="45" />
          <circle
            className="ra-ana-gratis-score-progress"
            cx="50" cy="50" r="45"
            style={{ strokeDashoffset: offset }}
          />
        </svg>
        <div className="ra-ana-gratis-score-inner">
          <span className="ra-ana-gratis-score-number">{score}</span>
          <span className="ra-ana-gratis-score-label">Score</span>
        </div>
      </div>
      <div className={`ra-ana-gratis-score-status is-${sev}`}>{label}</div>
      {issuesCount > 0 && (
        <div className="ra-ana-gratis-issues-badge">
          <span>{issuesCount}</span> problemas detectados
        </div>
      )}
    </div>
  );
}
