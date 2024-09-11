import React from 'react';
import { Container, Box, Typography, Grid, Button } from '@mui/material';

const Section = () => {
  return (
  <>
    <Box
        sx={{
          background:'#f3f4f4',
          height:'300px',
          textAlign:'center',
          paddingTop:'100px',
          paddingBottom:'30px'
        }}
    >
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to My Section
      </Typography>
      <Typography variant="body1" paragraph>
        This is an example of a section with a background image using the MUI `sx` prop.
      </Typography>
      <Button variant="contained" color="primary">
        Learn More
      </Button>
    </Container>
  </Box>
  <Box class="section1" >
    <Container maxWidth="sx">
      <Box sx={{padding: 2,}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                color: 'black',
                p: 3,
                border:'1px solid black',
                textAlign: 'center',
              }}
            >
              <Typography variant="h6">Category</Typography>
              <Typography variant="body1">This is a description for This is a description for</Typography>
            </Box>
        </Grid>
            
      </Grid>
      </Box>
    </Container>
  </Box>
  </>
  
  );
};

export default Section;