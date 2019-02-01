import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'Faker';
import CommentDetail from './CommentDetail'
const App = () => {
    
    return (
        <div className="ui container comments">

            <CommentDetail author="sam"
                timeAgo="Today at 4:45 PM"
                post = "blogPost1"
                image = {faker.Image.avatar()}
                />
            <CommentDetail author="alex"
                timeAgo="Today at 6:42 PM"
                post = "blogPost2"
                image = {faker.Image.avatar()} />
            <CommentDetail author="jane"
                timeAgo="Yesterday at 1:10 AM" 
                post = "blogPost3"
                image = {faker.Image.avatar()}/>


        </div>)
}

ReactDOM.render(<App />, document.getElementById('root'));
