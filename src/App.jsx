import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Art from './pages/Art';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/art/:id" element={<Art />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default App;