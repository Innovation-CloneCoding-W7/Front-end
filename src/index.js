import ReactDOM from 'react-dom/client';
import Router from "./shared/Router";
import GlobalStyle from "./shared/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <GlobalStyle/>
        <Router/>
    </div>
);

