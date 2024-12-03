/* eslint-disable */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Cv from './pages/Cv';
import Realisation from './pages/Realisation';
import Graphism from './pages/Graphism';
import Contact from './pages/Contact';

const App: React.FC = () => {
    return (
        <div >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cv' element={<Cv />} />
                <Route path='/graphism' element={<Graphism />} />
                <Route path='/realisation' element={<Realisation />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;
