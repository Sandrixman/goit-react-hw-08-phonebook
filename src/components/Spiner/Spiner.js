import { Box } from '@mui/material';
import BeatLoader from 'react-spinners/BeatLoader';

export const Spiner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: '20px',
      }}
    >
      <BeatLoader size={8} />
    </Box>
  );
};
