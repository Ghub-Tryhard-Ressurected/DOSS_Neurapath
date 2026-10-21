import { NavLink } from 'react-router-dom';
import { Zap } from 'lucide-react';

const footerLinks = [
  { name: 'Fundamentals',  path: '/fundamentals' },
  { name: 'Landscape',     path: '/landscape' },
  { name: 'Breakthroughs', path: '/breakthroughs' },
  { name: 'Daily Life',    path: '/daily-life' },
  { name: 'The Future',    path: '/future' },
  { name: 'Careers',       path: '/careers' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="brand-logo">
            <Zap size={15} strokeWidth={2.5} />
          </div>
          <span>
            Neural<span style={{ color: 'var(--accent)' }}>Path</span>
          </span>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((l) => (
            <NavLink key={l.path} to={l.path} className="footer-link">
              {l.name}
            </NavLink>
          ))}
        </nav>

        <span className="footer-copy">
          Your guide to navigating the AI era &nbsp;·&nbsp; Built by Team DOSS
        </span>
      </div>
    </footer>
  );
}
