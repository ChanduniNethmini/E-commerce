import react from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client.js";
import App from './Main';


createRoot ( document.getElementById('app')).render(<App/>);