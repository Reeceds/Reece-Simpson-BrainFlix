import React, { Component } from 'react';
import MainVideo from './Main_Video/Main_Video';
import MainVideoDescription from './Main_Video_Description/Main_Video_Description';
// import MainVideoComments from './Main_Video_Comments/Main_Video_Comments';
import RelatedVideoCard from '../Other_Components/Related_Video_Card/Related_Video_Card'
import VideoList from '../../data/Related_Videos_Data'
import UserImage from '../../assets/Images/Mohan-muruge.jpg';
import Btn from '../Other_Components/Button/Button';
import CommentCard from '../Other_Components/Comment_Card/Comment_Card';
import UserCommentsData from '../../data/User_Comments_Data';

import './Main_Video_Description/Main_Video_Description.scss'



class Main extends Component {
    
    state = {
        displayedVideo: VideoList[0]
      }

      render() {
        return (
            <>
                {/* Main video import */}
                <MainVideo />
                <main className="site__container main-video-related-data__container">
                    <div className="main-video-info">

                        {/* Main video description import */}
                        <MainVideoDescription />
                        <section className="comment-section__container"> 
                            <h3 className="comment-count">3 Comments</h3>
                            <div className="comment__form-image__container">
                                <div>
                                    <img className="comment-user__image--margin comment-user__image" alt="User icon" src={UserImage}/>
                                </div>
                                <div className="comment-form__container">
                                    <h5 className="comment-form__title">JOIN THE CONVERSATION</h5>
                                    <form className="comment-form">
                                        <textarea className="comment-input" placeholder="Add a new comment"/>
                                        <Btn text="COMMENT" class="primary-btn comment-form__btn"/>
                                    </form>
                                </div>
                            </div>

                            {/* Main video comments import*/}
                            {UserCommentsData.map(comment => {
                                return <CommentCard comment={comment} key={comment.id}/>
                            })}
                            
                        </section>
                    </div>
                    <aside className="related-video-section__container">
                        <h5 className="related-video-section__header">NEXT VIDEO</h5>

                        {/* Related videos import */}
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


// class Main extends Component {
    
//     state = {
//         displayedVideo: VideoList[0]
//       }

//       render() {
//         return (
//             <>
//                 <MainVideo />
//                 <main className="site__container main-video-related-data__container">
//                     <div className="main-video-info">
//                         <MainVideoDescription />
//                         <MainVideoComments />
//                     </div>
//                     <aside className="related-video-section__container">
//                         <h5 className="related-video-section__header">NEXT VIDEO</h5>
//                         {VideoList.map(relVid => {
//                             if(relVid !== this.state.displayedVideo) {
//                                 return <RelatedVideoCard video={relVid} key={relVid.id}/>
//                             } else {
//                                 return null
//                             }
//                         })}
//                     </aside>
//                 </main>
//             </>
//         );
//       }
// }

export default Main