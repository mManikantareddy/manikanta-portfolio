import { ArrowUpRight, Boxes, Cloud, Code2, Container, GitBranch, Server, Terminal } from 'lucide-react';

const learningPath = [
  { name: 'Linux administration', detail: 'Building confidence with Ubuntu, the command line, files and permissions.', icon: Terminal, number: '01' },
  { name: 'Git & GitHub', detail: 'Practising version control and collaborative development workflows.', icon: GitBranch, number: '02' },
  { name: 'Docker', detail: 'Learning how containers package applications and their dependencies.', icon: Container, number: '03' },
  { name: 'Jenkins CI/CD', detail: 'Exploring pipeline concepts and continuous integration workflows.', icon: Code2, number: '04' },
  { name: 'Ansible', detail: 'Practising configuration management and automation fundamentals.', icon: Boxes, number: '05' },
  { name: 'Terraform & Azure', detail: 'Exploring Infrastructure as Code, Azure fundamentals and virtual machines.', icon: Cloud, number: '06' },
];

function DevOps() {
  return (
    <section className="learning-band reveal" id="learning" aria-labelledby="learning-title">
      <div className="section-wrap">
        <div className="section-kicker">05 <span>/</span> LEARNING IN PUBLIC</div>
        <div className="section-heading learning-heading">
          <div><h2 id="learning-title">Growing into the<br /><span className="gradient-text">DevOps ecosystem.</span></h2></div>
          <p>This is an active learning journey, not professional DevOps experience. I’m building practical foundations one tool at a time.</p>
        </div>
        <div className="learning-grid">
          {learningPath.map(({ name, detail, icon: Icon, number }) => (
            <article className="learning-item" key={name}>
              <span className="learning-number">{number}</span>
              <div className="learning-icon"><Icon size={19} /></div>
              <div className="learning-copy"><h3>{name}</h3><p>{detail}</p></div>
              <ArrowUpRight className="learning-arrow" size={16} aria-hidden="true" />
            </article>
          ))}
        </div>
        <div className="learning-footnote"><Server size={15} /> Practising through personal projects and guided learning.</div>
      </div>
    </section>
  );
}

export default DevOps;
