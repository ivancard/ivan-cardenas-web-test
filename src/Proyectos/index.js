import ProyectoItem from '../ProyectoItem';
import Tittle from '../Title';
import './proyectos.scss';

import proyecto1 from '../img/proyecto1.jpg';
import proyecto2 from '../img/proyecto2.jpg';

export default function Proyectos() {
    return (
        <div className="proyects-conteiner">
            <Tittle tittle="MIS PROYECTOS" size="3em" abs={false} />
            <div className="item-container">
                <ProyectoItem image={proyecto1} />
                <ProyectoItem image={proyecto2} />
                <ProyectoItem image={proyecto1} />
            </div>
            <p style={{ textAlign: 'center' }}>
                <a href="https://github.com/ivancard" target="_blank">
                    Más proyectos en mi GitHub
                </a>
            </p>
        </div>
    );
}
