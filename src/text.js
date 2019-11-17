import styled from "styled-components";
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
`;

export default Text;
