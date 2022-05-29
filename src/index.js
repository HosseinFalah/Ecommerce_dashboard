import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './Context/ContextProvider';
import './index.css';

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
    <React.StrictMode>
        <ContextProvider>
            <App/>
        </ContextProvider>
    </React.StrictMode>
)