import React from 'react'
import { Paper, Stack, Typography } from "@mui/material"
import "@fontsource/special-elite"
import "../css/Contact.css"
import LocalizedStrings from 'react-localization';

import localization from "../../localization.json"
import information from "../../information.json"

let strings = new LocalizedStrings(localization["contact"]);

export default function Contact() {
    return (
        <Stack direction="row-reverse" >
            <Paper id="contact-box">
                <Stack   id="contact-column">
                    <Typography class="contact-font" >{strings.contact}</Typography>
                    <Typography class="contact-font" >Whatsapp: {information.shortphonenumber}</Typography>
                    <Typography class="contact-font" >{information.email}</Typography>
                    <Typography class="contact-font" >{strings.address}: {information.address}</Typography>
                </Stack>
            </Paper>
        </Stack>
    )
}
