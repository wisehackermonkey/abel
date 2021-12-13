import React from 'react'
import ring from '../img/ring-v1.png'
import "../css/CoverPhoto.css"
import { Box, Paper, Stack } from '@mui/material'

export default function CoverPhoto() {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            id="cover-photo-row"
        >
            {/* <Paper id="cover-photo"> */}
                <img src={ring}  id="cover-photo" />
            {/* </Paper> */}
        </Stack>
    )
}
