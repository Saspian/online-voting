import React from 'react';
import '../css-moudule/CandidateInfo.scss';
import axios from 'axios';
import Noty from 'noty';
import 'noty/lib/noty.css';
import 'noty/lib/themes/metroui.css';

const CandidateInfo = ({ci_title, ci_vid, ci_des, ci_sub, ci_org, urlPara}) => {  

    const showVoted = () =>{
        new Noty({
            type: 'information',
            theme: 'metroui',
            layout: 'center',
            text: 'Thank you for Voting!',
            timeout: 3000
        }).show();
    }
    const showAlreadyVoted = () => {
        let n = new Noty({
            type: 'information',
            theme: 'metroui',
            layout: 'center',
            text: 'You have already voted for this project!',
            timeout: 3000
        }).show();
    }
    const voterID= localStorage.getItem('loggedUserID');
    const data ={vCounter:voterID};

    const updateVote = () => {
        try{
            axios.post(`http://localhost:3001/api/participants/registeredparticipants/${urlPara.params.id}`,data)
                .then(response =>{
                    console.log(response);
                    const successMessage = response.data.message2;
                    const errMessage = response.data.message1;
                    debugger;
                    if(errMessage){
                        showAlreadyVoted();
                        // document.getElementById('updateStatus').textContent = errMessage;
                    }
                    if(successMessage){
                        showVoted();
                        // document.getElementById('updateStatus').textContent = successMessage;
                    }
                })
            // const data3 =  getProject;
            // console.log(data3);
        }catch(err){
            console.log(err);
        }   

    }
    return(
        <div >
            <div  className='main3'></div>
                <div className='container'>
                    <h1>{ci_title}</h1>
                    <div className="video2">
                        <iframe className="iframeBigger"
                            src={`https://www.youtube.com/embed/${ci_vid}?controls=0`}
                            frameBorder="0"
                        />
                    </div>
                    <br/>
                    <h4>Submitted by: {ci_sub}</h4>
                        <h4>From: {ci_org}</h4> <br/>
                        <p className='des2'>{ci_des}</p>   
                        <button className='VoteBtn homeBtn' onClick={updateVote}>Vote</button> <span id='updateStatus'></span>  <br/><br/>   
                                   
                </div>
            
        </div>
    );
}

export default CandidateInfo;