import styled from "styled-components";
import J from "../assets/logo/S_J.png";
import Y from "../assets/logo/S_Y.png";
import O from "../assets/logo/S_O.png";
import U from "../assets/logo/S_U.png";
import N from "../assets/logo/S_N.png";
import G from "../assets/logo/S_G.png";
import Nav from "./Nav.tsx";

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 9999;
`;

const StyledInner = styled.div`
  padding: 30px 50px 0;
`;

const StyledLogo = styled.a`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

const StyledLogoItem = styled.span`
  padding: 0 1px;
`;

const StyledImage = styled.img`
  width: 100%;
`;

export default function Header() {
  return (
    <StyledHeader className="opacity">
      <StyledInner className="inner">
        <StyledLogo href="#">
          <StyledLogoItem>
            <StyledImage src={J} alt="J" />
          </StyledLogoItem>
          <StyledLogoItem>
            <StyledImage src={Y} alt="Y" />
          </StyledLogoItem>
          <StyledLogoItem>
            <StyledImage src={O} alt="O" />
          </StyledLogoItem>
          <StyledLogoItem>
            <StyledImage src={U} alt="U" />
          </StyledLogoItem>
          <StyledLogoItem>
            <StyledImage src={N} alt="N" />
          </StyledLogoItem>
          <StyledLogoItem>
            <StyledImage src={G} alt="G" />
          </StyledLogoItem>
        </StyledLogo>
        <Nav />
      </StyledInner>
    </StyledHeader>
  );
}
