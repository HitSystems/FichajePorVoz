import React, { useEffect } from 'react'
import $ from 'jquery';
import 'bootstrap';
import iconcolor from '../../assets/img/iconcolor.png';
import logosidebar from '../../assets/img/logosidebar.png';

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
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
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
                <a className="nav-link" href="panel-de-control.html">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Panel de Control</span></a>
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
                        <a className="collapse-item" href="trabajadores.html">Todos los Trabajadores</a>
                        <a className="collapse-item" href="nuevo-trabajador.html">Añadir Trabajador</a>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="fichajes.html">
                    <i className="fas fa-microphone"></i>
                    <span>Fichajes</span>
                </a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="calendario-laboral.html">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Calendario Laboral</span>
                </a>
            </li>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">
                OTROS
            </div>
            <li className="nav-item">
                <a className="nav-link" href="informes.html">
                    <i className="fas fa-chart-line"></i>
                    <span>Informes</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="'">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Configuración</span></a>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    )
}

export default Menu;
