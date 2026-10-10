
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  GitBranch,
  Workflow,
  Container,
  Boxes,
  Activity,
  ChartNoAxesCombined,
  Search,
  Layers3,
} from 'lucide-react';

import { tools } from '../data/tools';
import ToolCard from '../components/ToolCard';

const pipeline = [
  { name: 'Git', icon: GitBranch, color: '#f0a45d' },
  { name: 'CI/CD', icon: Workflow, color: '#b59aff' },
  { name: 'Docker', icon: Container, color: '#67b7ff' },
  { name: 'Kubernetes', icon: Boxes, color: '#6d9cff' },
  { name: 'Prometheus', icon: Activity, color: '#ff9a73' },
  {
    name: 'Grafana',
    icon: ChartNoAxesCombined,
    color: '#f6c76b',
  },
];

function Home() {
  const [search, setSearch] = useState('');

  const filteredTools = tools.filter((tool) =>
    `${tool.name} ${tool.description} ${tool.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-badge">
            <Layers3 size={15} />
            <span>Learn • Build • Collaborate</span>
          </div>

          <h1>
            Understand the tools.
            <br />
            <span className="hero-highlight">
              Master the DevOps pipeline.
            </span>
          </h1>

          <p className="hero-description">
            Explore the technologies that take software from source
            code to deployment, monitoring, and beyond.
            Learn how every tool fits into the bigger picture.
          </p>

          <div className="hero-actions">
            <a href="#tools" className="btn btn-primary">
              Explore the tools <ArrowRight size={18} />
            </a>

            <a href="#pipeline" className="btn btn-secondary">
              View the pipeline
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>6</strong>
              <span>Core tools</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Connected workflow</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Things to learn</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="page-section" id="pipeline">
        <div className="container">
          <div className="section-label">THE BIG PICTURE</div>

          <h2 className="section-heading">
            One pipeline. Six powerful tools.
          </h2>

          <p className="section-description">
            Each tool solves a different problem. Together, they
            support a workflow for delivering and operating software.
          </p>

          <div className="pipeline">
            {pipeline.map((step, index) => {
              const Icon = step.icon;
              const tool = tools[index];

              return (
                <div className="pipeline-item" key={step.name}>
                  <Link
                    to={tool.path}
                    className="pipeline-node"
                    style={{ '--node-color': step.color }}
                    title={`Learn about ${step.name}`}
                  >
                    <Icon size={24} />
                    <span>{step.name}</span>
                  </Link>

                  {index < pipeline.length - 1 && (
                    <ArrowRight
                      className="pipeline-arrow"
                      size={19}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <p className="pipeline-note">
            This is a conceptual workflow. Actual pipelines can vary
            depending on the project and its architecture.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section className="page-section tools-section" id="tools">
        <div className="container">
          <div className="tools-heading">
            <div>
              <div className="section-label">EXPLORE THE ECOSYSTEM</div>
              <h2 className="section-heading">Your learning toolkit</h2>
              <p className="section-description">
                Start with any tool and discover what it does,
                how it works, and why it matters.
              </p>
            </div>

            <label className="search-box">
              <Search size={18} />
              <input
                type="search"
                placeholder="Search tools..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search DevOps tools"
              />
            </label>
          </div>

          <div className="tools-grid">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.path} tool={tool} />
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="empty-state">
              <p>No tools found for "{search}".</p>
              <button
                className="btn btn-secondary"
                onClick={() => setSearch('')}
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Collaboration */}
      <section className="page-section collaboration-section">
        <div className="container collaboration-card">
          <div className="collaboration-icon">
            <Layers3 size={28} />
          </div>

          <div>
            <div className="section-label">BUILT TOGETHER</div>
            <h2 className="section-heading">
              One project. A collaborative team.
            </h2>
            <p className="section-description">
              Each tool has its own page, making it easier for
              team members to contribute independently. Learn,
              improve, and build the project together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
