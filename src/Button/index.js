import './button-style.css';
function Button(prop) {
    const boton = document.querySelector('.boton-pp');
    const underButton = document.querySelector('.under-button');

    return (
        <div className='container-buttons animate__animated animate__fadeIn '>
            <button className='boton-pp'>{prop.name}</button>
        </div>
    );
}

export default Button;
