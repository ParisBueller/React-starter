import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    avatarImg={faker.image.avatar()} 
                    commentText="Great post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00AM" 
                    avatarImg={faker.image.avatar()} 
                    commentText="Well done, cheers"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    avatarImg={faker.image.avatar()} 
                    commentText="Very informative"
                />
            </ApprovalCard>
        </div>
    );
};
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);