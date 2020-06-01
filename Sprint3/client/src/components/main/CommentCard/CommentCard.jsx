import React from 'react';



const CommentCard = props => {

    if (props.mainVidComment) {

        const newDate = new Date(props.mainVidComment.timestamp);
        const dateConversion = (newDate.getMonth()+1) + '/' + newDate.getDate()+ '/' + newDate.getFullYear();

        return (
            <div className="comment-new">
                <div>
                    <img className="comment-user__image" alt="" />
                </div>
                <div className="comment-data">
                    <div className="comment-name-date">
                        <h4 className="comment-name">{props.mainVidComment.name}</h4>
                        <h5 className="comment-date">{dateConversion}</h5>
                    </div>
                    <p className="comment-text">{props.mainVidComment.comment}</p>
                </div>
            </div>
        )
    } else {
        return null
    }
    
}

export default CommentCard;