import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Admin from './components/Admin';
import Ventas from './components/Ventas';


const Router = () => {
    return (

        <BrowserRouter>

            <Header />

            <Routes>

                <Route exact path='/admin' element={<Admin />} />
                <Route exact path='/admin/inicio' element={<Ventas />} />

            </Routes>

        </BrowserRouter>

    );
}
export default Router;