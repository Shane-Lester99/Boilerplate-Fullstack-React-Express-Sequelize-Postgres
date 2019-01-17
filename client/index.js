import React from 'react';
import ReactDom from 'react-dom';
import {Students, Campuses } from './components/index.js';
const Index = () => {
    return <div> Hello React! 
            <Students />
            <Campuses />
        </div>
};

ReactDom.render(<Index />, document.getElementById('root'));


