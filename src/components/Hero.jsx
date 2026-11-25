import { ArrowDown, ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { profile } from '../data/profile.js';
import { GithubMark, LinkedinMark } from './SocialMarks.jsx';

function Hero() {
  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy reveal">
        <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
        <p className="hero-intro">Hello, I’m {profile.name}</p>
        <h1 id="hero-title">I build thoughtful<br /><span className="gradient-text">digital experiences.</span></h1>
        <p className="hero-role">Frontend Developer <span>/</span> React.js <span>/</span> DevOps &amp; Cloud enthusiast</p>
        <p className="hero-subtitle">A computer science graduate with a year of experience creating responsive WordPress and frontend experiences — and a growing curiosity for cloud infrastructure and DevOps.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View projects <ArrowUpRight size={17} /></a>
          <a className="button button-secondary" href="#resume">Resume <ArrowDown size={16} /></a>
        </div>
        <div className="social-row">
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer"><LinkedinMark /> LinkedIn</a>
          {profile.githubUrl ? (
            <a href={profile.githubUrl} target="_blank" rel="noreferrer"><GithubMark /> GitHub</a>
          ) : (
            <span className="social-unavailable"><GithubMark /> GitHub profile coming soon</span>
          )}
          <a href={`mailto:${profile.email}`}><Mail size={17} /> Email</a>
        </div>
      </div>
      <div className="hero-visual reveal" aria-label="Developer profile illustration">
        <div className="hero-glow" />
        <div className="hero-orbit orbit-a" />
        <div className="hero-orbit orbit-b" />
        <div className="profile-card">
          <div className="card-top">
            <span className="window-dots"><i /><i /><i /></span>
            <span className="card-label">a little about me</span>
            <Sparkles size={15} className="sparkle-icon" />
          </div>
          <div className="avatar-placeholder"><span>MR</span><i className="avatar-status" /></div>
          <p className="profile-name">{profile.name}</p>
          <p className="profile-role">Frontend developer · Cloud learner</p>
          <div className="code-snippet" aria-label="Code illustration">
            <span className="code-muted">01</span> <b>const</b> mindset = <em>'build &amp; learn'</em>;
          </div>
          <div className="profile-details">
            <div><strong>01<span>+</span></strong><small>year in web development</small></div>
            <div><strong>∞</strong><small>things left to explore</small></div>
          </div>
        </div>
        <div className="float-chip chip-react"><span className="react-mark">✳</span> React.js</div>
        <div className="float-chip chip-cloud"><span className="cloud-mark">↗</span> Cloud &amp; DevOps</div>
        <div className="visual-caption">Curiosity, craft &amp; code<span className="caption-line" /></div>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><span className="scroll-cue-icon"><ArrowDown size={14} /></span></a>
    </section>
  );
}

export default Hero;
