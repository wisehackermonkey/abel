import React from "react"
import "../css/Title.css"

import { Paper, Stack, Typography } from "@mui/material"

import "@fontsource/special-elite"

import LocalizedStrings from 'react-localization';

import localization from "../../localization.json"

let strings = new LocalizedStrings(localization["title"]);

export default function Title() {
    return (
        <>
            <div id="title-row">
                <Paper elevation={7} id="company-name" >
                    <Stack  id="title-stack">
                        {
                            strings.title.split(" ").map((substring)=>(
                                <Typography class="title-font" >{substring}</Typography>

                            ))
                        }
                     </Stack>
                </Paper>
            </div>
        </>
    )
}
