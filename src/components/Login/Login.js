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
        <div class="container">

        <div class="row justify-content-center">

            <a href="#" class="logo-login">
                <img src={logo} alt="" />
            </a>

            <h2 class="text-center" style={{fontSize: '25px', fontWeight: 'normal'}}>La solución más eficiente para los fichajes de <b>tu empresa</b></h2>

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5 card-login">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Bienvenido de nuevo</h1>
                                    </div>
                                    <form class="user">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Email" autocomplete="off" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Contraseña" autocomplete="off" />
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                <label class="custom-control-label" for="customCheck">Recordarme</label>
                                            </div>
                                        </div>
                                        <a href="panel-de-control.html" class="btn btn-primary btn-user btn-block btn-login">
                                            Entrar
                                        </a>
                                        <hr />
                                        <a href="#" class="btn btn-google btn-block btn-user"><i class="fab fa-google fa-fw"></i> Google</a>
                                    </form>
                                    <hr />
                                    <div class="text-center">
                                        <a class="small" href="recordar-contrasena.html">¿Has olvidado tu contraseña?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>

    <footer class="sticky-footer">
        <div class="container my-auto">
            <div class="copyright text-center my-auto">
                <span>&copy; 2020 - <a href="#">Fichajeporvoz.com</a> - Todos los derechos reservados</span>
                <span class="copy-grafix">
                    Desarrollado por <a href="https://grafix.es/" target="_blank">Grafix</a>
                </span>
            </div>
        </div>
    </footer>
    </>
    )
}

export default Login
