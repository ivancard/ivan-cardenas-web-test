import React from 'react';

import './proyectoItem.scss';

export default function ProyectoItem({ setModal, image }) {
    return (
        <React.Fragment>
            <div
                className='cuadro'
                style={{ backgroundImage: `url(${image})` }}>
                <button
                    onClick={() => setModal(true)}
                    style={{ marginTop: '230px', zIndex: '10' }}>
                    VER
                </button>
            </div>
        </React.Fragment>
    );
}
