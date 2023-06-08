import styled from "styled-components";
export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px;
  background: #F4EAE6;
  border-radius: 12px;
  direction: rtl;
`;
// export const DatesContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   margin-bottom: 16px;
// `;
// export const DatesStyled = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: ${(props) => props.background};
//   border-radius: 8px;
//   width: 47%;
//   height: 40px;
//   border: 1px solid ${(props) => (props.hasBorder ? props.color : props.background)};
//   /* padding: 8px 32px; */
// `;
// export const DatesText = styled.div`
//   font-family: "Vazirmatn", sans-serif;
//   font-weight: ${(props) => (props.notBold ? "400" : 900)};
//   font-size: 16px;
//   color: ${(props) => props.color};
// `;
export const CalenderHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
`;
export const WeekdaysHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: rgba(130, 140, 160, 0.05);
  border-radius: 8px;
  width: 100%;
  padding: 5px 0;
  font-size: 13px;
`;
export const DaysRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100% !important;
  margin-top: 10px;
`;
export const DayStyled = styled.div`
  font-weight: ${(props) => (props.month === props.today ? "900" : "400")};
  font-size: ${(props) => (props.month === props.today ? "16px" : "13px)")};
  color: ${(props) =>
    props.month === props.today ? "#000" : "rgba(0, 0, 0, 0.25)"};
  width: 40px;
  display: flex;
  justify-content: center;
  cursor: ${(props) => (props.month === props.today ? "pointer" : "none)")};
  pointer-events: ${(props) => (props.month === props.today ? "allowed" : "not-allowed)")};
  padding: 6px;
  // background-color: ${(props) => (props.isAvailable === true ? "red" : ")")};
  border-radius: 10px;
  transition: ease-in .1s;

  :hover {
    background-color: #E57F84;
    color: #F4EAE6;
  }
`;
export const AddReminderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: 0.5px solid #ffffff;
  border-radius: 8px;
  width: 100%;
  /* padding: 8px; */
  height: 40px;
`;
export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 16px;
  height: 40px;
`;
