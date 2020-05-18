import React from 'react';
import VideoList from './Related_Videos_Data';
import RelatedVideoCard from '../../Other_Components/Related_Video_Card/Related_Video_Card';


const RelatedVideosSection = () => {
    return (
        <aside className="related-video-section__container">
            <h5 className="related-video-section__header">NEXT VIDEO</h5>
            
            {VideoList.map(relVideo => {
                return <RelatedVideoCard video={relVideo} key={relVideo.id}/>
            })}
        </aside>
    )
}



export default RelatedVideosSection;