import styled from '@emotion/styled';
import { Box, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

export const BoxStyled = styled(Box)`
  display: grid;
  justify-items: center;
  margin: auto;
  padding: 20px;
`;

export const Field = styled(TextField)`
  max-width: 400px;
`;

export const Button = styled(LoadingButton)`
  max-width: 200px;
`;

export const FormErrorWrapper = styled.div`
  height: 20px;
`;

export const ErrorText = styled.p`
  color: red;
  margin: 0;
`;
