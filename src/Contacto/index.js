import Hero from '../Hero';
import './contacto.scss';

export default function Contacto() {
    return (
        <div className="contacto-container">
            <Hero
                windowW="40%"
                ph={false}
                fColumn={true}
                p1="Contacto"
                p2="MAIL: ivan.cardenas.35977@hotmail.com"
                p3="LinkedIn: linkedin.com/in/ivan-cardenas-1012b3200/"
                p4="GitHub: github.com/ivancard"
            />
        </div>
    );
}
