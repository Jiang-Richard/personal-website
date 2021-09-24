import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from '../shared/NavBar';
import { InlineWidget } from "react-calendly";

// Login web page allows users to log into their account
export default function ContactMe() {

    return (
        <>
            <Navbar />
            <div className="App">
                <InlineWidget url="https://calendly.com/richardjiang/30min" />
            </div>
        </>
    );
}