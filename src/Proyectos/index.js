import ProyectoItem from '../ProyectoItem';
import Tittle from '../Title';
import './proyectos.scss';

export default function Proyectos() {
    return (
        <div className="proyects-conteiner">
            <Tittle tittle="MIS PROYECTOS" size="3em" abs={false} />
            <div className="item-container">
                <ProyectoItem />
                <ProyectoItem />
                <ProyectoItem />
            </div>
            <p style={{ textAlign: 'center' }}>Más proyectos en mi GitHub</p>
        </div>
    );
}
