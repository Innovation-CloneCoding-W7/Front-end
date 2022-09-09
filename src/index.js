import ReactDOM from 'react-dom/client';
import App from "./App";
import Router from "./shared/Router";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <App />
    </Router>
);

