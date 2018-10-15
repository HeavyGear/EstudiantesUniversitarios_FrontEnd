import React, { Component } from 'react';
import '../styles/Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar"><nav class="navbar navbar-default navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Estudiantes Universitarios</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#home">HOME</a></li>
                <li><a href="#band">NOSOTROS</a></li>
                <li><a href="#tour">AUTORIDAD</a></li>
                <li><a href="#contact">CONTACTO</a></li>
                <li><Link to='/loginPage'>LOGIN</Link></li>
                <li><Link to='/RegisterPage'>REGISTRARSE</Link></li>

                <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#">MAS
                    <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a href="#">Merchandise</a></li>
                    <li><a href="#">Extras</a></li>
                    <li><a href="#">Media</a></li>
                  </ul>
                </li>
                <li><a href="#"><span class="glyphicon glyphicon-search"></span></a></li>
              </ul>
            </div>
          </div>
        </nav>

        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Estudiantes Universitarios</a>
              </div>
              <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="#home">HOME</a></li>
                  <li><a href="#band">NOSOTROS</a></li>
                  <li><a href="#tour">AUTORIDAD</a></li>
                  <li><a href="#contact">CONTACT</a></li>
                  <li><Link to='/loginPage'>LOGIN</Link></li>
                  <li><Link to='/RegisterPage'>REGISTRARSE</Link></li>

                  <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">MAS
                      <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Merchandise</a></li>
                      <li><a href="#">Extras</a></li>
                      <li><a href="#">Media</a></li>
                    </ul>
                  </li>
                  <li><a href="#"><span class="glyphicon glyphicon-search"></span></a></li>
                </ul>
              </div>
            </div>
          </nav>

      </div>
    );
  }
}
export default Navbar;
