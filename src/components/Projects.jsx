import { ArrowUpRight, Globe2, Languages, ShieldCheck, CarFront } from 'lucide-react';
import { projects } from '../data/projects.js';
import { GithubMark } from './SocialMarks.jsx';

const projectIcons = {
  language: Languages,
  access: ShieldCheck,
  motors: CarFront,
};

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.repositoryUrl ? (
        <a href={project.repositoryUrl} target="_blank" rel="noreferrer"><GithubMark /> Repository <ArrowUpRight size={13} /></a>
      ) : <span className="project-link-unavailable"><GithubMark /> Repository not linked</span>}
      {project.liveDemoUrl ? (
        <a href={project.liveDemoUrl} target="_blank" rel="noreferrer"><Globe2 size={15} /> Live demo <ArrowUpRight size={13} /></a>
      ) : <span className="project-link-unavailable"><Globe2 size={15} /> Demo not available</span>}
    </div>
  );
}

function Projects() {
  return (
    <section className="section-wrap projects-section reveal" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <div><div className="section-kicker">04 <span>/</span> SELECTED WORK</div><h2 id="projects-title">Projects &amp; practice</h2></div>
        <p>Ideas, experiments and interfaces built along the way.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => {
          const Icon = projectIcons[project.visual];
          return (
            <article className="project-card" key={project.number}>
              <div className="project-art">
                <div className="project-art-grid" />
                <div className="project-window">
                  <div className="project-window-bar"><i /><i /><i /><span>{project.name.toLowerCase().replaceAll(' ', '-')}</span></div>
                  <div className={`project-illustration illustration-${project.visual}`}>
                    <span className="illustration-orbit" />
                    <Icon size={37} strokeWidth={1.25} />
                    <span className="illustration-spark">✳</span>
                  </div>
                  <div className="project-window-lines"><i /><i /><i /></div>
                </div>
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-info">
                <div className="project-meta"><span>{project.type}</span><span className="project-status"><i />{project.status}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <ProjectLinks project={project} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
