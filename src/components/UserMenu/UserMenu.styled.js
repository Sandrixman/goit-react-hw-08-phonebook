import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonStyled = styled(Button)`
  color: white;
  border: 1px solid white;
  height: 30px;
  text-transform: capitalize;
  :hover {
    background-color: orange;
  }
`;
