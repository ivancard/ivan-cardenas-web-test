import './title.scss';

export default function Tittle(props) {
    const titlenoAbs = {
        fontSize: props.size,
        position: 'initial',
        margin: '0 auto',
        marginTop: '1.5rem',
    };
    return (
        <>
            {props.abs === false && (
                <p className="tittle-text" style={titlenoAbs}>
                    {props.tittle}
                </p>
            )}
            {props.abs === true && (
                <p className="tittle-text" style={{ fontSize: props.size }}>
                    {props.tittle}
                </p>
            )}
        </>
    );
}
