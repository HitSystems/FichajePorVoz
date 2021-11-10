import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import logo from '../../assets/img/logo.png';
import { cookies } from '../../helpers/cookies';

const Login = (props) => {
    const [userInputs, setUserInputs] = useState({
        email: '',
        passwd: '',
        google: false,
    })
    useEffect(() => {
        document.getElementById('accordionSidebar').style.display = 'none';
        $('body').addClass('bg-gradient-primary');
        // document.getElementById('wrapper').setAttribute('id', 'none');
        $('#wrapper').contents().unwrap();
    }, []);
    const responseGoogle = (response) => {
        const { email, givenName, googleId, name } = response.profileObj;
        const data = {
            email,
            givenName,
            googleId,
            name,
            google: true,
        }
        axios.post('/iniciar-sesion', data).then(({data}) => {
            console.log(data);
            cookies.set('empresa', data.empresa);
            cookies.set('nombre', data.nombre);
            cookies.set('mail', data.mail);
            cookies.set('idUsuario', data.idTrabajador);
            cookies.set('accionUltimoFichaje', data.accionUltimoFichaje);
            cookies.set('accionUltimoDescanso', data.accionUltimoDescanso);
            cookies.set('loggedIn', true);
            window.location.href = '/FichajePorVoz/';
        }).catch((err) => {
            console.log(err);
        });
    }
    const handleOnChange = (e) => {
        e.preventDefault();
        setUserInputs({
            ...userInputs,
            [e.target.name]: e.target.value,
        });
    }
    const handleOnClick = (e) => {
        e.preventDefault();
        axios.post('/iniciar-sesion', userInputs).then(({data}) => {
            console.log(data)
            cookies.set('empresa', data.empresa);
            cookies.set('nombre', data.nombre);
            cookies.set('mail', data.mail);
            cookies.set('idUsuario', data.idTrabajador);
            cookies.set('accionUltimoFichaje', data.accionUltimoFichaje);
            cookies.set('accionUltimoDescanso', data.accionUltimoDescanso);
            window.location.href = '/FichajePorVoz/';
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div>
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
                                                placeholder="Email" name='email' autocomplete="off" onChange={handleOnChange} />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Contraseña" name='passwd' autocomplete="off" onChange={handleOnChange} />
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                <label className="custom-control-label" for="customCheck">Recordarme</label>
                                            </div>
                                        </div>
                                        <button type='submit' className="btn btn-primary btn-user btn-block btn-login" onClick={handleOnClick}>
                                            Entrar
                                        </button>
                                        <hr />
                                        <GoogleLogin
                                            clientId="168682957180-4nbhoep09je83rtufob9c7954g1447nl.apps.googleusercontent.com"
                                            buttonText="Iniciar sesión"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
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
    </div>
    )
}

export default Login
