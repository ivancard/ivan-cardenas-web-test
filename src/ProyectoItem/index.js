import React from 'react';
import Button from '../Button';
import './proyectoItem.scss';

export default function ProyectoItem(props) {
    return (
        <React.Fragment>
            <div
                className="cuadro"
                style={{ backgroundImage: `url(${props.image})` }}
            >
                <Button name="VER" />
            </div>
        </React.Fragment>
    );
}
