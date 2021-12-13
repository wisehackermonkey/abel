import React from 'react'
import { Paper, Stack, Typography } from "@mui/material"
import "@fontsource/special-elite"
import "../css/Contact.css"
export default function Contact() {
    return (
        <Stack direction="row-reverse" id="contact-row">
            <Paper id="contact-box">
                <Stack>
                    <Typography Typography variant='h6' fontFamily="elephant" >Contact</Typography>
                    <Typography Typography variant='h6' fontFamily="elephant" >+52 612-133-8634</Typography>
                    <Typography Typography variant='h6' fontFamily="elephant" >clavecharro2@gmail.com</Typography>
                    <Typography Typography variant='h6' fontFamily="elephant" >Address: Austin loaches #43</Typography>
                </Stack>
            </Paper>
        </Stack>
    )
}
