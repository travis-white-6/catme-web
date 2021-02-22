import React, {useState} from "react";
import headerImg from "../headerImg.png";
import successImg from "../successImg.png";
import {Button} from "@material-ui/core";
import slack from "../slack.png";
import discord from "../discord.png"
import web from "../Dribbble_white.png";
import slackWhite from "../Slack_white.png";
import mail from "../Mail_white.png";
import git from "../Github_white.png";
import { useHistory } from "react-router-dom";
import ReactGA from 'react-ga';

/**
 * Event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */
export const Event = (category, action, label) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label
    });
};

export default function Container({isRedirect}) {
    const history = useHistory()

    const [discordPressed, setDiscordPressed] = useState(false)

    const bottomData = () => {
        if (isRedirect) {
            return (
                <>
                    <p>
                        Success! CatMe is installed to the workspace you authorized<br/>
                        Type the <code>/catme</code> command to get started
                    </p>
                    <Button
                        style={{backgroundColor: "#FFFFFF", color: "#000000"}}
                        onClick={() => {
                            Event("SLACK", "Open in Slack", "Slack_Confirm_Open_App")
                            window.open("slack://open", "_parent")
                        }}
                        startIcon={<img src={slack} style={{height: 24, width: 24}} alt="logo" />}
                        variant="contained"
                        color="primary"
                        component="span">
                        Open
                    </Button>
                </>
            )
        } else if (discordPressed) {
            return (
                <>
                    <p>
                        Woo Hoo! If you authorized CatMe for a Discord server<br/>
                        Type the <code>!catme</code> command to get started
                    </p>
                    <Button
                        style={{backgroundColor: "#FFFFFF", color: "#000000"}}
                        onClick={() => {
                            Event("DISCORD", "Open in Discord", "Discord_Confirm_Open_App")
                            window.open("discord://", "_parent")
                        }}
                        startIcon={<img src={discord} style={{height: 24, width: 24}} alt="logo" />}
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
                        Add the CatMe bot to your Discord or Slack to get random puns and pics
                    </p>
                    <div className="addButtonContainer">
                        <div className="addButtonMargin">
                            <Button
                                style={{backgroundColor: "#FFFFFF", color: "#000000"}}
                                onClick={() => {
                                    Event("DISCORD", "Auth App for Discord", "Discord_Auth_App")
                                    setDiscordPressed(true)
                                    window.open(`https://discord.com/api/oauth2/authorize?client_id=813139072351600651&permissions=51200&scope=bot`)
                                }}
                                startIcon={<img src={discord} style={{height: 24, width: 24}} alt="logo" />}
                                variant="contained"
                                color="primary"
                                component="span">
                                Add to Discord
                            </Button>
                        </div>
                        <div className="addButtonMargin">
                            <Button
                                style={{backgroundColor: "#FFFFFF", color: "#000000"}}
                                onClick={() => {
                                    Event("SLACK", "Auth App for Slack", "Slack_Auth_App")
                                    window.open(`https://slack.com/oauth/v2/authorize?client_id=1634522976823.1750784902851&scope=chat:write,commands,links:write&user_scope=`)
                                }}
                                startIcon={<img src={slack} style={{height: 24, width: 24}} alt="logo" />}
                                variant="contained"
                                color="primary"
                                component="span">
                                Add to slack
                            </Button>
                        </div>
                    </div>

                </>
            )
        }
    }

    const buttons = () => {
        return (
            <div className="buttonRow">
                <Button
                    onClick={() => {
                        Event("SLACK", "Slack App Homepage", "Bottom_Buttons_Slack_Homepage_App")
                        window.open("https://slack.com/apps/A01N2P2SJR1-catme")
                    }}
                    startIcon={<img src={slackWhite} style={{height: 24, width: 24}} alt="logo" />}
                    variant="text"
                    color="primary"
                    component="span"/>

                <Button
                    onClick={() => {
                        Event("EMAIL", "Email Tracvis", "Bottom_Buttons_Email")
                        window.open("mailto:travis.lee.white.6@gmail.com", "_parent")
                    }}
                    startIcon={<img src={mail} style={{height: 24, width: 24}} alt="logo" />}
                    variant="text"
                    color="primary"
                    component="span"/>

                <Button
                    onClick={() => {
                        Event("GITHUB", "Github Web Source", "Bottom_Buttons_Github_Web_Home")
                        window.open("https://github.com/travis-white-6/catme-web")
                    }}
                    startIcon={<img src={web} style={{height: 24, width: 24}} alt="logo" />}
                    variant="text"
                    color="primary"
                    component="span"/>

                <Button
                    onClick={() => {
                        Event("GITHUB", "Github Source", "Bottom_Buttons_Github_Home")
                        window.open("https://github.com/travis-white-6/CatMe")
                    }}
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
                v1.1.3 | made with 💖 in San Francisco
            </div>
        )
    }

    const topLeftContact = (
        <div className="topLeftHeader">
            <Button
                style={{color: "white"}}
                onClick={() => {
                    Event("Contact", "Contact Header", "Top Header Contact Tab")
                    history.push('/contact')
                }}
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
                onClick={() => {
                    Event("PRIVACY", "Privacy Header", "Top Header Privacy Tab")
                    history.push('/privacy')
                }}
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


