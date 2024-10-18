import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Bienvenido a la Galería de Arte</h1>
            <Link to="/art/1">
                <button>El Ángel Caído</button>
            </Link>
            <Link to="/art/2">
                <button>La Gioconda</button>
            </Link>
            <Link to="/art/3">
                <button>La Caída de Ícaro</button>
            </Link>
        </div>
    );
};

export default Home;