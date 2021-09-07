import React from 'react'

const Menu = () => {
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="panel-de-control.html">
                <div class="sidebar-brand-icon" style="display: none;">
                    <img src="img/icon-color.png" alt="" />
                </div>
                <div class="sidebar-brand-text mx-3">
                    <img src="img/logo-sidebar.png" alt="Fichaje por voz" />
                </div>
            </a>
            <hr class="sidebar-divider my-0" />
            <li class="nav-item">
                <a class="nav-link" href="panel-de-control.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Panel de Control</span></a>
            </li>
            <hr class="sidebar-divider" />
            <div class="sidebar-heading">
                MENÚ GENERAL
            </div>
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTrabajadores"
                    aria-expanded="false" aria-controls="collapseTrabajadores">
                    <i class="fas fa-fw fa-users"></i>
                    <span>Trabajadores</span>
                </a>
                <div id="collapseTrabajadores" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <a class="collapse-item" href="trabajadores.html">Todos los Trabajadores</a>
                        <a class="collapse-item" href="nuevo-trabajador.html">Añadir Trabajador</a>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="fichajes.html">
                    <i class="fas fa-microphone"></i>
                    <span>Fichajes</span>
                </a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="calendario-laboral.html">
                    <i class="fas fa-calendar-alt"></i>
                    <span>Calendario Laboral</span>
                </a>
            </li>
            <hr class="sidebar-divider" />
            <div class="sidebar-heading">
                OTROS
            </div>
            <li class="nav-item">
                <a class="nav-link" href="informes.html">
                    <i class="fas fa-chart-line"></i>
                    <span>Informes</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Configuración</span></a>
            </li>
            <hr class="sidebar-divider d-none d-md-block" />
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    )
}

export default Menu;
