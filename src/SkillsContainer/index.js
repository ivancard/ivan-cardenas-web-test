import Skill from '../Skill';
import './skillsContainer.scss';

import htmlIcon from '../img/html-icon.svg';
import cssIcon from '../img/css-icon.svg';
import jsIcon from '../img/javascript-icon.svg';
import reactIcon from '../img/react-icon.svg';
import sassIcon from '../img/sass-icon.svg';
import javaIcon from '../img/java-icon.svg';
import xdIcon from '../img/adobe-xd-icon.svg';
import sqlIcon from '../img/mysql-icon.svg';
import linuxIcon from '../img/linux-icon.svg';

export default function SkillsContainer() {
    return (
        <div className="contenedor-skills">
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
    );
}
