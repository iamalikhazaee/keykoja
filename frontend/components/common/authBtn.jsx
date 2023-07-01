import styled from "styled-components";

export const Button = styled.button`
  width: 50%;
  padding: 0.7rem 2rem;
  color: ${(props) => props.text};
  font-size: 11px;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: ${(props) => props.bg};
  margin: 1rem .5rem;

  &:hover {
    filter: brightness(1.3);
  }
`;