import styled from 'styled-components';

const StyledLink = styled.a`
  font-weight: bold;
  color: grey;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Link = ({ children, onClick }: Props) => (
  <StyledLink onClick={onClick}>{children}</StyledLink>
);
