import React from 'react';
import Header from './components/Main_Components/Header/Header';
import Main from './components/Main_Components/Main/Main';

import './components/Main_Components/Header/Header.scss';
import './components/Other_Components/Button/Button.scss';
import './components/Main_Components/Main/Main_Video/Main_Video.scss';
import './components/Main_Components/Main/Main_Video_Comments/Main_Video_Comments.scss';
import './components/Main_Components/Main/Main.scss';
import './components/Other_Components/Related_Video_Card/Related_Video_Card.scss';
import './components/Other_Components/Comment_Card/Comment_Card.scss'



function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
