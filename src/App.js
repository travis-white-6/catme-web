import React, {useEffect, useState} from "react";
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Container from "./components/Container";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";


const slackOauthCall = () => {
  const queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let code = urlParams.get('code')
  let dataBody = {
      code: code,
      client_secret: process.env.REACT_APP_SLACK_SECRET,
      client_id: process.env.REACT_APP_SLACK_CLIENT,
  }
  fetch(`https://slack.com/api/oauth.v2.access`, {
      method: 'POST',
      body: new URLSearchParams(dataBody),
      headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
      })
  })
      .then(r => r.json())
      .then(r => console.log(r))
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
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Container />
                </Route>
                <Route exact path={"/redirect"}>
                    <Container isRedirect={true} />
                </Route>
                <Route exact path={"/contact"}>
                    <Contact />
                </Route>
                <Route exact path={"/privacy"}>
                    <Privacy />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
