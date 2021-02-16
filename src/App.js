import React, {useEffect, useState} from "react";
import successImg from './successImg.png';
import headerImg from './headerImg.png';
import slack from './slack.png';
import './App.css';
import { Button } from '@material-ui/core';


const slackOauthCall = () => {
  const queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let code = urlParams.get('code')
  let authUrl = `?code=${code}&client_secret=${process.env.REACT_APP_SLACK_SECRET}&client_id=${process.env.REACT_APP_SLACK_CLIENT}`
  fetch(`https://slack.com/api/oauth.v2.access${authUrl}`).then(r => {})
}

const bottomData = () => {
  if (window.location.href.includes('redirect')) {
    return (
        <>
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
        </>
    )
  } else {
    return (
        <>
          <p>
            Add the CatMe bot to your slack today to get random puns and pics
          </p>
          <Button
              style={{backgroundColor: "#FFFFFF", color: "#000000"}}
              onClick={() => window.open(`https://slack.com/oauth/v2/authorize?client_id=${process.env.REACT_APP_SLACK_CLIENT}&scope=chat:write,commands,links:write&user_scope=`)}
              startIcon={<img src={slack} style={{height: 24, width: 24}} alt="logo" />}
              variant="contained"
              color="primary"
              component="span">
            Add to my slack
          </Button>
        </>
    )
  }
}

const buttons = () => {
    return (
        <div className="buttonRow">

        </div>
    )
}


function App() {
  const [slackAuth, setSlackAuth] = useState(false)

  useEffect(() => {
    if (window.location.href.includes('redirect') && !slackAuth) {
      setSlackAuth(true)
      slackOauthCall()
    }
  }, [slackAuth])

  return (
    <div className="App">
      <header className="App-header">
        <img src={headerImg} className="headerImg" alt="logo" />
        <img src={successImg} className="appImg" alt="logo" />
        {bottomData()}
        <br/>
        {buttons()}
      </header>
    </div>
  );
}

export default App;
