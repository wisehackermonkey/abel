import React from "react"
import "../css/Title.css"

import { Paper, Stack, Typography } from "@mui/material"

import "@fontsource/special-elite"

export default function Title() {
    return (
        <>
            <div id="title-row">
                <Paper elevation={10} id="company-name" >
                    <Stack  id="title-stack">
                        <Typography class="title-font" >Self</Typography>
                        <Typography class="title-font"  fontFamily="elephant">Taught</Typography>
                        <Typography variant='h2' fontFamily="elephant">Jewelry</Typography>
                    </Stack>
                </Paper>
            </div>
        </>
    )
}