import React from 'react';
import styled from 'styled-components'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const StyledTopbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
      width: 1280px;
  }
`;
const StyledContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;
const StyledSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;
const StyledContainerCenter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;
const StyledSpanCenter = styled.span`
  cursor: pointer;
  margin-right: 5%;
  span:hover {
    text-decoration: underline;
  }
`;
const StyledContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
const StyledSpanRight = styled.span`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <StyledTopbar>
      <StyledContainer>
        <StyledContainerLeft>
          <StyledSpan>TOPICS</StyledSpan><StyledSpan>SEARCH</StyledSpan>
        </StyledContainerLeft>
        <StyledContainerCenter>
          <StyledSpanCenter>GENERAL</StyledSpanCenter><StyledSpanCenter>BROWNBAG</StyledSpanCenter><StyledSpanCenter>RANDOM</StyledSpanCenter><StyledSpanCenter>MUSIC</StyledSpanCenter><StyledSpanCenter>ANNOUNCEMENTS</StyledSpanCenter>
        </StyledContainerCenter>
        <StyledContainerRight>
          <StyledSpanRight>LOG IN</StyledSpanRight>
        </StyledContainerRight>
      </StyledContainer>
    </StyledTopbar>
  )
}

export default TopBar;