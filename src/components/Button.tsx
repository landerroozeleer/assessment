import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: white;
  border: 0;
  border-radius: 8px;
  padding: 8px 16px;
  font-family: 'Fredoka', sans-serif;
  box-shadow: 1px 5px 25px 5px rgba(0, 0, 0, 0.1);
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 5px 25px 5px rgba(0, 0, 0, 0.15);
  }
`;

type Props = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  children: React.ReactNode;
};

export const Button = ({ type, children }: Props) => (
  <StyledButton type={type}>{children}</StyledButton>
);

Button.defaultProps = {
  type: 'button',
};
