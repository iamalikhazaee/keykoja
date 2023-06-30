import styled from "styled-components";

export const Input = styled.input`
  direction: rtl;
  border: 1px solid rgb(209 213 219);
  color: rgb(17 24 39);
  font-size: 11px;
  line-height: 20px;
  border-radius: 8px;
  display: block;
  width: 100%;
  padding: .5rem;
  margin-bottom: 5px;

  &:focus {
    outline: none;
    border: 1px solid #354f52;
  }

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
`;
