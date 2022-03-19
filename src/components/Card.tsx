import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: white;
  border-radius: 32px;
  padding: 24px;
  box-shadow: 1px 5px 25px 5px rgba(0, 0, 0, 0.1);
`;

type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Props) => (
  <StyledCard id="card">{children}</StyledCard>
);
