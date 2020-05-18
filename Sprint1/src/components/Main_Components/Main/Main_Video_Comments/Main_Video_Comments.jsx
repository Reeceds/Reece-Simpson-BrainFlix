import React from 'react';
import UserImage from '../../../../assets//Images/Mohan-muruge.jpg';
import Btn from '../../../Other_Components/Button/Button';
import CommentCard from '../../../Other_Components/Comment_Card/Comment_Card';
import UserCommentsData from './User_Comments_Data';



const MainVideoComments = () => {
    return (
        <section className="comment-section__container"> 
            <h3 className="comment-count">3 Comments</h3>
            <div className="comment__form-image__container">
                <div>
                    <img className="comment-user__image--margin comment-user__image" alt="User icon" src={UserImage}/>
                </div>
                <div className="comment-form__container">
                    <h5 className="comment-form__title">JOIN THE CONVERSATION</h5>
                    <form className="comment-form">
                        <textarea className="comment-input" placeholder="Add a new comment"/>
                        <Btn text="COMMENT" class="primary-btn comment-form__btn"/>
                    </form>
                </div>
            </div>

            {/* User Comment section */}
            {UserCommentsData.map(comment => {
                return <CommentCard comment={comment} key={comment.id}/>
            })}
            
        </section>
    )
}

export default MainVideoComments;