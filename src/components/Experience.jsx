import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';

function Experience() {
  return (
    <section className="section-wrap experience-section reveal" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <div><div className="section-kicker">03 <span>/</span> EXPERIENCE</div><h2 id="experience-title">Where I’ve worked</h2></div>
        <p>A year of hands-on work building and maintaining websites.</p>
      </div>
      <article className="experience-card">
        <div className="experience-mark"><BriefcaseBusiness size={22} /></div>
        <div className="experience-details">
          <div className="experience-meta">PROFESSIONAL EXPERIENCE <span>·</span> 1 YEAR</div>
          <h3>WordPress Developer</h3>
          <p className="company">Espirit Technology</p>
          <p className="experience-description">Contributed to WordPress website development and frontend work, with a focus on responsive layouts, Elementor page building, website customization and ongoing maintenance.</p>
          <div className="experience-tags"><span>WordPress</span><span>Elementor</span><span>Responsive frontend</span><span>Website maintenance</span></div>
        </div>
        <ArrowUpRight className="experience-arrow" size={19} aria-hidden="true" />
      </article>
    </section>
  );
}

export default Experience;
