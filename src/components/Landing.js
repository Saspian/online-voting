import React from 'react';
import Home from '../components/Home';
import TakingPart from '../components/TakingPart';
import GettingStarted from '../components/GettingStarted';
import {Link} from 'react-router-dom';
import '../css-moudule/Landing.css';

const Landing = () => {
    return (
        <div className='landing'>
            <Home />
            <div className='titleCard'>
                    <div className="jumbo">
                        <h3>Project Demonstration</h3>
                        <p><span className='line'></span>Demonstrate 
                        your project at ICT Meet Up and get seed investement</p>
                        <Link to='/registerpage'>
                            <button className='VoteBtn homeBtn'>Sign Up</button>
                        </Link> 
                        &nbsp;&nbsp;&nbsp; 
                        <Link to='/votingpage'>
                            <button className='VoteBtn homeBtn'>Vote Now</button>
                        </Link>                   
                    </div>
                    <img className='col span_4_of_12' src="assests/img/undraw_google_analytics_a57d.png" alt="titleImage"/>
            </div>
            <TakingPart />
            <GettingStarted />
        </div>
    );
}

export default Landing;