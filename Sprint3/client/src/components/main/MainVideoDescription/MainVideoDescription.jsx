import React from 'react';
import ViewsIcon from '../../../assets/Icons/SVG/Icon-views.svg';
import LikesIcon from '../../../assets/Icons/SVG/Icon-likes.svg';



const MainVideoDescription = props => {

    if (props.mainVidDetails){

        const newDate = new Date(props.mainVidDetails.timestamp);
        const dateConversion = (newDate.getMonth()+1) + '/' + newDate.getDate()+ '/' + newDate.getFullYear();

        return (
            <section className="main-video__description-container">
                <div className="main-video__title__container">
        <h1 className="main-video__title">{props.mainVidDetails.title}</h1>
                </div>
                <div className="main-video__userInfo-interactions__container">
                    <div className="main-video__userInfo">
                        <h3 className="main-video__user">{props.mainVidDetails.channel}</h3>
                        <p className="main-video__date">{dateConversion}</p>
                    </div>
                    <div className="main-video__interactions">
                        <div className="main-video__views">
                            <img className="main-video__interactions-icon" alt="Views icon" src={ViewsIcon}/>
                            <p>{props.mainVidDetails.views}</p>
                        </div>
                        <div className="main-video__likes">
                            <img className="main-video__interactions-icon" alt="Likes icon" src={LikesIcon}/>
                            <p>{props.mainVidDetails.likes}</p>
                        </div>
                    </div>
                </div>
                <p className="main-video__descrption">{props.mainVidDetails.description}</p>
            </section>
        )
    } else {
        return null
    }
    
}

export default MainVideoDescription