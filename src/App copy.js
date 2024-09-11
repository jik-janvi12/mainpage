import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
const App = () => {
  return (
    <React.Fragment>
        <AppBar sx={{background:'#032971'}}>
            <Toolbar>
            <HomeIcon sx={{color:'#fff', fontSize:'2rem', marginBottom:'5px'}} />
            <Typography variant='h5' sx={{marginLeft:'5px'}}>QuickStart</Typography>
            <Button sx={{marginLeft:'auto'}} variant='contained'>Login</Button>
            <Button sx={{marginLeft:'10px'}} variant='contained'>SignUp</Button>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default App