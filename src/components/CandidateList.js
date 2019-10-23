import React, { useState, useEffect } from 'react';
import CandidateCard from './CandidateCard';
import '../css-moudule/Candidate.css';

const getVideoId = require('get-video-id');

const CandidateList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const getProjects = await fetch(
        'http://localhost:3001/api/participants/registeredparticipants'
      );
      const data = await getProjects.json();
      console.log(data);
      setProjects(data);
    } catch (err) {}
  };

  // console.log(projects._id);
  return (
    <div className="project">
      {projects.map(project => (
        /* <div dangerouslySetInnerHTML={project.embed} /> */

        <CandidateCard
          key={project._id}
          id={project._id}
          title={project.pName}
          vid={getVideoId(project.vDemo).id}
          des={project.pDesc}
          sub={project.submittedBy}
          org={project.cName}
        />
      ))}
    </div>
  );
};

export default CandidateList;
