import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Header from './components/Main_Components/Header/Header';
import Main from './components/Main_Components/Main';
import VideoUploadPage from './pages/video_upload_page';

import './components/Main_Components/Header/Header.scss';
import './components/Other_Components/Button/Button.scss';
import './components/Main_Components/Main_Video/Main_Video.scss';
import './components/Main_Components/Main_Video_Comments/Main_Video_Comments.scss';
import './components/Main_Components/Main.scss';
import './components/Other_Components/Related_Video_Card/Related_Video_Card.scss';
import './components/Other_Components/Comment_Card/Comment_Card.scss'
import './components/Main_Components/Video_Upload/Video_Upload.scss';



function App() {
  return (
    <div className="App">
      <Header />
      
      <BrowserRouter>
        <Link to="/"></Link>
        <Link to="/Upload"></Link>
        
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Upload" component={VideoUploadPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
