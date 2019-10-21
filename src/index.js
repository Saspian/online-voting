import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //   document.querySelector('nav').style.padding = '2px 10px';
      // document.querySelector('.logo').style.width = '150px';
      document.querySelector('.navbar').style.background = '#7299E5';
  } else {
    // document.querySelector('nav').style.padding = "10px 10px";
    // document.querySelector('.logo').style.width = "200px";
    document.querySelector('.navbar').style.background = 'rgba(30, 102, 196,0)';
    document.querySelector('.navbar2').style.background = 'white';
  }
}

