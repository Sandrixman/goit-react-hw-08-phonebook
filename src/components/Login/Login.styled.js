import styled from '@emotion/styled';
import { Box, TextField } from '@mui/material/';
import LoadingButton from '@mui/lab/LoadingButton';

export const BoxStyled = styled(Box)`
  display: grid;
  justify-content: center;
  justify-items: center;
`;

export const Input = styled(TextField)`
  width: 300px;
`;

export const Button = styled(LoadingButton)`
  width: 150px;
`;
