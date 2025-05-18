import React from 'react';
import { CommonSection, SectionHeading } from '../ui/CommonLayouts';

import ProjectItem from '../ui/molecules/ProjectItem';
import { projectList } from '@/data/projectData';

export default function ProjectSection() {
  return (
    <CommonSection id="project">
      <SectionHeading>수행한 프로젝트를 소개합니다.</SectionHeading>
      <div className="space-y-20">
        {projectList.map((project, index) => (
          <ProjectItem
            key={index}
            data={project}
          />
        ))}
      </div>
    </CommonSection>
  );
}
