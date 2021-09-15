import React, { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap';
import iconcolor from '../../assets/img/iconcolor.png';
import logosidebar from '../../assets/img/logosidebar.png';
import CalendarioLaboral from '../CalendarioLaboral/CalendarioLaboral';
import Fichajes from '../Fichajes/Fichajes';
import Informes from '../Informes/Informes';
import PanelDeControl from '../PanelDeControl/PanelDeControl';
import AddTrabajador from '../Trabajadores/AddTrabajador';
import TodosLosTrabajadores from '../Trabajadores/TodosLosTrabajadores';
import Trabajador from '../Trabajadores/Trabajador';
import Login from '../Login/Login';
import Register from '../Register/Register';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom';
import Perfil from '../Perfil/Perfil';

const Menu = () => {
      useEffect(() => {
          // Toggle the side navigation
          $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
              $("body").toggleClass("sidebar-toggled");
              $(".sidebar").toggleClass("toggled");
              if ($(".sidebar").hasClass("toggled")) {
                $('.sidebar .collapse').removeClass('toggled');
              };
          });
          
          // Close any open menu accordions when window is resized below 768px
          $(window).resize(function() {
              if ($(window).width() < 768) {
              $('.sidebar .collapse').collapse('hide');
              };
              
              // Toggle the side navigation when window is resized below 480px
              if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
              $("body").addClass("sidebar-toggled");
              $(".sidebar").addClass("toggled");
              $('.sidebar .collapse').collapse('hide');
              };
          });
          
          // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
          $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
              if ($(window).width() > 768) {
              var e0 = e.originalEvent,
                  delta = e0.wheelDelta || -e0.detail;
              this.scrollTop += (delta < 0 ? 1 : -1) * 30;
              e.preventDefault();
              }
          });
          
          // Scroll to top button appear
          $(document).on('scroll', function() {
              var scrollDistance = $(this).scrollTop();
              if (scrollDistance > 100) {
              $('.scroll-to-top').fadeIn();
              } else {
              $('.scroll-to-top').fadeOut();
              }
          });
          
          // Smooth scrolling using jQuery easing
          $(document).on('click', 'a.scroll-to-top', function(e) {
              var $anchor = $(this);
              $('html, body').stop().animate({
              scrollTop: ($($anchor.attr('href')).offset().top)
              }, 1000, 'easeInOutExpo');
              e.preventDefault();
          });
      }, [])
      
    return (
        <Router>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion testSanty" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="panel-de-control.html">
                    <div className="sidebar-brand-icon" style={{display: 'none'}}>
                        <img src={iconcolor} alt="" />
                    </div>
                    <div className="sidebar-brand-text mx-3">
                        <img src={logosidebar} alt="Fichaje por voz" />
                    </div>
                </a>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className="non-active nav-link" to="/"><i className="fas fa-fw fa-tachometer-alt"></i> <span>Panel de control</span></NavLink>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    MENÚ GENERAL
                </div>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTrabajadores"
                        aria-expanded="false" aria-controls="collapseTrabajadores">
                        <i className="fas fa-fw fa-users"></i>
                        <span>Trabajadores</span>
                    </a>
                    <div id="collapseTrabajadores" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink exact activeClassName="active" className="non-active collapse-item" to="/trabajadores">Todos los trabajadores</NavLink>
                            <NavLink exact activeClassName="active" className="non-active collapse-item" to="/nuevo-trabajador">Añadir Trabajador</NavLink>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className="non-active nav-link" to="/fichajes"><i className="fas fa-microphone"></i> <span>Fichajes</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className="non-active nav-link" to="/calendario-laboral"><i className="fas fa-calendar-alt"></i> <span>Calendario laboral</span></NavLink>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    OTROS
                </div>
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className="non-active nav-link" to="/informes"><i className="fas fa-chart-line"></i> <span>Informes</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="active" className="non-active nav-link" to="/"><i className="fas fa-fw fa-cog"></i> <span>Configuración</span></NavLink>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
            
            <Switch>
                <Route exact path="/trabajadores" component={TodosLosTrabajadores} />
                <Route exact path="/nuevo-trabajador" component={AddTrabajador} />
                <Route exact path="/fichajes" component={Fichajes} />
                <Route exact path="/calendario-laboral" component={CalendarioLaboral} />
                <Route exact path="/informes" component={Informes} />
                <Route exact path="/registrarse" component={Register} />
                <Route exact path="/iniciar-sesion" component={Login} />
                <Route exact path="/perfil" component={Perfil} />
                <Route path="/" component={PanelDeControl} />
            </Switch> 
        </Router>
    )
}

export default Menu;
