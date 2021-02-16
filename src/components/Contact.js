import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router-dom";

export default function Contact() {
    const history = useHistory()

    return (
        <>
            <div className="topLeftHeader">
                <IconButton component="span" onClick={e => history.push('/')}>
                    <ArrowBackIosIcon fontSize="large" style={{color: "white"}}/>
                </IconButton>
            </div>
            <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
            <iframe className="airtable-embed airtable-dynamic-height"
                    src="https://airtable.com/embed/shrCGLldyia033MsX?backgroundColor=yellow" frameBorder="0"
                    onmousewheel="" width="100%" height="897"
                    style={{backgroundColor: "black"}}></iframe>
        </>
    )
}