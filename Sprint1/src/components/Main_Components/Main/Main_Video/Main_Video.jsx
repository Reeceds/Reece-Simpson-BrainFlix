import React from 'react';

import Video from '../../../../assets/Video/BrainStation Sample Video.mp4';
import PosterImage from '../../../../assets/Images/video-list-0.jpg';



const MainVideo = () => {
    return (
        <div className="main-video__container">
            <video poster={PosterImage} className="main-video">
                <source src={Video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default MainVideo