import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const RouterLink = styled(Link)`
  text-decoration: none;
  background-image: linear-gradient(to left, rgb(184 255 97), rgb(85 233 250));
  color: transparent;
  background-clip: text;
  :hover {
    color: #8383ff;
    text-decoration: underline;
  }
`;
