import React from 'react';
import '../css-moudule/TakingPart.css';

const TakingPart = () => {
    return(
        <div className="secondPage">
                <h1>How to take part?</h1>
            <div className="takingPart">    
                <div>
                        <li>1. Fill up the form online, and submit a youtube video link demonstrating your project.</li>
                        <li>2. Through online voting best 10 projects will get a chance to demonstrate on ICT meetup v6.0</li>
                        <li>3. Teb Contestants will pitch their ideas to judges and audiences </li>
                        <li>4. Judges will announce top three winner</li>
                        <li>5. Thank you for reading rules till here i appreciate it a lot</li>
                        <li>6. This is not a real website, i built it as an internship project at fm nepal</li>
                        <li>7. These non sense lines are added so that this list may look biger than image, i could make image smaller but it wont look design wise</li>
                </div> 
                <img src="assests/img/undraw_segment_uwu1.png" alt="takingPartImage"/>
            </div>
            <div className="fade">      
            </div>
        </div>
    );
}
export default TakingPart;