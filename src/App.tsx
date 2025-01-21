/* eslint-disable */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Cv from './pages/Cv/Cv';
import Realisation from './pages/Realisation/Realisation';
import Illustrator from './pages/Illustrator/Illustrator';

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
