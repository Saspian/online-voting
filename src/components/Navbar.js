import React, {useEffect} from 'react';
import '../css-moudule/Navbar.css';
import '../css-moudule/NavbarDetail.css';
import {Link} from 'react-router-dom';
// import {imgsrc} from 'assests/img/cLogo.png';

const Navbar = () => {
    //BURGER ANIMATION
    function showSide(){
        document.querySelector('.burger').classList.toggle('change');
        document.querySelector('.navbar2').classList.toggle('secondNav');
    }
  

    useEffect(()=>{
        let loggedStatus =false;
        const tokenChecker = localStorage.getItem('token');

        if((tokenChecker) && (tokenChecker !== 'undefined')) {
            loggedStatus= true;
        }
        if(loggedStatus) {
            // document.querySelector('.userLogged').classList.add('unhideUser');
        }
    })

    const removeLocalStorage = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        window.location = '/loginpage';
    }
    return(
        <header>
        <nav className='navbar2'>
                <div className='navLinks2'>
                    <Link to='/'>
                        <img src='assests/img/cLogo.png' alt="logo" className='logo'/>
                    </Link>
                <li className='abt'>ABOUT EVENT</li>
                <li className='faq'>FAQ</li>
                <li> 
                        <span className="burger2" onClick={showSide} >
                        <div class="dropdown">
                            <button class="dropbtn">Menu</button>
                            <div class="dropdown-content">
                                <span><i className='fas fa-user-circle lr'></i> {localStorage.getItem('username')}</span>
                                <span onClick={removeLocalStorage}><i className='fas fa-sign-out-alt'></i> logout</span>
                            </div>
                        </div>
                            <div className='lines'>
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                            </div>
                        </span>
                </li>
                </div>      
            </nav>
            <nav className='navbar'>
                <div className='navLinks'>
                <Link to='/'>
                    <img src='assests/img/logo.png' alt="logo" className='logo'/>
                </Link>
                <li> 
                        <span className="burger" onClick={showSide}>
                            Menu
                            <div className='lines'>
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                            </div>
                            
                        </span>
                </li>
                </div>      
            </nav>
        </header>
    );
}

export default Navbar;