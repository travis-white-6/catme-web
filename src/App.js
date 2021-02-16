import React from "react";
import successImg from './successImg.png';
import headerImg from './headerImg.png';
import slack from './slack.png';
import './App.css';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={headerImg} className="headerImg" alt="logo" />
        <img src={successImg}  alt="logo" />
        <p>
          Success! CatMe is installed to your workspace<br/>
          Type the <code>/catme</code> command to get started
        </p>
          <Button
              style={{backgroundColor: "#FFFFFF", color: "#000000"}}
              onClick={() => window.open("slack://open", "_parent")}
              startIcon={<img src={slack} style={{height: 24, width: 24}} alt="logo" />}
              variant="contained"
              color="primary"
              component="span">
            Open
          </Button>
      </header>
    </div>
  );
}

export default App;
