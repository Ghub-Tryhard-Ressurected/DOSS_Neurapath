import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Search, Zap, Brain, Globe,
  Sparkles, Smartphone, Rocket, GraduationCap,
  TrendingUp, Users, BookOpen,
} from 'lucide-react';

import { topics } from '../data/topics';
import TopicCard from '../components/ToolCard';

/* Visual flow showing how AI works at a high level */
const aiFlow = [
  { label: 'Data',       icon: Brain,          key: 'fundamentals', color: '#a78bfa' },
  { label: 'Models',     icon: Sparkles,        key: 'breakthroughs', color: '#34d399' },
  { label: 'Landscape',  icon: Globe,           key: 'landscape',    color: '#22d3ee' },
  { label: 'Daily Life', icon: Smartphone,      key: 'daily-life',   color: '#fbbf24' },
  { label: 'Future',     icon: Rocket,          key: 'future',       color: '#f472b6' },
  { label: 'Careers',    icon: GraduationCap,   key: 'careers',      color: '#60a5fa' },
];

const whyCards = [
  {
    icon: TrendingUp,
    title: 'AI is moving fast',
    desc: 'The capabilities that shocked experts in 2022 are now standard features in everyday apps. Staying informed is no longer optional.',
  },
  {
    icon: Users,
    title: 'For everyone, not just engineers',
    desc: 'You don\'t need to code to understand AI. This guide speaks plainly — explaining concepts, tradeoffs, and futures in clear language.',
  },
  {
    icon: BookOpen,
    title: 'Structured learning path',
    desc: 'From fundamentals to career roadmaps, each section builds on the last — giving you a complete mental model of the AI era.',
  },
];

export default function Home() {
  const [search, setSearch] = useState('');

  const filtered = topics.filter((t) =>
    `${t.name} ${t.description} ${t.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-orb hero-orb-1" aria-hidden="true" />
        <div className="hero-orb hero-orb-2" aria-hidden="true" />
        <div className="hero-orb hero-orb-3" aria-hidden="true" />

        <div className="container hero-content">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            Your guide to the AI era
          </div>

          <h1>
            <span className="hero-line-plain">The world changed.</span>
            <span className="hero-line-gradient">Understand how.</span>
          </h1>

          <p className="hero-description">
            AI is reshaping everything — work, creativity, science, and daily life.
            NeuralPath explains what it is, who's building it, where it's going,
            and how you can be part of it. No jargon. No hype. Just clarity.
          </p>

          <div className="hero-actions">
            <a href="#topics" className="btn btn-primary" id="hero-cta-explore">
              Explore topics <ArrowRight size={17} />
            </a>
            <Link to="/fundamentals" className="btn btn-secondary" id="hero-cta-start">
              Start with fundamentals
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>6</strong>
              <span>Core Topics</span>
            </div>
            <div className="hero-stat">
              <strong>30+</strong>
              <span>Key Concepts</span>
            </div>
            <div className="hero-stat">
              <strong>∞</strong>
              <span>Things to explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why NeuralPath ──────────────────────────────── */}
      <section className="page-section" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}>
            {whyCards.map((c) => (
              <div key={c.title} style={{
                display: 'flex', gap: 16, padding: 24,
                background: 'var(--surface-solid)',
                border: '1px solid var(--border)', borderRadius: 16,
                alignItems: 'flex-start',
              }}>
                <div style={{
                  flexShrink: 0, width: 42, height: 42,
                  display: 'grid', placeItems: 'center',
                  borderRadius: 12, background: 'rgba(129,140,248,0.1)',
                  color: 'var(--accent)', border: '1px solid var(--border)',
                }}>
                  <c.icon size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 6 }}>{c.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Ecosystem Flow ───────────────────────────── */}
      <section className="page-section ecosystem-section" id="ecosystem">
        <div className="container">
          <div className="section-label">The Big Picture</div>
          <h2 className="section-heading">The AI landscape at a glance.</h2>
          <p className="section-description">
            Six connected dimensions — from foundational concepts to career paths.
            Click any node to dive deep.
          </p>

          <div className="ai-stack-flow" aria-label="AI learning landscape diagram">
            {aiFlow.map((node, i) => {
              const Icon = node.icon;
              const topic = topics[i];
              return (
                <div className="stack-step" key={node.key}>
                  <Link
                    to={topic.path}
                    className="stack-node"
                    data-topic={node.key}
                    title={`Explore ${topic.name}`}
                  >
                    <div className="stack-node-icon">
                      <Icon size={20} />
                    </div>
                    <span className="stack-node-label">{node.label}</span>
                  </Link>

                  {i < aiFlow.length - 1 && (
                    <div className="stack-arrow">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="stack-note">
            Each topic builds on the previous — but you can start anywhere.
          </p>
        </div>
      </section>

      {/* ── Topics Grid ─────────────────────────────────── */}
      <section className="page-section topics-section" id="topics">
        <div className="container">
          <div className="topics-header">
            <div>
              <div className="section-label">Explore</div>
              <h2 className="section-heading">Your AI learning path</h2>
              <p className="section-description">
                Each section is self-contained. Start where your curiosity leads.
              </p>
            </div>

            <label className="search-box" htmlFor="topic-search">
              <Search size={16} style={{ flexShrink: 0, color: 'var(--text-faint)' }} />
              <input
                id="topic-search"
                type="search"
                placeholder="Search topics…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search AI topics"
              />
            </label>
          </div>

          <div className="topics-grid">
            {filtered.map((topic) => (
              <TopicCard key={topic.path} topic={topic} />
            ))}

            {filtered.length === 0 && (
              <div className="empty-state">
                <p>No topics found for &ldquo;{search}&rdquo;</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSearch('')}
                  id="clear-search-btn"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="page-section cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-icon">
              <Zap size={28} />
            </div>
            <div className="cta-content">
              <div className="section-label">Ready to Start?</div>
              <h2 className="section-heading">Begin with the fundamentals.</h2>
              <p className="section-description">
                Not sure where to start? AI Fundamentals gives you the mental models
                to understand everything else — capabilities, limitations, and how
                modern AI actually works under the hood.
              </p>
              <div style={{ marginTop: 24 }}>
                <Link to="/fundamentals" className="btn btn-primary" id="cta-fundamentals-btn">
                  Start with AI Fundamentals <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
