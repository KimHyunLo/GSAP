import J from "../assets/logo/S_J.png";
import Y from "../assets/logo/S_Y.png";
import O from "../assets/logo/S_O.png";
import U from "../assets/logo/S_U.png";
import N from "../assets/logo/S_N.png";
import G from "../assets/logo/S_G.png";
import styled from "styled-components";

const StyledLoading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: none;
  width: 100%;
  height: 100vh;
  background: #141212;
  z-index: 9999;

  &.scene1 {
    display: block;

    .logo span {
      animation-name: up;
      animation-duration: 1s;
    }
  }

  &.scene2 .logo span {
    &:nth-child(1) {
      opacity: 0;
      transition: 0.1s;
    }

    &:nth-child(2) {
      opacity: 0;
      transition: 0.3s;
    }

    &:nth-child(3) {
      opacity: 0;
      transition: 0.5s;
    }

    &:nth-child(4) {
      opacity: 0;
      transition: 0.6s;
    }

    &:nth-child(5) {
      opacity: 0;
      transition: 0.7s;
    }

    &:nth-child(6) {
      opacity: 0;
      transition: 0.8s;
    }
  }
`;

const StyledLogo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 200px;
  overflow: hidden;
`;

const StyledLogoSpan = styled.span`
  display: block;
  padding: 0 1px;
`;

const StyledLogoImage = styled.img`
  width: 100%;
`;

export default function Loading() {
  return (
    <StyledLoading className="loading">
      <StyledLogo className="logo">
        <StyledLogoSpan>
          <StyledLogoImage src={J} alt="J" />
        </StyledLogoSpan>
        <StyledLogoSpan>
          <StyledLogoImage src={Y} alt="Y" />
        </StyledLogoSpan>
        <StyledLogoSpan>
          <StyledLogoImage src={O} alt="O" />
        </StyledLogoSpan>
        <StyledLogoSpan>
          <StyledLogoImage src={U} alt="U" />
        </StyledLogoSpan>
        <StyledLogoSpan>
          <StyledLogoImage src={N} alt="N" />
        </StyledLogoSpan>
        <StyledLogoSpan>
          <StyledLogoImage src={G} alt="G" />
        </StyledLogoSpan>
      </StyledLogo>
    </StyledLoading>
  );
}
