import React, {useState, useEffect} from 'react';
import '../css-moudule/Login.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Noty from 'noty';
import 'noty/lib/noty.css';
import 'noty/lib/themes/mint.css';

const Login = () => {
    
    const errorTextColor = {
        color: 'red'
    }
    const showNotification = () =>{
        new Noty({
            type: 'success',
            theme: 'mint',
            layout: 'topRight',
            text: 'Login sucessfull',
            timeout: 3000
        }).show();
    }
    

    useEffect(()=>{
        const tokenChecker = localStorage.getItem('token');
        let loggedStatus = false;

        if((tokenChecker) && (tokenChecker !== 'undefined')){
            loggedStatus = true;
        }

        if(loggedStatus){
            alert('you are already Logged in!');
            window.location = '/votingpage';
        }
            
    })

    const [loginusers, setLoginusers] = useState({
        email: '',
        password: '',
    });

    const changeHandler2 = (e) => {
        setLoginusers({...loginusers,[e.target.name] : e.target.value});
    }

    const checkUser = (e) => {
        e.preventDefault();
        console.log(loginusers);
        axios.post('http://localhost:3001/api/user/login',loginusers)
            .then(response =>{
                console.log(response);
                localStorage.setItem('username',response.data.username);
                localStorage.setItem('token',response.data.token);
                localStorage.setItem('loggedUserID',response.data.id);
                
                // console.log(response.data.emailStatus);
                // console.log(response.data.pwdStatus);

                if((response.data.emailStatus) && (response.data.emailStatus !== 'undefined')){
                    document.getElementById('forLoginError').textContent = ' *'+response.data.emailStatus;
                }
                if((response.data.pwdStatus) && (response.data.pwdStatus !== 'undefined')){
                    document.getElementById('forLoginError2').textContent = ' *'+response.data.pwdStatus;
                }
                
                if((localStorage.getItem('username') && (localStorage.getItem('token'))) !== 'undefined'){
                    console.log('Login sucessfully');
                    showNotification();
                    window.location.href = '/votingpage';
                }
            })   
            .catch(error =>{
                console.log(error)
            })   
    }
    
    return(
        <main className='login'>
            <img src='assests/img/user.png' alt="userImage"/>
            <div className="form">
                <form onSubmit={checkUser}>
                    <input type="text" id="email" size="40" name="email" placeholder='email' value={loginusers.email} onChange={changeHandler2}/><p id="forLoginError" style={errorTextColor}></p><br/>
                    <input type="password" id="password" size="40" name="password" placeholder='Password' value={loginusers.password} onChange={changeHandler2}/><p id="forLoginError2" style={errorTextColor}></p> <br/>
                        <button type="submit" className='btn'>Login</button>
                    <Link to='/registerpage'>
                        <button className='btn'>Sign Up</button>
                    </Link>
                </form>    
            </div>
        </main>
    );
}
export default Login;
