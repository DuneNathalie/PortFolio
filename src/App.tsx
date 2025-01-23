/* eslint-disable */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cv from './pages/Cv';
import Home from './pages/Home';
import Realisation from './pages/Realisation';
import Illustrator from './pages/Illustrator';

const App: React.FC = () => {
    return (
        <div >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cv' element={<Cv />} />
                <Route path='/illustrator' element={<Illustrator />} />
                <Route path='/realisation' element={<Realisation />} />
              {/** <Route path='/Contact' element={<Contact />} />*/}  
            </Routes>
        </div>
    );
};

export default App;
