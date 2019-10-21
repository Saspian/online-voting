import React from 'react';
import '../css-moudule/VotingDetails.css';
// import {Link} from 'react-router-dom';

const VotingTable = ({c, id, title, vid, des, sub, org, voteCount}) => {
    return(
            <tr>
                <td>{c}</td>
                <td>{title}</td>
                <td>{sub}</td>
                <td>{voteCount}</td>
            </tr>        
    );
}
export default VotingTable;