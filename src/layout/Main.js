import React from 'react';
import { Outlet } from 'react-router-dom';
import NabBars from '../components/NabBars/NabBars';

const Main = () => {
    return (
        <div>
            <NabBars></NabBars>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;