import React from 'react'
import { Paper, Stack, Typography } from "@mui/material"
import "@fontsource/special-elite"
import "../css/Contact.css"
export default function Contact() {
    return (
        <Stack direction="row-reverse" >
            <Paper id="contact-box">
                <Stack   id="contact-column">
                    <Typography class="contact-font" >Contact</Typography>
                    <Typography class="contact-font" >+52 612-133-8634</Typography>
                    <Typography class="contact-font" >clavecharro2@gmail.com</Typography>
                    <Typography class="contact-font" >Address: Austin loaches #43</Typography>
                </Stack>
            </Paper>
        </Stack>
    )
}
