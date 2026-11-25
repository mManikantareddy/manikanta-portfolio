import { ArrowDownToLine, FileText } from 'lucide-react';
import { profile } from '../data/profile.js';

function Resume() {
  return (
    <section className="section-wrap resume-section reveal" id="resume" aria-labelledby="resume-title">
      <div className="resume-card">
        <div className="resume-icon"><FileText size={23} /></div>
        <div className="resume-copy">
          <div className="section-kicker">06 <span>/</span> RESUME</div>
          <h2 id="resume-title">A little more about my journey.</h2>
          <p>The PDF is being prepared. Check back soon, or get in touch if you’d like to discuss my experience.</p>
        </div>
        {profile.resumeUrl ? (
          <a className="button button-primary resume-button" href={profile.resumeUrl} download>
            Download resume <ArrowDownToLine size={17} />
          </a>
        ) : (
          <button className="button button-disabled resume-button" type="button" disabled>
            Resume PDF coming soon <ArrowDownToLine size={17} />
          </button>
        )}
      </div>
    </section>
  );
}

export default Resume;
