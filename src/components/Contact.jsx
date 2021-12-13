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
                    <Typography class="contact-font" >Whatsapp: <a href={`tel:${information.phonenumber}`}>{information.shortphonenumber}</a></Typography>
                    <Typography class="contact-font" ><a href={`mailto:${information.email}`}>{information.email}</a></Typography>
                    <Typography class="contact-font" >{strings.address}: <a href={information.addresslink}>{information.address}</a></Typography>
                    <Typography class="contact-font" >Facebook: <a href={information.facebook}>{information.facebookusername}</a></Typography>
                </Stack>
            </Paper>
        </Stack>
    )
}
