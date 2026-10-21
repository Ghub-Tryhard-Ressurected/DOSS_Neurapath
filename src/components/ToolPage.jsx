import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ListOrdered, Code2, Lightbulb } from 'lucide-react';

const tabs = [
  { id: 'overview',  label: 'Overview',      icon: BookOpen },
  { id: 'concepts',  label: 'Key Concepts',  icon: ListOrdered },
  { id: 'example',   label: 'In Practice',  icon: Code2 },
  { id: 'facts',     label: 'Did You Know?', icon: Lightbulb },
];

export default function TopicPage({ topic }) {
  const [active, setActive] = useState('overview');
  const Icon = topic.icon;

  return (
    <div className="topic-page" data-topic={topic.key}>

      {/* ── Hero ─────────────────────────────────── */}
      <section className="topic-page-hero">
        <div className="container">

          <Link
            to="/"
            className="btn btn-secondary"
            id={`back-btn-${topic.key}`}
            style={{ marginBottom: 28, width: 'fit-content', fontSize: '0.8rem', padding: '8px 14px' }}
          >
            <ArrowLeft size={14} /> Back
          </Link>

          <div className="topic-page-badge">{topic.category}</div>

          <div className="topic-page-title-row">
            <div className="topic-page-icon">
              <Icon size={30} />
            </div>
            <h1 className="topic-page-title">{topic.name}</h1>
          </div>

          <p className="topic-page-overview">{topic.overview}</p>

          <div className="topic-tabs" role="tablist" aria-label={`${topic.name} sections`}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${topic.key}-${tab.id}`}
                aria-selected={active === tab.id}
                aria-controls={`panel-${topic.key}-${tab.id}`}
                className={`topic-tab${active === tab.id ? ' active' : ''}`}
                onClick={() => setActive(tab.id)}
              >
                <tab.icon size={13} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Panels ───────────────────────────────── */}
      <div className="topic-page-body">
        <div className="container">

          {active === 'overview' && (
            <div id={`panel-${topic.key}-overview`} role="tabpanel">
              <OverviewPanel topic={topic} />
            </div>
          )}

          {active === 'concepts' && (
            <div id={`panel-${topic.key}-concepts`} role="tabpanel">
              <ConceptsPanel topic={topic} />
            </div>
          )}

          {active === 'example' && (
            <div id={`panel-${topic.key}-example`} role="tabpanel">
              <ExamplePanel topic={topic} />
            </div>
          )}

          {active === 'facts' && (
            <div id={`panel-${topic.key}-facts`} role="tabpanel">
              <FactsPanel topic={topic} />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

/* ── Overview Panel ──────────────────────────────── */
function OverviewPanel({ topic }) {
  const Icon = topic.icon;
  return (
    <div>
      <div style={{
        display: 'flex', gap: 20, alignItems: 'flex-start',
        padding: 32, background: 'var(--surface-solid)',
        border: '1px solid var(--border)', borderRadius: 20,
        marginBottom: 24, borderLeft: '3px solid var(--t, var(--accent))',
      }}>
        <div style={{
          flexShrink: 0, width: 52, height: 52, display: 'grid',
          placeItems: 'center', borderRadius: 14,
          background: 'var(--tg, rgba(129,140,248,0.1))',
          color: 'var(--t, var(--accent))', border: '1px solid var(--border)',
        }}>
          <Icon size={24} />
        </div>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 10, letterSpacing: '-0.02em' }}>
            What is {topic.name}?
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-dim)', lineHeight: 1.85, margin: 0 }}>
            {topic.overview}
          </p>
        </div>
      </div>

      <div style={{
        padding: 28, background: 'var(--surface-solid)',
        border: '1px solid var(--border)', borderRadius: 20,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid var(--border)',
        }}>
          <span style={{
            width: 10, height: 10, borderRadius: '50%',
            background: 'var(--t, var(--accent))', display: 'inline-block',
            boxShadow: '0 0 8px var(--t, var(--accent))',
          }} />
          <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Why this matters</h3>
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.8, margin: 0 }}>
          <strong style={{ color: 'var(--text)' }}>{topic.name}</strong> falls under{' '}
          <span style={{ color: 'var(--t, var(--accent))', fontWeight: 600 }}>{topic.category}</span>.{' '}
          {topic.description}
        </p>
        <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {[
            topic.category,
            `${topic.steps.length} key concepts`,
            `${topic.facts.length} insights`,
          ].map((tag) => (
            <span key={tag} style={{
              padding: '6px 14px',
              background: 'var(--tg, rgba(129,140,248,0.08))',
              border: '1px solid var(--border)',
              borderRadius: 999, fontSize: '0.78rem', fontWeight: 700,
              color: 'var(--t, var(--accent))', letterSpacing: '0.04em',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Concepts Panel ──────────────────────────────── */
function ConceptsPanel({ topic }) {
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: 8, letterSpacing: '-0.03em' }}>
          Key concepts to understand
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
          Break down {topic.name} into the ideas that matter most.
        </p>
      </div>

      <div className="steps-list">
        {topic.steps.map((step, i) => (
          <div className="step-item" key={i}>
            <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="step-body">
              <h4>{step.title}</h4>
              <p>{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Example Panel ───────────────────────────────── */
function ExamplePanel({ topic }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(topic.example).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: 8, letterSpacing: '-0.03em' }}>
          In practice
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
          A concrete, real-world look at how {topic.name} plays out.
        </p>
      </div>

      <div className="code-block-wrap">
        <div className="code-block-header">
          <div className="code-block-dots">
            <span className="dot-red" />
            <span className="dot-yellow" />
            <span className="dot-green" />
          </div>
          <span>{topic.name} · in practice</span>
          <button
            onClick={handleCopy}
            id={`copy-btn-${topic.key}`}
            style={{
              padding: '4px 12px',
              background: copied ? 'rgba(74,222,128,0.15)' : 'var(--surface)',
              border: `1px solid ${copied ? 'rgba(74,222,128,0.4)' : 'var(--border)'}`,
              borderRadius: 6, color: copied ? '#4ade80' : 'var(--text-dim)',
              fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer',
              transition: 'all 200ms ease',
            }}
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>
        <div className="code-block-body">
          <pre aria-label={`${topic.name} example`}>{topic.example}</pre>
        </div>
      </div>

      <div style={{
        marginTop: 20, padding: '18px 20px',
        background: 'rgba(129,140,248,0.06)',
        border: '1px solid rgba(129,140,248,0.14)',
        borderRadius: 12, fontSize: '0.85rem',
        color: 'var(--text-dim)', lineHeight: 1.7,
      }}>
        💡 <strong style={{ color: 'var(--text)' }}>Remember:</strong>{' '}
        Real-world AI landscapes change fast. Use this as a mental model, then verify with current sources.
      </div>
    </div>
  );
}

/* ── Facts Panel ─────────────────────────────────── */
function FactsPanel({ topic }) {
  const Icon = topic.icon;
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: 8, letterSpacing: '-0.03em' }}>
          Did you know?
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
          Surprising facts and key insights about {topic.name}.
        </p>
      </div>

      <div className="facts-grid">
        {topic.facts.map((fact, i) => (
          <div className="fact-card" key={i}>
            <div className="fact-icon"><Icon size={18} /></div>
            <div>
              <h4>{fact.title}</h4>
              <p>{fact.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 24, padding: '24px 28px',
        background: 'linear-gradient(135deg, var(--tg, rgba(129,140,248,0.08)), rgba(192,132,252,0.04))',
        border: '1px solid var(--border)', borderRadius: 16,
        display: 'flex', gap: 16, alignItems: 'center',
      }}>
        <div style={{
          flexShrink: 0, width: 44, height: 44, display: 'grid',
          placeItems: 'center', borderRadius: 12,
          background: 'var(--tg, rgba(129,140,248,0.12))',
          color: 'var(--t, var(--accent))',
        }}>
          <Icon size={20} />
        </div>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.75 }}>
          <strong style={{ color: 'var(--text)' }}>The big takeaway:</strong>{' '}
          {topic.name} is about <span style={{ color: 'var(--t, var(--accent))', fontWeight: 600 }}>
            {topic.category.toLowerCase()}
          </span> — and {topic.description.toLowerCase()}
        </p>
      </div>
    </div>
  );
}
