import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail'
const App = () => {
    return (
        <div className= "ui container comments">
        
        <CommentDetail author="sam" />
        <CommentDetail author="alex"/>
        <CommentDetail author="jane"/>
       
        
        </div>)
}

ReactDOM.render(<App />, document.getElementById('root'));
