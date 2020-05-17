import React from 'react';
import TestImage from '../../../assets/Images/video-list-1.jpg';

const RelatedVideosSection = () => {
    return (
        <aside className="related-video-section__container">
            <h5 className="related-video-section__header">NEXT VIDEO</h5>
            <div className="related-video__container">
                <div className="related-video-thumbnail__conatiner">
                    <img className="related-video-image" src={TestImage} />
                </div>
                <div className="related-video-title-user__container">
                    <h4 className="related-video__title">Take A Romantic Break In A Boutique Hotel</h4>
                    <p className="related-video__user">Todd Welch</p>
                </div>
            </div>
        </aside>
    )
}

export default RelatedVideosSection;