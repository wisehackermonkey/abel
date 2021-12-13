import React from 'react'
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
            <img src="/ring-v1.png" id="cover-photo" />
        </Stack>
    )
}
