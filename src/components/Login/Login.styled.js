import styled from '@emotion/styled';
import { Box } from '@mui/material/';
import LoadingButton from '@mui/lab/LoadingButton';

export const BoxStyled = styled(Box)`
  display: grid;
  justify-items: center;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #1565c04a;
  border-radius: 10px;
  background: #c6d3ff;
  box-shadow: 3px 3px 13px #1565c0;
`;

export const Button = styled(LoadingButton)`
  width: 150px;
`;
