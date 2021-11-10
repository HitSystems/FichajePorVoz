import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { cookies } from '../../helpers/cookies';

const Topbar = () => {
    const [imagen, setImagen] = useState('');
    useEffect(() => {
        const source = axios.CancelToken.source();
        axios.get(`/datosTrabajador?empresa=${cookies.get('empresa')}&idUsuario=${cookies.get('idUsuario')}`, { cancelToken: source.token }).then((data) => {
            setImagen(data.data.imagen);
        }).catch((err) => {
            if (axios.isCancel(err)) {
            } else {
                throw err;
            }
        })
        return () => {
            source.cancel();
        }
    }, [])
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="'" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{cookies.get('nombre')}</span>
                        <img className="img-profile rounded-circle" src={imagen} alt='perfil' />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="perfil">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Perfil
                        </a>
                        <a className="dropdown-item" href="'">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Ajustes
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="'" data-toggle="modal" data-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Cerrar Sesión
                        </a>
                    </div>
                </li>

            </ul>

        </nav>
    )
}

export default Topbar
