import React from 'react';
import { firebase } from '../firebase';

export const Checkbox = ({ id }) => {
  const archivedTask = () => {
    firebase.firestore().collection().doc(id).update({ archived: true });
  };

  return (
    <div
      className='checkbox-holders'
      data-testid='checkbox-action'
      onClick={() => archivedTask()}>
      <span className='checkbox'></span>
    </div>
  );
};
