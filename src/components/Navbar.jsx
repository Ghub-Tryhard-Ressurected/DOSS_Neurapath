import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Brain, Globe, Sparkles, Smartphone, Rocket, GraduationCap, Zap,
} from 'lucide-react';

const links = [
  { name: 'Home',          path: '/',             icon: null },
  { name: 'Fundamentals',  path: '/fundamentals',  icon: Brain },
  { name: 'Landscape',     path: '/landscape',     icon: Globe },
  { name: 'Breakthroughs', path: '/breakthroughs', icon: Sparkles },
  { name: 'Daily Life',    path: '/daily-life',    icon: Smartphone },
  { name: 'The Future',    path: '/future',        icon: Rocket },
  { name: 'Careers',       path: '/careers',       icon: GraduationCap },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className="navbar"
        style={scrolled ? { background: 'rgba(5,8,15,0.97)' } : {}}
      >
        <div className="container navbar-inner">
          <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
            <div className="brand-logo">
              <Zap size={18} strokeWidth={2.5} />
            </div>
            <span className="brand-text">
              Neural<span className="brand-accent">Path</span>
            </span>
          </NavLink>

          <nav className="nav-links" aria-label="Primary navigation">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {link.icon && <link.icon size={13} />}
                {link.name}
              </NavLink>
            ))}
          </nav>

          <button
            className={`hamburger${open ? ' open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>

        <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.icon && <link.icon size={15} />}
              {link.name}
            </NavLink>
          ))}
        </div>
      </header>
    </>
  );
}
