import React from 'react'

const PanelDeControl = () => {
    return (
        <>
            <div class="row links-home-top">
            <div class="col-xl-3 col-md-6 mb-4">
                <a href="trabajadores.html">
                    <div class="card shadow h-100">
                        <img src="img/trabajadores.webp" alt="Trabajadores" />
                        <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Trabajadores
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">Totales: 11</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-users fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
                <a href="fichajes.html">
                    <div class="card shadow h-100">
                        <img src="img/fichajes.jpg" alt="Fichajes" />
                        <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Fichajes
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">Hoy: 09/11</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-microphone fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
                <a href="informes.html">
                    <div class="card shadow h-100">
                        <img src="img/horas-realizadas.jpg" alt="Horas Realizadas" />
                        <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Informes</div>
                                <div class="row no-gutters align-items-center">
                                    <div class="col-auto">
                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">70%</div>
                                    </div>
                                    <div class="col">
                                    <div class="progress progress-sm mr-2">
                                        <div class="progress-bar bg-info" role="progressbar"
                                            style="width: 70%" aria-valuenow="70" aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-chart-line fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
                <a href="calendario-laboral.html">
                    <div class="card shadow h-100">
                        <img src="img/calendario.jpg" alt="Calendario" />
                        <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Calendario
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">01-02-2021</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-calendar-alt fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </a>
            </div>
            </div>
            <hr />
            <div>
            <h3 class="h3 mb-1 text-gray-800 title-section"><i class="fas fa-check-circle" style="color:#1cc88a"></i> ¿Quién está trabajando ahora?</h3>
            <br />
            <div class="tb-act-l">
                <a href="trabajador.html" class="btn btn-success btn-icon-split">
                <span class="icon text-white-50">
                <i class="fas fa-user"></i>
                </span>
                <span class="text">Ariadna Cardenas</span>
                </a>
                <a href="#" class="btn btn-success btn-icon-split">
                <span class="icon text-white-50">
                <i class="fas fa-user"></i>
                </span>
                <span class="text">Cristina Closa Roig</span>
                </a>
                <a href="#" class="btn btn-success btn-icon-split">
                <span class="icon text-white-50">
                <i class="fas fa-user"></i>
                </span>
                <span class="text">Jennifer López Crespo</span>
                </a>
                <a href="#" class="btn btn-success btn-icon-split">
                <span class="icon text-white-50">
                <i class="fas fa-user"></i>
                </span>
                <span class="text">Jordi Grivé Turigas</span>
                </a>
                <a href="#" class="btn btn-success btn-icon-split">
                <span class="icon text-white-50">
                <i class="fas fa-user"></i>
                </span>
                <span class="text">Jose Ma Paniagua Sanchez</span>
                </a>
                <a href="#" class="btn btn-success btn-icon-split">
                <span class="icon text-white-50">
                <i class="fas fa-user"></i>
                </span>
                <span class="text">Marc Girbau Nogueira</span>
                </a>
            </div>
            <br />
            <div class="tb-act-l">
                <a href="#" class="btn btn-secondary btn-icon-split">
                <span class="icon text-white-50">
                <i class="fas fa-user"></i>
                </span>
                <span class="text">Marc Gonzalez Girbau</span>
                </a>
                <a href="#" class="btn btn-secondary btn-icon-split">
                <span class="icon text-white-50">
                <i class="fas fa-user"></i>
                </span>
                <span class="text">Marti Duran Fernandez</span>
                </a>
                <a href="#" class="btn btn-secondary btn-icon-split">
                <span class="icon text-white-50">
                <i class="fas fa-user"></i>
                </span>
                <span class="text">Santiago Camp Estrada</span>
                </a>
            </div>
            </div>
        </>
    )
}

export default PanelDeControl
