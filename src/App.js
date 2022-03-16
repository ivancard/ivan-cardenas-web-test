import AboutMe from './AboutMe';
import './App.css';
import Button from './Button';
import Contacto from './Contacto';
import Footer from './Footer';
import Hero from './Hero';
import Logo from './Logo';
import Proyectos from './Proyectos';
function App() {
    return (
        <div className="App">
            <nav>
                <Logo className="nav-logo" />
                <ul className="nav-list">
                    <li>
                        <Button name="INICIO" />
                    </li>
                    <li>
                        <Button name="SOBRE MI" />
                    </li>
                    <li>
                        <Button name="MIS PROYECTOS" />
                    </li>
                    <li>
                        <Button name="CONTACTO" />
                    </li>
                </ul>
            </nav>
            <header className="app-header">
                <Hero
                    windowW="98%"
                    h4="Hola, mi nombre es"
                    h1="Ivan Cardenas"
                    h6="Desarrollador de Software"
                    ph={true}
                    fColumn={false}
                />
            </header>

            <AboutMe />
            <Proyectos />
            <Contacto />
            <Footer></Footer>
        </div>
    );
}

export default App;
