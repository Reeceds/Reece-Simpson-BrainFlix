import React from 'react';

const API_Key = "?api_key=88ece3a1-841b-4363-80c8-efb38a300a3d";

const MainVideo = props => {
    if(props.mainVid){
        return (
            <div className="main-video__container">
                <video poster={props.mainVid.image} className="main-video">
                    <source src={props.mainVid.video + API_Key} type="video/mp4"/>
                </video>                
            </div>
        )
    } else {
        return null;
    }
    
}

export default MainVideo