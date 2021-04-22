import React, { useState } from 'react';
import { firebase } from '../firebase';
import { generatePushId } from '../helpers';
import { useProjectsValue } from '../context';

export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState('INBOX');

  const projectId = generatePushId();
  const { setProjects } = useProjectsValue();

  const addProject = () => {
    projectName &&
      firebase
        .firestore()
        .collection('projects')
        .add({
          projectId,
          name: projectName,
          userId: 'akhHjkf9d2',
        })
        .then(() => {
          setProjects([]);
          setProjectName('');
          setShow(false);
        });
  };

  return (
    <div className='add-project' data-testid='add-project'>
      {show && (
        <div className='add-project__input'>
          <input
            type='text'
            placeholder='Add Project Name'
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className='add-project__name'
            data-testid='project-name'
          />
          <button
            type='button'
            onClick={() => addProject()}
            data-testid='add-project-submit'
            className='add-project__submit'>
            Add Project
          </button>
          <span
            data-testid='hide-project-overlay'
            className='add-project__cancel'
            onClick={() => setShow(false)}>
            Cancel
          </span>
        </div>
      )}
      <span className='add-project__plus'>+</span>
      <span
        className='add-project__text'
        data-testid='add-project-action'
        onClick={() => setShow(!show)}>
        Add Project
      </span>
    </div>
  );
};
