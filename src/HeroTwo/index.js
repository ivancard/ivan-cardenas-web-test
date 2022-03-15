import Tittle from '../Title';
import './HeroTwo.scss';

export default function HeroTwo() {
    return (
        <div className="sobre-container">
            <Tittle tittle="SOBRE MI" size="3em" abs={true} />
            <div className="hero-two-border">
                <div className="parraffs">
                    <p className="hero-two-parraf">
                        Soy desarrollador de software enfocado al área web,
                        tanto back-end como front-end, siendo esta ultima mi
                        área de mayor especialidad.
                    </p>
                    <p className="hero-two-parraf">
                        Estudio Ingenieria en informática y realicé muchos
                        cursos en diferentes plataformas. Entre ellas Platzi,
                        Udemy, Crehana, etc...
                    </p>
                </div>
            </div>
        </div>
    );
}
