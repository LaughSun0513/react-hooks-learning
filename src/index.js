import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter,Route} from 'react-router-dom';
// import App from './useState&useEffect.js';

import App from './App';
import UseState from './useState';
import UseEffect from './useEffect';
import Parent from './useContext';
import UseReducer from './useReducer';
import UseRef1 from './useRef/useRef1';
import UseRef2 from './useRef/useRef2';
import UseForwardRef from './useRef/useRef3';
import UseRuducer1 from './useRuducer&useContext/demo1';
import UseRuducer2 from './useRuducer&useContext/demo2';
import UseMemoDemo from './useMemo';
import UseMyhooks from './useCallback';


import * as serviceWorker from './serviceWorker';

const routes = (
    <HashRouter>
            <Route component={App} path="/"/>
            <Route exact component={UseState} path="/useState"/>
            <Route exact component={UseEffect} path="/useEffect"/>
            <Route exact component={Parent} path="/useContext" />
            <Route exact component={UseReducer} path="/useReducer" />
            <Route exact component={UseRef1} path="/useRef1" />
            <Route exact component={UseRef2} path="/useRef2" />
            <Route exact component={UseForwardRef} path="/useRef3" />
            <Route exact component={UseRuducer1} path="/useRuducer1" />
            <Route exact component={UseRuducer2} path="/useRuducer2" />
            <Route exact component={UseMemoDemo} path="/useMemo" />
            <Route exact component={UseMyhooks} path="/useCallback"/>
    </HashRouter>
)
ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
