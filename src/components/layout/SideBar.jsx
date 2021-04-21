import React, { useState } from 'react';
import {
  FaInbox,
  FaChevronDown,
  FaCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';
import { AddProject } from '../AddProject';
import { Projects } from '../Projects';

export const SideBar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className='sidebar'>
      <ul className='sidebar__generic'>
        <li
          onClick={() => {
            setActive('inbox');
            setSelectedProject('INBOX');
          }}
          className={active === 'inbox' ? 'active' : undefined}
          data-testid='inbox'>
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li
          onClick={() => {
            setActive('today');
            setSelectedProject('TODAY');
          }}
          className={active === 'today' ? 'active' : undefined}
          data-testid='today'>
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li
          onClick={() => {
            setActive('next_7');
            setSelectedProject('NEXT_7');
          }}
          className={active === 'next_7' ? 'active' : undefined}
          data-testid='next_7'>
          <span>
            <FaCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>
      <div className='sidebar__middle'>
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className='sidebar__projects'>{showProjects && <Projects />}</ul>
      <AddProject />
    </div>
  );
};
