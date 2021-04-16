import React from 'react';
import {
  FaInbox,
  FaChevronDown,
  FaCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';

export const SideBar = () => {
  return (
    <div className='sidebar'>
      <ul className='sidebar__genreic'>
        <li>
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li>
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
      <ul className='sidebar__projects'>Projects will be here!</ul>
    </div>
  );
};
