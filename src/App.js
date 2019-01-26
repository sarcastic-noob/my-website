import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react';
import Background from './images/bg4.jpeg';
import logo from './images/logo.svg';
import fb from './images/fb.svg';
import git from './images/git.png';
import insta from './images/insta.png';
import medium from './images/medium.png';
import './App.css';



var sectionStyle = {
  width: '1920px',
  height: '1080px',
  backgroundImage: "url(" + Background + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
};



export default class App extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
       </section>

    );
  }
}
