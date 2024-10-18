// src/pages/Art.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Art = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Definimos un arreglo de obras de arte
    const artPieces = [
        { id: '1', title: 'El Ángel Caído', imageUrl: 'https://i.pinimg.com/enabled_lo/564x/a5/f4/8a/a5f48a11d416f7ba91281b2c2563214d.jpg' },
        { id: '2', title: 'La Gioconda', imageUrl: 'https://i.pinimg.com/564x/4c/7b/59/4c7b59d6c9049e8699f2b6a500c6ad49.jpg' },
        { id: '3', title: 'La Caída de Ícaro', imageUrl: 'https://www.meisterdrucke.es/kunstwerke/500px/Carlo%20Saraceni%20-%20The%20Fall%20of%20Icarus%20%20-%20(MeisterDrucke-44935).jpg' },
    ];

    // Encontramos la obra actual según el ID
    const currentIndex = artPieces.findIndex((art) => art.id === id);
    const currentArt = artPieces[currentIndex];

    // Funciones para navegar a la obra anterior y siguiente
    const goToPrevious = () => {
        if (currentIndex > 0) {
            navigate(`/art/${artPieces[currentIndex - 1].id}`);
        }
    };

    const goToNext = () => {
        if (currentIndex < artPieces.length - 1) {
            navigate(`/art/${artPieces[currentIndex + 1].id}`);
        }
    };

    if (!currentArt) {
        return <h2>Obra no encontrada</h2>;
    }

    return (
        <div>
            <h2>{currentArt.title}</h2>
            <img src={currentArt.imageUrl} alt={currentArt.title} style={{ width: '300px', height: 'auto' }} />
            <div>
                <button onClick={goToPrevious} disabled={currentIndex === 0}>
                    Anterior
                </button>
                <button onClick={goToNext} disabled={currentIndex === artPieces.length - 1}>
                    Siguiente
                </button>
                <br />
                <button onClick={() => navigate('/home')}>Volver al Home</button>
            </div>
        </div>
    );
};

export default Art;

