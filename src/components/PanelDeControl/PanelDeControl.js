import React from 'react'

const PanelDeControl = () => {
    return (
        <>
            <div className="row links-home-top">
            <div className="col-xl-3 col-md-6 mb-4">
                <a href="trabajadores.html">
                    <div className="card shadow h-100">
                        <img src="img/trabajadores.webp" alt="Trabajadores" />
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Trabajadores
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">Totales: 11</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-users fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <a href="fichajes.html">
                    <div className="card shadow h-100">
                        <img src="img/fichajes.jpg" alt="Fichajes" />
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Fichajes
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">Hoy: 09/11</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-microphone fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <a href="informes.html">
                    <div className="card shadow h-100">
                        <img src="img/horas-realizadas.jpg" alt="Horas Realizadas" />
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Informes</div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">70%</div>
                                    </div>
                                    <div className="col">
                                    <div className="progress progress-sm mr-2">
                                        <div className="progress-bar bg-info" role="progressbar"
                                            style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-chart-line fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <a href="calendario-laboral.html">
                    <div className="card shadow h-100">
                        <img src="img/calendario.jpg" alt="Calendario" />
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Calendario
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">01-02-2021</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-calendar-alt fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </a>
            </div>
            </div>
            <hr />
            <div>
            <h3 className="h3 mb-1 text-gray-800 title-section"><i className="fas fa-check-circle" style={{color: '#1cc88a'}}></i> ¿Quién está trabajando ahora?</h3>
            <br />
            <div className="tb-act-l">
                <a href="trabajador.html" className="btn btn-success btn-icon-split">
                <span className="icon text-white-50">
                <i className="fas fa-user"></i>
                </span>
                <span className="text">Ariadna Cardenas</span>
                </a>
                <a href="#" className="btn btn-success btn-icon-split">
                <span className="icon text-white-50">
                <i className="fas fa-user"></i>
                </span>
                <span className="text">Cristina Closa Roig</span>
                </a>
                <a href="#" className="btn btn-success btn-icon-split">
                <span className="icon text-white-50">
                <i className="fas fa-user"></i>
                </span>
                <span className="text">Jennifer López Crespo</span>
                </a>
                <a href="#" className="btn btn-success btn-icon-split">
                <span className="icon text-white-50">
                <i className="fas fa-user"></i>
                </span>
                <span className="text">Jordi Grivé Turigas</span>
                </a>
                <a href="#" className="btn btn-success btn-icon-split">
                <span className="icon text-white-50">
                <i className="fas fa-user"></i>
                </span>
                <span className="text">Jose Ma Paniagua Sanchez</span>
                </a>
                <a href="#" className="btn btn-success btn-icon-split">
                <span className="icon text-white-50">
                <i className="fas fa-user"></i>
                </span>
                <span className="text">Marc Girbau Nogueira</span>
                </a>
            </div>
            <br />
            <div className="tb-act-l">
                <a href="#" className="btn btn-secondary btn-icon-split">
                <span className="icon text-white-50">
                <i className="fas fa-user"></i>
                </span>
                <span className="text">Marc Gonzalez Girbau</span>
                </a>
                <a href="#" className="btn btn-secondary btn-icon-split">
                <span className="icon text-white-50">
                <i className="fas fa-user"></i>
                </span>
                <span className="text">Marti Duran Fernandez</span>
                </a>
                <a href="#" className="btn btn-secondary btn-icon-split">
                <span className="icon text-white-50">
                <i className="fas fa-user"></i>
                </span>
                <span className="text">Santiago Camp Estrada</span>
                </a>
            </div>
            </div>
        </>
    )
}

export default PanelDeControl