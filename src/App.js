import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div id="app">
            <Link to='/useState'>useState</Link>
            <br/>
            <Link to='/useEffect'>useEffect</Link>
            <br/>
            <Link to='/useContext'>useContext</Link>
            <br/>
            <Link to='/useReducer'>useReducer</Link>
            <br/>
            <Link to='/useRef1'>useRef1</Link>
            <br/>
            <Link to='/useRef2'>useRef2</Link>
            <br />
            <Link to='/useRef3'>useRef3</Link>
            <br/>
            <Link to='/useRuducer1'>useRuducer1</Link>
            <br/>
            <Link to='/useRuducer2'>useRuducer2</Link>
            <br/>
            <Link to='/useMemo'>useMemo</Link>
            <br/>
            <Link to='/useCallback'>useCallback</Link>
        </div>
    )
}
export default App;