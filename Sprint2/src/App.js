import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Main_Components/Header/Header';
import Main from './pages/main';
import VideoUploadPage from './pages/video_upload_page';

import './components/Main_Components/Header/Header.scss';
import './components/Other_Components/Button/Button.scss';
import './components/Main_Components/Main_Video/Main_Video.scss';
import './pages/main.scss';
import './components/Other_Components/Related_Video_Card/Related_Video_Card.scss';
import './components/Other_Components/Comment_Card/Comment_Card.scss'
import './components/Main_Components/Video_Upload/Video_Upload.scss';
import './components/Main_Components/Main_Video_Description/Main_Video_Description.scss'



function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Header />
        
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/:videoId" component={Main} />
          <Route path="/Upload" component={VideoUploadPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
