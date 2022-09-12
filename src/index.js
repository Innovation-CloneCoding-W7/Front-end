import ReactDOM from 'react-dom/client';
import Router from "./shared/Router";
import GlobalStyle from "./shared/GlobalStyle";
import GlobalState from "./shared/GlobalStates";
import {useState} from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <GlobalStyle/>
        <Router/>
    </div>
);

