import { ArrowUpRight, BookOpen, GraduationCap } from 'lucide-react';
import { profile } from '../data/profile.js';

function About() {
  return (
    <section className="section-wrap about-section reveal" id="about" aria-labelledby="about-title">
      <div className="section-kicker">01 <span>/</span> ABOUT ME</div>
      <div className="about-grid">
        <div>
          <h2 id="about-title">Curious by nature.<br /><span className="muted-heading">Developer by practice.</span></h2>
        </div>
        <div className="about-content">
          <p className="large-copy">I’m a Computer Science Engineering graduate with one year of professional experience in WordPress and frontend development.</p>
          <p>I enjoy building responsive websites and creating useful web experiences. Alongside frontend development, I’m learning Linux, cloud infrastructure, automation, containerization and CI/CD through hands-on practice.</p>
          <p>My goal is to keep growing as a thoughtful frontend developer while building a solid foundation in DevOps and cloud technologies.</p>
          <div className="about-facts">
            <div><BookOpen size={19} /><span><b>Computer Science Engineering</b><small>Graduate</small></span></div>
            <div><GraduationCap size={19} /><span><b>Frontend &amp; WordPress</b><small>Professional experience</small></span></div>
          </div>
          <a className="text-link" href={`mailto:${profile.email}`}>Let’s connect <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}

export default About;
