import { useState } from 'react'
// import ring from './src/img/ring-v1.png'
import ring from './img/ring-v1.png'
import { CssBaseline, Grid, Paper, Stack, Typography, Box } from "@mui/material"

import './App.css'

import "@fontsource/special-elite"

import Title from "./components/Title"
import CoverPhoto from './components/CoverPhoto'
import Contact from './components/Contact'
function App() {

  return (
    < >
      <CssBaseline />
      <Box sx={{ width: '100%' }} id="Container">

        <Stack  spacing={3}>
          <Title />

          <CoverPhoto />

          <Contact />
        </Stack>
      </Box>
    </ >
  )
}

export default App
