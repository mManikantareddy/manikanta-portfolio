import { ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile.js';
import { GithubMark, LinkedinMark } from './SocialMarks.jsx';

function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#home" aria-label="Manikanta, back to home"><span className="brand-mark">M</span><span>manikanta<span className="brand-dot">.</span></span></a>
      <span className="footer-credit">Designed &amp; built by {profile.name}</span>
      <div className="footer-links">
        <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinMark /></a>
        {profile.githubUrl && <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubMark /></a>}
        <a href="#home">Back to top <ArrowUpRight size={14} /></a>
      </div>
    </footer>
  );
}

export default Footer;
