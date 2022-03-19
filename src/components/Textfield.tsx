import styled from 'styled-components';

const StyledTextfield = styled.input`
  border-radius: 8px;
  border: 1px solid grey;
  padding: 8px 8px;
  transition: 0.1s;
  background-color: white;
  &:focus-visible {
    outline: none;
    box-shadow: inset 0px 5px 5px -3px rgba(0, 0, 0, 0.2);
  }
`;

type Props = {
  id: string;
  onChange: (e: any) => void;
  placeholder?: string;
};

export const Textfield = ({ id, onChange, placeholder }: Props) => (
  <StyledTextfield
    type="text"
    id={id}
    onChange={onChange}
    placeholder={placeholder}
  />
);

Textfield.defaultProps = {
  placeholder: '',
};
