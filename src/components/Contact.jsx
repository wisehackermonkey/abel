import React from 'react'
import { Paper, Stack, Typography } from "@mui/material"
import "@fontsource/special-elite"
import "../css/Contact.css"
import LocalizedStrings from 'react-localization';

import localization from "../../localization.json"

let strings = new LocalizedStrings(localization["contact"]);

export default function Contact() {
    return (
        <Stack direction="row-reverse" >
            <Paper id="contact-box">
                <Stack   id="contact-column">
                    <Typography class="contact-font" >{strings.contact}</Typography>
                    <Typography class="contact-font" >+52 612-133-8634</Typography>
                    <Typography class="contact-font" >clavecharro2@gmail.com</Typography>
                    <Typography class="contact-font" >{strings.address}: Austin loaches #43</Typography>
                </Stack>
            </Paper>
        </Stack>
    )
}
