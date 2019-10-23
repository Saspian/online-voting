import React, { useState, useEffect } from 'react';
import '../css-moudule/Register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Noty from 'noty';
import 'noty/lib/noty.css';
import 'noty/lib/themes/metroui.css';

const Register = () => {
  const errorTextColor = {
    color: 'white',
    backgroundColor: 'red'
  };
  const alreadyLogged = () => {
    new Noty({
      type: 'information',
      theme: 'metroui',
      layout: 'center',
      text: 'You are already logged in',
      buttons: [
        Noty.button(
          'Ok',
          'btn btn-success btn-block',
          () => {
            window.location = '/votingpage';
          },
          { id: 'button1', 'data-status': 'ok' }
        )
      ]
    }).show();
  };
  useEffect(() => {
    const tokenChecker = localStorage.getItem('token');
    let loggedStatus = false;

    if (tokenChecker && tokenChecker !== 'undefined') {
      loggedStatus = true;
    }

    if (loggedStatus) {
      alreadyLogged();
    }
  });

  const [users, setUsers] = useState({
    name: '',
    email: '',
    password: '',
    repassword: ''
  });

  const changeHandler = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const submitHandler = e => {
    e.preventDefault();

    //validation from frontend
    if (users.name.length < 4) {
      document.getElementById('name').style.border = '1px solid';
      document.getElementById('name').style.borderColor = 'red';
      document.getElementById('forSignupError').textContent =
        ' * username should be longer than 6 letter';
    } else if (users.email.indexOf('@') < 0) {
      document.getElementById('email').style.border = '1px solid';
      document.getElementById('email').style.borderColor = 'red';
      document.getElementById('forSignupError2').textContent =
        ' *Please enter a valid email';
    } else if ((users.password.length || users.repassword.length) < 6) {
      document.getElementById('psw').style.border = '1px solid';
      document.getElementById('psw').style.borderColor = 'red';
      document.getElementById('forSignupError3').textContent =
        ' *password should be longer than 6 letter';
    } else {
      axios
        .post('http://localhost:3001/api/user/register', users)
        .then(response => {
          console.log(response);
          console.log('User added sucessfully');
          window.location = '/loginpage';
        })
        .catch(error => {
          console.log(error, '@@eeee');
          if (error.response.data.emailError) {
            document.getElementById('email').style.border = '1px solid';
            document.getElementById('email').style.borderColor = 'red';
            document.getElementById('forSignupError2').textContent =
              error.response.data.emailError;
          }
          if (error.response.data.pwdError) {
            document.getElementById('psw').style.border = '1px solid';
            document.getElementById('psw').style.borderColor = 'red';
            document.getElementById('repsw').style.border = '1px solid';
            document.getElementById('repsw').style.borderColor = 'red';
            document.getElementById('forSignupError4').textContent =
              error.response.data.pwdError;
          }
          console.log(error.response);
        });
    }
  };
  return (
    <main className="register">
      <img src="assests/img/user.png" alt="userImage1" />
      <div className="form">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="username"
            value={users.name}
            onChange={changeHandler}
            required="required"
          />
          <p id="forSignupError" style={errorTextColor}></p>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            value={users.email}
            onChange={changeHandler}
            required="required"
          />
          <p id="forSignupError2" style={errorTextColor}></p>
          <br />
          <input
            type="password"
            id="psw"
            name="password"
            placeholder="Password"
            value={users.password}
            onChange={changeHandler}
            required="required"
          />
          <p id="forSignupError3" style={errorTextColor}></p>
          <br />
          <input
            type="password"
            id="repsw"
            name="repassword"
            placeholder="Confirm Password"
            value={users.repassword}
            onChange={changeHandler}
            required="required"
          />
          <p id="forSignupError4" style={errorTextColor}></p>
          <br />
          <button type="submit" className="btn">
            Sign Up
          </button>
          <br />
          <Link to="/loginpage" className="span">
            <span>Already have an account?</span>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Register;
