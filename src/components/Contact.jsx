import { useState } from 'react';
import { ArrowUpRight, Mail, Send } from 'lucide-react';
import { profile } from '../data/profile.js';
import { GithubMark, LinkedinMark } from './SocialMarks.jsx';

function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(formData.get('subject').trim());
    const message = encodeURIComponent(
      `From: ${formData.get('name').trim()} (${formData.get('email').trim()})\n\n${formData.get('message').trim()}`,
    );

    setFormStatus('Opening your email app with your message…');
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${message}`;
  };

  return (
    <section className="section-wrap contact-section reveal" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="contact-copy">
          <div className="section-kicker">07 <span>/</span> GET IN TOUCH</div>
          <h2 id="contact-title">Let’s make something<br /><span className="gradient-text">meaningful.</span></h2>
          <p>I’m open to connecting with recruiters, teams and fellow developers. Have an opportunity or an idea? I’d love to hear from you.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}><Mail size={17} />{profile.email}<ArrowUpRight size={15} /></a>
          <div className="contact-socials">
            <a className="icon-link" href={profile.linkedinUrl} target="_blank" rel="noreferrer" aria-label="Connect on LinkedIn"><LinkedinMark /></a>
            {profile.githubUrl ? (
              <a className="icon-link" href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="View GitHub profile"><GithubMark /></a>
            ) : <span className="social-unavailable"><GithubMark /> GitHub profile coming soon</span>}
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><h3>Send a message</h3><p>Your email app will open with the message ready to send.</p></div>
          <div className="form-row">
            <label htmlFor="contact-name">Name<input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" minLength="2" maxLength="100" required /></label>
            <label htmlFor="contact-email">Email<input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength="254" required /></label>
          </div>
          <label htmlFor="contact-subject">Subject<input id="contact-subject" name="subject" type="text" placeholder="What would you like to discuss?" minLength="3" maxLength="150" required /></label>
          <label htmlFor="contact-message">Message<textarea id="contact-message" name="message" rows="4" placeholder="Write your message..." minLength="10" maxLength="3000" required /></label>
          <button className="button button-primary form-submit" type="submit">Prepare email <Send size={15} /></button>
          <p className="form-status" role="status" aria-live="polite">{formStatus}</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
