import styled from "styled-components";

export const Button = styled.button`
  width: 50%;
  padding: 0.7rem 2rem;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #354f52;
  margin: 1rem 0;

  &:hover {
    filter: brightness(1.3);
  }
`;