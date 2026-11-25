import { skillGroups } from '../data/skills.js';

function Skills() {
  return (
    <section className="section-wrap skills-section reveal" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <div><div className="section-kicker">02 <span>/</span> THE TOOLKIT</div><h2 id="skills-title">Skills &amp; technologies</h2></div>
        <p>Tools and technologies I’ve worked with or am actively learning.</p>
      </div>
      <div className="skills-grid">
        {skillGroups.map(({ title, icon: Icon, color, skills }) => (
          <article className="skill-card" key={title}>
            <div className={`skill-icon ${color}`}><Icon size={20} /></div>
            <div className="skill-card-heading"><h3>{title}</h3><span>{String(skills.length).padStart(2, '0')} technologies</span></div>
            <div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>
        ))}
      </div>
      <p className="honesty-note">My skills reflect a mix of professional experience and ongoing hands-on learning.</p>
    </section>
  );
}

export default Skills;
