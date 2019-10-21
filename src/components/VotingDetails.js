import React, {useEffect, useState} from 'react';
import VotingTable from '../components/VotingTable';
import '../css-moudule/VotingDetails.css';
const getVideoId = require('get-video-id');


const VotingDetails = () => {
let counter = 0;
const [displayProjects,setDisplayProjects] = useState([]);

useEffect(()=>{
    getData();
},[])
const getData = async () => {
    try{
        const projects = await fetch ('http://192.168.1.69:3001/api/participants/registeredparticipants');
        const data = await projects.json();
        console.log(data);
        setDisplayProjects(data);
    }catch(err){

    }
}


return(
    <div className='backgroundTable'>
        <div className='votingTable'>
            <h1>List of Projects Submitted</h1>
            <table id='projects'>
                <tr>
                    <th>SN</th>
                    <th>Project Name</th>
                    <th>Submitted By</th>
                    <th>Total Votes</th>
                </tr>
            {displayProjects.map(unit => (
                <VotingTable c={++counter} key={unit._id} id={unit._id} title={unit.pName} vid={getVideoId(unit.vDemo).id} des={unit.pDesc} sub={unit.submittedBy} org={unit.cName} voteCount={unit.vCounter.length}/>
                
            ))}
            </table>
        </div>
    </div>
    );
}

export default VotingDetails;