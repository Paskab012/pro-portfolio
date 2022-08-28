import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
