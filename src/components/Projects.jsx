import React, { useState } from 'react';

import { useSelectedProjectValue, useProjectsValue } from '../context';
import { Project } from './Project';

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { projects } = useProjectsValue();
  const { setSelectedProject } = useSelectedProjectValue();

  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid='project-action-parent'
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
        onClick={() => {
          setActive(project.projectId);
          setSelectedProject(project.projectId);
        }}>
        <Project project={project} />
      </li>
    ))
  );
};
