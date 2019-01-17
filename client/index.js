import React from 'react';
import ReactDom from 'react-dom';

const Index = () => {
    return <div> Hello React! </div>
};

ReactDom.render(<Index />, document.getElementById('root'));
