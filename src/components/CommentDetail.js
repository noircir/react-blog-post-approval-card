import React from 'react';

const CommentDetail = props => {
    return (
        <div className="item comment">
            <a href="#" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="#" className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text">{props.text}</div>
            </div>
        </div>
    )
};

export default CommentDetail;
