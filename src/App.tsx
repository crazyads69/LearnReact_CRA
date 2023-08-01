import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert } from './Alert';

function App() {
    return (
        <div className="container">
            <Alert heading="Success" closable>
                Everything is good
            </Alert>
        </div>
    );
}

export default App;
