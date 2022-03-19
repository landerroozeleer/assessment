import styled from 'styled-components';

const StyledPill = styled.div`
  border: 0.5px solid black;
  border-radius: 2em;
  padding: 2px 8px;
  font-size: 12px;
  height: 16px;
`;

type Props = {
  children: React.ReactNode;
};

export const Pill = ({ children }: Props) => (
  <StyledPill>{children}</StyledPill>
);
