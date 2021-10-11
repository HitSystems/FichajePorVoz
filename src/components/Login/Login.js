import React, { useEffect } from 'react';
import $ from 'jquery';
import logo from '../../assets/img/logo.png';


const Login = () => {
    useEffect(() => {
        document.getElementById('accordionSidebar').style.display = 'none';
        $('body').addClass('bg-gradient-primary');
        // document.getElementById('wrapper').setAttribute('id', 'none');
        $('#wrapper').contents().unwrap();
    }, []);
    return (
        <>
        <div className="container">

        <div className="row justify-content-center">

            <span className="logo-login">
                <img src={logo} alt="" />
            </span>

            <h2 className="text-center" style={{fontSize: '25px', fontWeight: 'normal'}}>La solución más eficiente para los fichajes de <b>tu empresa</b></h2>

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5 card-login">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Bienvenido de nuevo</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Email" autocomplete="off" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Contraseña" autocomplete="off" />
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                <label className="custom-control-label" for="customCheck">Recordarme</label>
                                            </div>
                                        </div>
                                        <a href="panel-de-control.html" className="btn btn-primary btn-user btn-block btn-login">
                                            Entrar
                                        </a>
                                        <hr />
                                        <a href="#" className="btn btn-google btn-block btn-user"><i className="fab fa-google fa-fw"></i> Google</a>
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                        <a className="small" href="recordar-contrasena.html">¿Has olvidado tu contraseña?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>

    <footer className="sticky-footer">
        <div className="container my-auto">
            <div className="copyright text-center my-auto">
                <span>&copy; 2020 - <a href="#">Fichajeporvoz.com</a> - Todos los derechos reservados</span>
                <span className="copy-grafix">
                    Desarrollado por <a href="https://grafix.es/" target="_blank">Grafix</a>
                </span>
            </div>
        </div>
    </footer>
    </>
    )
}

export default Login
