import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  // box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.span`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;

export const BoldLink = styled.span`
  font-size: 11px;
  color: #2f5061;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
  cursor: pointer;
`;

export const Label = styled.label`
  direction: rtl;
  font-size: 11px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 12px;
  padding: 15px 10px;
  margin: 10px 0;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  direction: rtl;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:focus {
    outline: none;
    border: 1px solid #354f52;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 12px;
  padding: 15px 10px;
  margin: 10px 0;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  direction: rtl;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:focus {
    outline: none;
    border: 1px solid #354f52;
  }
`;

export const SelectBox = styled.select`
  width: 100%;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 10px;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  direction: rtl;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:focus {
    outline: none;
    border: 1px solid #354f52;
  }
`;

export const Option = styled.option`
  font-size: 14px;
  color: #354f52;
`;

export const SubmitButton = styled.button`
  width: 50%;
  padding: 0.7rem 2rem;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #354f52;

  &:hover {
    filter: brightness(1.1);
  }
`;
