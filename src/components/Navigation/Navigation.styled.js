import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const TypographyStyled = styled(Typography)`
  display: flex;
  gap: 20px;
`;

export const LinkStyled = styled(NavLink)`
  gap: 10px;
  text-decoration: none;
  color: inherit;

  &.active {
    color: orange;
  }
`;
