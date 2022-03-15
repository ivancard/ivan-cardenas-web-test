import './skill.scss';
import Tippy from '@tippyjs/react';

// import 'tippy.js/dist/tippy.css';

export default function Skill(props) {
    return (
        <div className="iconSkill">
            <Tippy
                interactive={true}
                content={<p className="toolTipOwn">{props.content}</p>}
            >
                <img src={props.ico}></img>
            </Tippy>
        </div>
    );
}
