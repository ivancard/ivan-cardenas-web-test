import './about-me-style.css';

import HeroTwo from '../HeroTwo';
import Tittle from '../Title';
import SkillsContainer from '../SkillsContainer';

export default function AboutMe() {
    return (
        <div className="container-About-me">
            <div className="about-me-gridPP">
                <div className="about-me-descripcion">
                    <HeroTwo />
                </div>
                <div className="about-me-skills">
                    <Tittle
                        tittle="TECNOLOGIAS Y SKILLS"
                        size="2em"
                        abs={false}
                    />
                    <SkillsContainer />
                </div>
            </div>
        </div>
    );
}
