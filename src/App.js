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
  fetch(`https://us-central1-catme-f243a.cloudfunctions.net/slackAuth?code=${code}`, {
      method: 'GET',
      mode: 'no-cors'
  }).then(() => {})
}

function App() {
    const [slackAuth, setSlackAuth] = useState(false)
    const [bot, setBot] = useState(true)

    useEffect(() => {
        if (window.location.href.includes('redirect') && !slackAuth) {
            setSlackAuth(true)
            slackOauthCall()
        }
        // if (bot) {
        //     setBot(false)
        //     initBot()
        // }
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
