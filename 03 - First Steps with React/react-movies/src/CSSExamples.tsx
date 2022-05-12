// import './CSSExamples.css'; // This way will apply to the whole application. Is not what we want
import css from './CSSExamples.module.css'; // here we are only importing the CSS for this component
export default function CSSExamples() {

    const square = {
        backgroundColor: 'green',
        height: '50px',
        width: '50px',
        marginLeft: '1rem'
    };

    return (
        <>
            <h1 className="red">CSS Examples</h1>
            <h2 style={{ color: 'blue', fontSize: '25px' }}>Sub text</h2>
            <div style={square}></div>
            <br />
            <div style={square}></div>
            <br />
            <h2 className={css['primary-color']}>This is a text styled from a module</h2>
        </>
    )
}