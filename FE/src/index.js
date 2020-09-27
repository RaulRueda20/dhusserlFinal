import React from 'react';
import ReactDOM from 'react-dom';
import { SesionProvider } from './sesionStore';
import App from './App';

import "./css/index.css";

ReactDOM.render(<SesionProvider><App /></SesionProvider>,document.querySelector("#root"));

