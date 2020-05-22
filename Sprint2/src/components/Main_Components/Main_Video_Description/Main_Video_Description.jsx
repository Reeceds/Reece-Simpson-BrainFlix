import React from 'react';
import ViewsIcon from '../../../assets/Icons/SVG/Icon-views.svg';
import LikesIcon from '../../../assets/Icons/SVG/Icon-likes.svg';



const MainVideoDescription = () => {
    return (
        <section className="main-video__description-container">
            <div className="main-video__title__container">
                <h1 className="main-video__title">BMX Rampage: 2018 Highlights</h1>
            </div>
            <div className="main-video__userInfo-interactions__container">
                <div className="main-video__userInfo">
                    <h3 className="main-video__user">By Red Cow</h3>
                    <p className="main-video__date">12/18/2018</p>
                </div>
                <div className="main-video__interactions">
                    <div className="main-video__views">
                        <img className="main-video__interactions-icon" alt="Views icon" src={ViewsIcon}/>
                        <p>1,001,023</p>
                    </div>
                    <div className="main-video__likes">
                        <img className="main-video__interactions-icon" alt="Likes icon" src={LikesIcon}/>
                        <p>110,985</p>
                    </div>
                </div>
            </div>
            <p className="main-video__descrption">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
        </section>
    )
}

export default MainVideoDescription