import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import VideoUploadPage from "./pages/VideoUpload/VideoUpload";

import "./components/Header/Header.scss";
import "./components/other/Button/Button.scss";
import "./components/main/MainVideo/MainVideo.scss";
import ".//pages/Main/Main.scss";
import "./components/main/RelatedVideoCard/RelatedVideoCard.scss";
import "./components/main/CommentCard/CommentCard.scss";
import "./components/videoUpload/VideoUploadForm/VideoUploadForm.scss";
import "./components/main/MainVideoDescription/MainVideoDescription.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/Upload" component={VideoUploadPage} />
          <Route path="/:videoId" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
