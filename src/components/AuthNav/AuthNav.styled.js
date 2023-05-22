import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  gap: 10px;
  text-decoration: none;
  color: inherit;

  &.active {
    color: orange;
  }
`;
