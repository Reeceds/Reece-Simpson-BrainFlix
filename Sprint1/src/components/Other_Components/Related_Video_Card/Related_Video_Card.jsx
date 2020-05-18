import React from 'react';


const RelatedVideoCard = props => {
    if (props.video){
        return (
            <div className="related-video__container">
                <div className="related-video-thumbnail__conatiner">
                    <img className="related-video-image" alt="" src={props.video.image} />
                </div>
                <div className="related-video-title-user__container">
                    <h4 className="related-video__title">{props.video.title}</h4>
                    <p className="related-video__user">{props.video.channel}</p>
                </div>
            </div>
        )
    } else {
        return null
    }
    
}



export default RelatedVideoCard;