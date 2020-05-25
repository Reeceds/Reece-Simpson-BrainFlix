import React from 'react';

// import Video from '../../../assets/Video/BrainStation Sample Video.mp4';
// import PosterImage from '../../../assets/Images/video-list-0.jpg';
// import FullScreenIcon from '../../../assets/Icons/SVG/Icon-fullscreen.svg';
// import PlayIcon from '../../../assets/Icons/SVG/Icon-play.svg';
// import VolumeIcon from '../../../assets/Icons/SVG/Icon-volume.svg';

const API_Key = "?api_key=88ece3a1-841b-4363-80c8-efb38a300a3d";

const MainVideo = props => {
    if(props.mainVid){
        return (
            <div className="main-video__container">
                <video poster={props.mainVid.image} className="main-video">
                    <source src={props.mainVid.video + API_Key} type="video/mp4"/>
                </video>
                {/* <div className="main-video-controls__container">
                    <div className="main-video-controls__bck-col main-video-play-icon__container">
                        <img src={PlayIcon}/>
                    </div>
                    <div className="main-video-controls__bck-col main-video-scroll-bar__container">
                    </div>
                    <div className="main-video-controls__bck-col main-video-fullscrn-vol__container">
                        <img src={FullScreenIcon}/>
                        <img src={VolumeIcon}/>
                    </div>
                </div> */}
                
            </div>
        )
    } else {
        return null;
    }
    
}

export default MainVideo