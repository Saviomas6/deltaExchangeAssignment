import styled from "styled-components";
export const SharedModalMainContainer = styled.div<{ bgColor?: string }>`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || "#13131d"};
  z-index: 10000;
`;
export const SharedModalContainer = styled.div`
  background-color: #212332;
  color: #fff;
  padding: 20px;
  width: 400px;
  border-radius: 10px;
  position: relative;
`;

export const CloseWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
