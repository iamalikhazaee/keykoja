// import styled from "styled-components";

// export const Label = styled.label`
//   direction: rtl;
//   font-size: 11px;
//   font-weight: 600;
//   margin: 10px 0;
// `;
import React from 'react'

function Label(props) {
  return (
    <label className="text-[11px] font-semibold my-[10px]">{props.value}</label>
  )
}

export default Label

