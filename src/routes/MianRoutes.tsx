import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';

const MianRoutes:React.FC = () => {
    const PUBLIC = [
        {link:'/',element:<Home/> , id :1},
    ]
    return (
        <div>
            <Routes>
                {
                    PUBLIC.map(el => (
                        <Route path={el.link} element={el.element} key={el.id}/>
                    ))
                }
            </Routes>
        </div>
    );
};

export default MianRoutes;