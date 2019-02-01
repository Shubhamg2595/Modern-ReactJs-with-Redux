import React from 'react';
import faker from 'Faker';

const CommentDetail = () =>
{
    return(
        <div className="comment">
        <a href='/' className='avatar'>
            <img alt="avatar" src={faker.Image.avatar()} />
        </a>

        <div className="content">
            <a href="/" className="author">
            sam
            </a>
            <div className="metadata">
            <span className="date">Today at 6:00 pm</span>
            </div>
            <div className="text">
            Nice blog Post!
            </div>

        </div>

        </div>

    )
}

export default CommentDetail;