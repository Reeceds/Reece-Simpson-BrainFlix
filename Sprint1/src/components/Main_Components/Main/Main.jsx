import React, { Component } from 'react';
import MainVideo from './Main_Video/Main_Video';
import MainVideoDescription from './Main_Video_Description/Main_Video_Description';
import MainVideoComments from './Main_Video_Comments/Main_Video_Comments';
import RelatedVideoCard from '../../Other_Components/Related_Video_Card/Related_Video_Card'
import VideoList from '../../../data/Related_Videos_Data'

import './Main_Video_Description/Main_Video_Description.scss'


// const Main = () => {
//     return (
//         <>
//             <MainVideo />
//             <main className="site__container main-video-related-data__container">
//                 <div className="main-video-info">
//                     <MainVideoDescription />
//                     <MainVideoComments />
//                 </div>
//                 <RelatedVideosSection />
//             </main>
//         </>
//     )

// }


class Main extends Component {
    
    state = {
        displayedVideo: VideoList[0]
      }

      render() {
        return (
            <>
                <MainVideo />
                <main className="site__container main-video-related-data__container">
                    <div className="main-video-info">
                        <MainVideoDescription />
                        <MainVideoComments />
                    </div>
                    <aside className="related-video-section__container">
                        <h5 className="related-video-section__header">NEXT VIDEO</h5>
                        {VideoList.map(relVid => {
                            if(relVid !== this.state.displayedVideo) {
                                return <RelatedVideoCard video={relVid} key={relVid.id}/>
                            } else {
                                return null
                            }
                        })}
                    </aside>
                </main>
            </>
        );
      }
}

export default Main