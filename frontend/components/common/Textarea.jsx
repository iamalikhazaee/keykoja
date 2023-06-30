import styled from "styled-components";

export const TextArea = styled.textarea`
  border: 1px solid rgb(209 213 219);
  color: rgb(17 24 39);
  font-size: 11px;
  line-height: 20px;
  border-radius: 8px;
  display: block;
  width: 100%;
  padding: .5rem;

  &:focus {
    outline: none;
    border: 1px solid #354f52;
  }
`;
