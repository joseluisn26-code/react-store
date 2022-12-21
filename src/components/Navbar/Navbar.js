import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

import { FaStore } from "react-icons/fa";



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
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Ofertas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Testimonios</a>
                            </li>

                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}