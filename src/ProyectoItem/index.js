import React from 'react';

import './proyectoItem.scss';

export default function ProyectoItem({ setModal, image }) {
    function mostrar(name) {
        console.log(`Hola ${name}`);
    }
    return (
        <React.Fragment>
            <div
                className="cuadro"
                style={{ backgroundImage: `url(${image})` }}
            >
                <button
                    onClick={() => setModal(true)}
                    style={{ marginTop: '230px' }}
                >
                    VER
                </button>
            </div>
        </React.Fragment>
    );
}
