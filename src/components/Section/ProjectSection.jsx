import React from 'react';
import { SectionHeading } from '../ui/CommonLayouts';
import { projectList } from '@/data/initials';
import ProjectItem from '../ui/molecules/ProjectItem';

export default function ProjectSection() {
  return (
    <section
      id="project"
      className="flex flex-col justify-center"
    >
      <SectionHeading>수행한 프로젝트를 소개합니다.</SectionHeading>
      <div className="space-y-20">
        {projectList.map((project, index) => (
          <ProjectItem
            key={index}
            data={project}
          />
        ))}
      </div>
    </section>
  );
}
