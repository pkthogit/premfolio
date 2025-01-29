import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Green_icon_-_Love.ZGH.png',
      projectUrl: 'https://google.com',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Green_icon_-_Love.ZGH.png',
      projectUrl: 'https://google.com',
    },
    {
      title: 'Project 3',
      description: 'A brief description of Project 3.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Green_icon_-_Love.ZGH.png',
      projectUrl: 'https://google.com',
    },
  ];

  return (
    <div>
      <Section title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Projects;