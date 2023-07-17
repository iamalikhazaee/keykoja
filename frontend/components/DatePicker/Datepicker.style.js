import styled from "styled-components";
export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px;
  background: lightgray;
  border-radius: 12px;
  direction: rtl;
`;

export const CalenderHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
  font-size: 12px;
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
  font-size: 11px;
`;
export const DaysRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100% !important;
  margin-top: 10px;
  font-size: 12px;
`;
export const DayStyled = styled.div`
  font-weight: ${(props) => (props.month === props.today ? "900" : "400")};
  font-size: ${(props) => (props.month === props.today ? "16px" : "13px)")};
  color: ${(props) => props.month === props.today ? "#000" : "rgba(0, 0, 0, 0.25)"};
  width: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  pointer-events: not-allowed;
  padding: 6px;
  border-radius: 10px;
  transition: ease-in .1s;
  font-size: 12px;

  :hover {
    background-color: #9ba0a8;
    color: #F4EAE6;
  }
`;
export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 16px;
  height: 40px;
`;

export const SelectedDayStyled = styled.div`
  font-weight: 900;
  // font-size: 16px;
  color: #fff;
  background-color: #9ba0a8;
  width: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  pointer-events: allowed;
  padding: 6px;
  border-radius: 10px;
  transition: ease-in .1s;

`;

export const DisableDate = styled.div`
  font-weight: 900;
  // font-size: 16px;
  color: rgba(0, 0, 0, 0.25);
  // color: rgba(0, 0, 0, 0.25);
  width: 40px;
  display: flex;
  justify-content: center;
  // cursor: pointer;
  pointer-events: not-allowed;
  // background-color: #84A98C;
  padding: 6px;
  border-radius: 10px;
  transition: ease-in .1s;

  // :hover {
  //   background-color: #52796F;
  //   color: #F4EAE6;
  // }
`;