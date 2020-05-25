import React, { Component } from 'react';
import { Link } from "react-router-dom";

import MainVideo from '../components/Main_Components/Main_Video/Main_Video';
import MainVideoDescription from '../components/Main_Components/Main_Video_Description/Main_Video_Description';
import RelatedVideoCard from '../components/Other_Components/Related_Video_Card/Related_Video_Card'
import Btn from '../components/Other_Components/Button/Button';
import CommentCard from '../components/Other_Components/Comment_Card/Comment_Card';
import axios from 'axios';
 

const URL = "https://project-2-api.herokuapp.com/videos/";
const API_Key = "?api_key=88ece3a1-841b-4363-80c8-efb38a300a3d";

class Main extends Component {
    
    state = {
        displayedVideo: {},
        relatedVideos: []
      }

    componentDidMount(){
        axios.get(URL + API_Key)
        .then(response => {
            this.setState({
                relatedVideos: response.data,
            });

            let DisplayID = "1af0jruup5gu";
              if(this.props.match.params.videoId){
                DisplayID = this.props.match.params.videoId;
              }

            axios.get(URL + DisplayID + API_Key)
            .then(response => {
                this.setState({
                    displayedVideo: response.data,
                })
            })
        })
      }

      componentDidUpdate(prevProps){
          if(prevProps.match.params.videoId !== this.props.match.params.videoId){
              let DisplayID = "1af0jruup5gu";
              if(this.props.match.params.videoId){
                DisplayID = this.props.match.params.videoId;
              }
              axios.get(URL + DisplayID + API_Key)
              .then(response => {
                  this.setState({
                      displayedVideo: response.data,
                  })
              })
          }
      }

      render() {

          const vidComments = this.state.displayedVideo.comments;

        return (
            <>
                {/* Main video import */}
                <MainVideo mainVid={this.state.displayedVideo}/>
                <main className="site__container main-video-related-data__container">
                    <div className="main-video-info">

                        {/* Main video description import */}
                        <MainVideoDescription mainVidDetails={this.state.displayedVideo}/>
                        <section className="comment-section__container"> 
                            <h3 className="comment-count">3 Comments</h3>
                            <div className="comment__form-image__container">
                                <div>
                                    <div className="comment-new-user__image"></div>
                                </div>
                                <div className="comment-form__container">
                                    <h5 className="comment-form__title">JOIN THE CONVERSATION</h5>
                                    <form className="comment-form">
                                        <textarea className="comment-input" placeholder="Add a new comment"/>
                                        <Btn text="COMMENT" class="primary-btn comment-form__btn"/>
                                    </form>
                                </div>
                            </div>

                            {/* Main video comments import */}

                            {vidComments ? this.state.displayedVideo.comments.map(comment => {
                                return <CommentCard key={comment.id} mainVidComment={comment}/>
                            }) : null}
                                                        
                        </section>
                    </div>
                    <aside className="related-video-section__container">
                        <h5 className="related-video-section__header">NEXT VIDEO</h5>

                        {/* Related videos import */}
                        {this.state.relatedVideos.map(video => {
                            if(video.id !== this.state.displayedVideo.id){
                                return <Link key={video.id} to={"/" + video.id}><RelatedVideoCard  video={video}/></Link>
                            }
                        })}
                        
                    </aside>
                </main>
            </>
        );
      }
}

export default Main








// class Main extends Component {
    
//     state = {
//         displayedVideo: {},
//         relatedVideos: []
//       }

//       render() {
//         return (
//             <>
//                 {/* Main video import */}
//                 <MainVideo />
//                 <main className="site__container main-video-related-data__container">
//                     <div className="main-video-info">

//                         {/* Main video description import */}
//                         <MainVideoDescription />
//                         <section className="comment-section__container"> 
//                             <h3 className="comment-count">3 Comments</h3>
//                             <div className="comment__form-image__container">
//                                 <div>
//                                     <div className="comment-new-user__image"></div>
//                                 </div>
//                                 <div className="comment-form__container">
//                                     <h5 className="comment-form__title">JOIN THE CONVERSATION</h5>
//                                     <form className="comment-form">
//                                         <textarea className="comment-input" placeholder="Add a new comment"/>
//                                         <Btn text="COMMENT" class="primary-btn comment-form__btn"/>
//                                     </form>
//                                 </div>
//                             </div>

//                             {/* Main video comments import*/}
//                             <CommentCard/>
                            
//                         </section>
//                     </div>
//                     <aside className="related-video-section__container">
//                         <h5 className="related-video-section__header">NEXT VIDEO</h5>

//                         {/* Related videos import */}
//                         <RelatedVideoCard/>
//                     </aside>
//                 </main>
//             </>
//         );
//       }
// }


// export default Main