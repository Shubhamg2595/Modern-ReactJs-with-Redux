import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'Faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'




const App = () => {

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="sam"
                    timeAgo="Today at 4:45 PM"
                    content="blogPost1"
                    avatar={faker.Image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="alex"
                    timeAgo="Today at 6:42 PM"
                    content="blogPost2"
                    avatar={faker.Image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="jane"
                    timeAgo="Yesterday at 1:10 AM"
                    content="blogPost3"
                    avatar={faker.Image.avatar()} />
            </ApprovalCard>
            
            <Message header= "Changes in society" info="something about society"/>


        </div>)
}

const Message = (props) =>
{
    return(
        <div className="ui message">
        <div className="header">{props.header}</div>
        <p>{props.info}</p>
       
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
