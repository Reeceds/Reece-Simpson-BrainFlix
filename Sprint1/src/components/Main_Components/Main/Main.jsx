import React, { Component } from 'react';
import MainVideo from './Main_Video/Main_Video';
import MainVideoDescription from './Main_Video_Description/Main_Video_Description';
import MainVideoComments from './Main_Video_Comments/Main_Video_Comments';
import RelatedVideosSection from '../Related_Videos_Section/Related_Videos_Section';

import './Main_Video_Description/Main_Video_Description.scss'
import VideoList from '../Related_Videos_Section/Related_Videos_Data';


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
        selectedVideo: VideoList[0]
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
                    <RelatedVideosSection state={this.state.selectedVideo} VideoList={VideoList} />
                </main>
            </>
        );
      }
}

export default Main