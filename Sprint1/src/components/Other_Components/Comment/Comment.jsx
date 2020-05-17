import React from 'react';

const UserComment = (props) => {
    if (props.comment) {
        return (
            <div className="comment-new">
                <div>
                    <img className="comment-user__image" />
                </div>
                <div className="comment-data">
                    <div className="comment-name-date">
                        <h4 className="comment-name">{props.comment.name}</h4>
                        <h5 className="comment-date">{props.comment.date}</h5>
                    </div>
                    <p className="comment-text">{props.comment.comment}</p>
                </div>
            </div>
        )
    } else {
        return null
    }
    
}

export default UserComment;