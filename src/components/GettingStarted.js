import React, { useState } from 'react';
import '../css-moudule/GettingStarted.css';
import axios from 'axios';
import Noty from 'noty';
import 'noty/lib/noty.css';
import 'noty/lib/themes/metroui.css';

const GettingStarted = () => {
  const submitSucess = () => {
    new Noty({
      type: 'information',
      theme: 'metroui',
      layout: 'center',
      text:
        'Thank you for submitting project! Voting open from November 6 visit this page again to vote',
      buttons: [
        Noty.button(
          'Ok',
          'btn btn-success btn-block',
          () => {
            window.location = '/';
          },
          { id: 'button1', 'data-status': 'ok' }
        )
      ]
    }).show();
  };

  const errorTextColor = {
    color: 'white',
    backgroundColor: 'red'
  };
  const [projects, setProjects] = useState({
    pName: '',
    pDesc: '',
    vDemo: '',
    cName: '',
    submittedBy: '',
    pemail: ''
  });

  const changeHandler3 = e => {
    setProjects({ ...projects, [e.target.name]: e.target.value });
  };
  const submitProject = e => {
    e.preventDefault();
    console.log('we clicked buttoned');
    //VALIDATION OF PROJECT SUBMITTING FORM
    if (projects.pName.length < 6) {
      document.getElementById('name').style.border = '1px solid';
      document.getElementById('name').style.borderColor = 'red';
      document.getElementById('forError').textContent =
        ' *Project name should be longer than 6 letter  ';
    } else if (projects.pDesc.length < 50) {
      document.getElementById('desc').style.border = '1px solid';
      document.getElementById('desc').style.borderColor = 'red';
      document.getElementById('forError2').textContent =
        ' *Project description should be longer than 50 words  ';
    } else if (
      !(projects.vDemo.includes('youtu') || projects.vDemo.includes('y2u'))
    ) {
      document.getElementById('demo').style.border = '1px solid';
      document.getElementById('demo').style.borderColor = 'red';
      document.getElementById('forError3').textContent =
        ' *Please enter valid youtube video link  ';
    } else if (projects.cName.length < 6) {
      document.getElementById('cname').style.border = '1px solid';
      document.getElementById('cname').style.borderColor = 'red';
      document.getElementById('forError4').textContent =
        ' *Name should be longer than 6 letter  ';
    } else if (projects.submittedBy.length < 6) {
      document.getElementById('subby').style.border = '1px solid';
      document.getElementById('subby').style.borderColor = 'red';
      document.getElementById('forError5').textContent =
        ' *Name should be longer than 6 letter  ';
    } else if (projects.pemail.indexOf('@') < 0) {
      document.getElementById('pEmail').style.border = '1px solid';
      document.getElementById('pEmail').style.borderColor = 'red';
      document.getElementById('forError6').textContent =
        ' *Please enter a valid email  ';
    }

    // console.log(projects);
    else {
      axios
        .post(
          'http://localhost:3001/api/participants/registerparticipants',
          projects
        )
        .then(response => {
          console.log(response);
          console.log('project added sucessfully');
          setProjects({
            ...projects,
            pName: '',
            pDesc: '',
            vDemo: '',
            cName: '',
            submittedBy: '',
            pemail: ''
          });
          // alert('Project added Successfully');
          submitSucess();
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  const resetBtn = () => {
    setProjects({
      ...projects,
      pName: '',
      pDesc: '',
      vDemo: '',
      cName: '',
      submittedBy: '',
      pemail: ''
    });
    document.getElementById('forError').textContent = '';
    document.getElementById('forError2').textContent = '';
    document.getElementById('forError3').textContent = '';
    document.getElementById('forError4').textContent = '';
    document.getElementById('forError5').textContent = '';
    document.getElementById('forError6').textContent = '';
    document.getElementById('name').style.borderColor = 'transparent';
    document.getElementById('desc').style.borderColor = 'transparent';
    document.getElementById('demo').style.borderColor = 'transparent';
    document.getElementById('cname').style.borderColor = 'transparent';
    document.getElementById('subby').style.borderColor = 'transparent';
    document.getElementById('pEmail').style.borderColor = 'transparent';
  };

  return (
    <div className="thirdPage">
      <h1>Getting started!</h1>
      <div className="participantsForm">
        <form onSubmit={submitProject}>
          <label>Project Name</label>
          <input
            type="text"
            id="name"
            name="pName"
            value={projects.pName}
            onChange={changeHandler3}
            required="required"
          />
          <span id="forError" style={errorTextColor}></span>
          <br />
          <label>Project Description</label>
          <textarea
            name="pDesc"
            id="desc"
            rows="4"
            cols="43"
            value={projects.pDesc}
            onChange={changeHandler3}
            required="required"
          ></textarea>
          <span id="forError2" style={errorTextColor}></span>
          <br />
          <label>Video Demo (youtube video link)</label>
          <input
            type="text"
            id="demo"
            c
            name="vDemo"
            value={projects.vDemo}
            onChange={changeHandler3}
            required="required"
          />
          <span id="forError3" style={errorTextColor}></span>
          <br />
          <label>College / Organization Name</label>
          <input
            type="text"
            id="cname"
            name="cName"
            value={projects.cName}
            onChange={changeHandler3}
            required="required"
          />
          <span id="forError4" style={errorTextColor}></span>
          <br />
          <label>Submitted By</label>
          <input
            type="text"
            id="subby"
            name="submittedBy"
            value={projects.submittedBy}
            onChange={changeHandler3}
            required="required"
          />
          <span id="forError5" style={errorTextColor}></span>
          <br />
          <label>Email</label>
          <input
            type="text"
            id="pEmail"
            name="pemail"
            value={projects.pemail}
            onChange={changeHandler3}
            required="required"
          />
          <span id="forError6" style={errorTextColor}></span>
          <br />
          <div className="btnInline">
            <button className="btn1" type="submit">
              Submit
            </button>
            <button className="btn1" onClick={resetBtn}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GettingStarted;
