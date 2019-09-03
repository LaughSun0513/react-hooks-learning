import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './useState&useEffect.js';
// import Parent from './useContext'
// import ReducerDemo from './useReducer'
// import ClickToShowColor from './useRuducer&useContext/demo1'
// import ClickToShowColor from './useRuducer&useContext/demo2'
// import UseMemoDemo from './useMemo'
// import RefDemo from './useRef/useRef1'
// import RefDemo from './useRef/useRef2'
import UseMyhooks from './useCallback'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<UseMyhooks/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
