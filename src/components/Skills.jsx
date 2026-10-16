import React from 'react';
import { Code2, Layers, Database, Cloud, Brain } from 'lucide-react';
import './../styles.css';

const skills = [
  {
    icon: <Code2 size={32} strokeWidth={1.5} />,
    title: 'Languages',
    items: ['Java', 'Python', 'Go', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'Shell'],
  },
  {
    icon: <Layers size={32} strokeWidth={1.5} />,
    title: 'Frameworks & Web',
    items: ['Spring Boot', 'FastAPI', 'Flask', 'Node.js', 'Express.js', 'React', 'Next.js', 'Redux', 'GraphQL', 'REST APIs'],
  },
  {
    icon: <Database size={32} strokeWidth={1.5} />,
    title: 'Distributed Systems & Data',
    items: ['Kafka', 'Kubernetes', 'Docker', 'Redis', 'MongoDB', 'PostgreSQL', 'MySQL', 'Sybase'],
  },
  {
    icon: <Cloud size={32} strokeWidth={1.5} />,
    title: 'Cloud & DevOps',
    items: ['AWS', 'GCP', 'Jenkins', 'GitLab CI/CD', 'SonarQube', 'Autosys', 'Git'],
  },
  {
    icon: <Brain size={32} strokeWidth={1.5} />,
    title: 'Applied AI',
    items: ['LLM Applications', 'Agentic Workflows', 'RAG', 'Structured Outputs', 'LLM Evaluation', 'Prompt Engineering', 'Machine Learning'],
  },
];

const Skills = () => {
  return (
    <section id='services'>
      <div className='skills-container'>
        <h1 className='section-title'>Skills</h1>
        <div className='skills-grid'>
          {skills.map((s) => (
            <div key={s.title} className='skill-card-new'>
              <div className='skill-card-icon'>{s.icon}</div>
              <h2 className='skill-card-title'>{s.title}</h2>
              <div className='skill-card-tags'>
                {s.items.map((item) => (
                  <span key={item} className='skill-tag'>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
