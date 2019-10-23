import React, { useEffect } from 'react';
import Background from '../components/Background';
import '../css-moudule/VotingPage.css';
import CandidateList from '../components/CandidateList';

const VotingPage = () => {
  const white = {
    color: 'white',
    textAlign: 'center'
  };

  useEffect(() => {
    const tokenChecker = localStorage.getItem('token');
    let loggedStatus = false;

    if (tokenChecker && tokenChecker !== 'undefined') {
      loggedStatus = true;
    }

    if (!loggedStatus) window.location = '/loginpage';
  });

  return (
    <div className="votingTitle">
      <Background />
      <h1>Project Demonstration : Particpants</h1>
      <hr />
      <CandidateList />
      <hr />
      <p style={white}>Online Voting &copy; 2019</p>
    </div>
  );
};

export default VotingPage;
