import './hero-style.css';
import imagen from '../img/foto-perfil.png';

export default function Hero(props) {
    const ventanaStyles = {
        width: props.windowW,
        flexDirection: props.fColumn ? 'columm' : 'row',
    };

    return (
        <div className="container-hero">
            <div className="ventana ventana1" style={{ width: props.windowW }}>
                <p className="icons">
                    <svg
                        className="line-minimize"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="3"
                        viewBox="0 0 34.431 3"
                    >
                        <path
                            id="Trazado_25"
                            data-name="Trazado 25"
                            d="M28,0H-6.431"
                            transform="translate(6.431 1.5)"
                            fill="none"
                            stroke="#707070"
                            strokeWidth="3"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 close-button"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </p>
                <hr className="linea" />
                <div className="contenido">
                    <div className="texto">
                        {props.h4 && <h4>{props.h4}</h4>}
                        {props.h1 && <h1>{props.h1}</h1>}
                        {props.p1 && (
                            <p className="contacto-tittle">{props.p1}</p>
                        )}
                        {props.p2 && (
                            <p className="contacto-datos">{props.p2}</p>
                        )}
                        {props.p3 && (
                            <p className="contacto-datos">
                                <a
                                    href="http://linkedin.com/in/ivan-cardenas-1012b3200/"
                                    target="_blank"
                                >
                                    {props.p3}
                                </a>
                            </p>
                        )}
                        {props.p4 && (
                            <p className="contacto-datos">
                                <a
                                    href="http://github.com/ivancard"
                                    target="_blank"
                                >
                                    {props.p4}
                                </a>
                            </p>
                        )}
                        {props.h6 && <h6>{props.h6}</h6>}
                    </div>
                    {props.ph === true && (
                        <img className="foto-perfil" alt="hola" src={imagen} />
                    )}
                </div>
            </div>
            <div
                className="ventana ventana2"
                style={{ width: props.windowW }}
            ></div>
            <div
                className="ventana ventana3"
                style={{ width: props.windowW }}
            ></div>
        </div>
    );
}
