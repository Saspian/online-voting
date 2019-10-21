import React from 'react';
import './App.css';
import Landing from './components/Landing';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import VotingPage from './components/VotingPage';
import CandidateList from './components/CandidateList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import CandidateList2 from './components/CandidateList2';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/loginpage' exact component={LoginPage} />
        <Route path='/votingpage' exact component={VotingPage} />
        <Route path='/registerpage' exact component={RegisterPage} />
        <Route path='/candidatelist' exact component={CandidateList} />
        <Route path='/candidateinfo/:id' exact component={CandidateList2} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
