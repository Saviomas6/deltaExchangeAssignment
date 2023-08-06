import { keyframes, styled } from "styled-components";
import { Field } from "formik";
export const Container = styled.div<any>`
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding-right: var(1.5rem, 0.75rem);
  padding-left: var(1.5rem, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 90%;
  }
  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 992px) {
    max-width: 90%;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const opacityAnimation = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const OpacityAnimation = styled.div<any>`
  animation: ${opacityAnimation} 1s;
`;

export const Wrapper = styled.div`
  padding: 100px 0;
`;

export const SkeletonLoadingAnimation = () => keyframes`
  0% {
    background:#2b3641
  }
  100% {
    background: #7A798A;
  }
`;

export const ModalHeading = styled.div`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  text-align: center;
`;

export const InputFieldMainWrapper = styled.div``;
export const InputLabel = styled.label`
  display: block;
  font-size: 18px;
  color: #fff;
  margin: 6px 0;
`;

export const InputFieldWrapper = styled.div`
  position: relative;
`;

export const InputField = styled(Field)`
  height: 45px;
  width: 100%;
  outline: none;
  border-radius: 10px;
  border: none;
  box-sizing: border-box;
  background-color: #fff;
  color: #000;
  font-size: 18px;
  padding: 0 26px;
`;
export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 20px;
`;
export const PasswordHideUnHideContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 16px;
  display: flex;
  cursor: pointer;
`;
export const ErrorMessageText = styled.div`
  color: #ff0000;
  font-size: 16px;
`;
