import React from 'react';
import '../css-moudule/Candidate.css';
import {Link} from 'react-router-dom';

const CandidateCard = ({id, title, vid, des, sub, org}) => {
    return(
        <div className='box'>
            {/* <img src={pic} alt='thor'/> */}
            <div className="video">
                <iframe className="iframe bigger"
                    src={`https://www.youtube.com/embed/${vid}?controls=0`}
                    frameBorder="0"
                />
            </div>
            <p className='des'>
            <span>
                <Link to={`/CandidateInfo/${id}`} className='title'>
                    {title}
                </Link>
            </span><br/>
            {des.substr(0,250)}... &nbsp;
            <Link to={`/CandidateInfo/${id}`}>
                <button className='more'>click for more</button>                
            </Link> <br/>
            <hr/>
            <b id='bold'>Organization:</b> {org} <br/>
            <b id='bold'>Submitted By:</b> {sub}  
            </p>
                   
        </div>
    );
}

export default CandidateCard;