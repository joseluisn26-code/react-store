import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

import { FaStore } from "react-icons/fa";
import { Link } from 'react-router-dom'



export const Navbar = () => {
    return (
        <header className="header">
            <nav class="navbar navbar-expand-lg  navbar-dark bg-primary">
                <div class="container mb-2 ">
                    <a class="navbar-brand" href="#">Jose luis shop <FaStore /> </a>


                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample07">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            
                             <li className="nav-item">
                                <Link class="nav-link" to="/productos/Tenis">Tenis</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link class="nav-link" to="/productos/Guayos">Guayos</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link class="nav-link" to="/productos/Formal hombre">Formal hombre</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link class="nav-link" to="/productos/Formal mujer">Formal mujer</Link>
                            </li>
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}