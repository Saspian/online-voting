import React, { useState, useEffect } from 'react';
import CandidateInfo from './CandidateInfo';

const getVideoId = require('get-video-id');

const CandidateList2 = ({ match }) => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    getProject();
  }, []);

  const getProject = async () => {
    try {
      const getProject = await fetch(
        `http://localhost:3001/api/participants/registeredparticipants/${match.params.id}`
      );
      const data2 = await getProject.json();
      // console.log(data2);
      setProject(...project, data2);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="projects">
      {/* /* <div dangerouslySetInnerHTML={project.embed} /> */}
      <CandidateInfo
        ci_title={project.pName}
        ci_vid={
          project && project.vDemo && project.vDemo.length
            ? getVideoId(project.vDemo).id
            : ''
        }
        ci_des={project.pDesc}
        ci_sub={project.submittedBy}
        ci_org={project.cName}
        urlPara={match}
      />
    </div>
  );
};

export default CandidateList2;
