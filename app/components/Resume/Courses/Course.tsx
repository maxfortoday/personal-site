import React from 'react';

interface CourseData {
  title: string;
  number: string;
  link: string;
  university: string;
}

interface Props {
  data: CourseData;
  last: boolean;
}

const Course: React.FC<Props> = ({ data, last }) => (
  <li className={last ? 'course-last' : undefined}>
    <a href={data.link}>{data.title}</a> – {data.number}, {data.university}
  </li>
);

export default Course;
