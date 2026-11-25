import { useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { profile } from '../data/profile.js';
import { GithubMark, LinkedinMark } from './SocialMarks.jsx';

const links = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Learning', 'learning'],
  ['Resume', 'resume'],
  ['Contact', 'contact'],
];

function Navbar({ activeSection, theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Manikanta, home">
        <span className="brand-mark">M</span>
        <span>manikanta<span className="brand-dot">.</span></span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav id="primary-navigation" className={`nav${menuOpen ? ' nav-open' : ''}`} aria-label="Main navigation">
        {links.map(([label, id]) => (
          <a
            key={id}
            className={activeSection === id ? 'nav-link active' : 'nav-link'}
            href={`#${id}`}
            onClick={closeMenu}
            aria-current={activeSection === id ? 'location' : undefined}
          >
            {label}
          </a>
        ))}
        <div className="nav-tools">
          {profile.linkedinUrl && (
            <a className="icon-link nav-social" href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinMark />
            </a>
          )}
          {profile.githubUrl && (
            <a className="icon-link nav-social" href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubMark />
            </a>
          )}
          <button className="theme-toggle" type="button" onClick={onThemeChange} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
