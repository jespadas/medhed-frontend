import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const LoadingSpinner = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', height:'100vh', alignItems: 'center'}}>
      <CircularProgress sx={{ size: 300 }}/>
    </Box>
  );
}