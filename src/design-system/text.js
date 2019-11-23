import styled, { css } from "styled-components";
const SIZES = {
  mini: "12px",
  tiny: "13px",
  small: "14px",
  medium: "15px",
  large: "16px",
  big: "19px",
  huge: "21px",
  massive: "24px"
};
const Text = styled.div`
  font-size: ${({ size }) => SIZES[size] || SIZES.small};

  ${({ inlineBlock }) =>
    inlineBlock &&
    css`
      display: inline-block;
    `}

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}

    ${({ margin }) =>
      margin &&
      css`
        margin-top: ${margin.top}px;
        margin-right: ${margin.right}px;
        margin-bottom: ${margin.bottom}px;
        margin-left: ${margin.left}px;
      `}

  ${({ padding }) =>
    padding &&
    css`
      padding-top: ${padding.top}px;
      padding-right: ${padding.right}px;
      padding-bottom: ${padding.bottom}px;
      padding-left: ${padding.left}px;
    `}


`;

export default Text;
