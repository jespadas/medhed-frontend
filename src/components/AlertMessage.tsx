import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const AlertMessage = () => {
  return (
    <Stack sx={{ width: '100%', display: 'flex', justifyContent: 'center', height:'100vh', alignItems: 'center'}}>
      <Alert severity="error"><strong>Error Loading </strong> - There was an error loading your data. Please try again later or contact the network administrator.</Alert>
    </Stack>
  );
}