import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  // Courses: () => <Courses data={courses} />,
  // References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Yu Xiang Luo's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="/resume">Resume</Link></h2>
          <div className="link-container">
            <h4 key="download-pdf">
              <a href="https://raw.githubusercontent.com/YuXiangLo/YuXiangLo.github.io/refs/heads/main/CV_folder/resume/resume.pdf">download-pdf</a>
            </h4>
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
