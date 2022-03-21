import Skill from '../Skill';
import './skillsContainer2.scss';

import htmlIcon from '../img/html-icon.svg';
import cssIcon from '../img/css-icon.svg';
import jsIcon from '../img/javascript-icon.svg';
import reactIcon from '../img/react-icon.svg';
import sassIcon from '../img/sass-icon.svg';
import javaIcon from '../img/java-icon.svg';
import xdIcon from '../img/adobe-xd-icon.svg';
import sqlIcon from '../img/mysql-icon.svg';
import linuxIcon from '../img/linux-icon.svg';
import Tittle from '../Title';

export default function SkillsContainer2() {
    return (
        <>
            <h2 className="tituloskills"> TECNOLOGIAS Y SKILLS</h2>
            <div className="contenedor-skills2">
                <Skill ico={htmlIcon} content="HTML" />
                <Skill ico={cssIcon} content="CSS" />
                <Skill ico={jsIcon} content="JavaScript" />
                <Skill ico={reactIcon} content="React" />
                <Skill ico={sassIcon} content="Sass" />
                <Skill ico={javaIcon} content="Java" />
                <Skill ico={xdIcon} content="Adobe XD" />
                <Skill ico={sqlIcon} content="MySQL" />
                <Skill ico={linuxIcon} content="Linux" />
            </div>
        </>
    );
}
