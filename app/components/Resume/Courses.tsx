import React from 'react';

import Course from './Courses/Course';

interface CourseData {
  title: string;
  number: string;
  link: string;
  university: string;
}

interface Props {
  data?: CourseData[];
}

const Courses: React.FC<Props> = ({ data = [] }) => {
  if (data.length === 0) return null;

  const sorted = [...data].sort((a, b) => {
    if (a.university !== b.university) return a.university < b.university ? -1 : 1;
    return a.number < b.number ? -1 : 1;
  });

  return (
    <div className="courses">
      <div className="link-to" id="courses" />
      <ul className="course-list">
        {sorted.map((course, idx) => (
          <Course
            data={course}
            key={course.title}
            last={idx === sorted.length - 1}
          />
        ))}
      </ul>
    </div>
  );
};

export default Courses;
