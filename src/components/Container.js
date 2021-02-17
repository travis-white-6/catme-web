import React from "react";
import headerImg from "../headerImg.png";
import successImg from "../successImg.png";
import {Button} from "@material-ui/core";
import slack from "../slack.png";
import web from "../Dribbble_white.png";
import mail from "../Mail_white.png";
import git from "../Github_white.png";
import { useHistory } from "react-router-dom";

export default function Container({isRedirect}) {
    const history = useHistory()

    const bottomData = () => {
        if (isRedirect) {
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
                        Add to slack
                    </Button>
                </>
            )
        }
    }

    const buttons = () => {
        return (
            <div className="buttonRow">
                <Button
                    onClick={() => window.open("https://slack.com/apps/A01N2P2SJR1-catme")}
                    startIcon={<img src={web} style={{height: 24, width: 24}} alt="logo" />}
                    variant="text"
                    color="primary"
                    component="span"/>

                <Button
                    onClick={() => window.open("mailto:travis.lee.white.6@gmail.com", "_parent")}
                    startIcon={<img src={mail} style={{height: 24, width: 24}} alt="logo" />}
                    variant="text"
                    color="primary"
                    component="span"/>

                <Button
                    onClick={() => window.open("https://github.com/travis-white-6/CatMe")}
                    startIcon={<img src={git} style={{height: 24, width: 24}} alt="logo" />}
                    variant="text"
                    color="primary"
                    component="span"/>
            </div>
        )

    }

    const version = () => {
        return (
            <div className='version'>
                v1.0.8 | made with 💖 in San Francisco
            </div>
        )
    }

    const topLeftContact = (
        <div className="topLeftHeader">
            <Button
                style={{color: "white"}}
                onClick={() => history.push('/contact')}
                variant="text"
                color="primary"
                component="span">
                Contact
            </Button>
        </div>
    )


    const topLeftPrivacy = (
        <div className="topLeftMoreHeader">
            <Button
                style={{color: "white"}}
                onClick={() => history.push('/privacy')}
                variant="text"
                color="primary"
                component="span">
                Privacy
            </Button>
        </div>
    )


    return (
        <div className="App">
            <header className="App-header">
                <img src={headerImg} className="headerImg" alt="logo" />
                {topLeftContact}
                {topLeftPrivacy}
                <br/><br/>
                <img src={successImg} className="appImg" alt="logo" />
                {bottomData()}
                <br/>
                {buttons()}
                {version()}
            </header>
        </div>
    )
}


