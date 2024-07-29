import J from "../assets/logo/L_J.png";
import Y from "../assets/logo/L_Y.png";
import O from "../assets/logo/L_O.png";
import U from "../assets/logo/L_U.png";
import N from "../assets/logo/L_N.png";
import G from "../assets/logo/L_G.png";
import styled from "styled-components";

const StyledLogoWrap = styled.div`
  position: absolute;
  left: 0;
  top: -50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

const StyledLogoItem = styled.span`
  width: 16%;
`;

const StyledLogoItemImage = styled.img`
  width: 100%;
`;

const StyledFooter = styled.footer`
  position: relative;
  overflow: hidden;
`;

const StyledInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 75px 75px 25px;
  box-sizing: border-box;
  z-index: 2;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 50px 0 0;
  background-color: rgba(55, 55, 55, 0.4);
  backdrop-filter: blur(100px);
`;

const StyledMainTextBox = styled.div`
  text-align: center;
`;

const StyledMainTextBoxHeader = styled.h2`
  font-size: 120px;
  text-transform: uppercase;
  letter-spacing: -1px;
  font-weight: normal;
  margin-bottom: 30px;
`;

const StyledMainTextBoxSpan = styled.span`
  display: block;
  opacity: 0.5;
`;

const StyledTalkButton = styled.div`
  display: grid;
  place-items: center;
  flex-grow: 1;
`;

const StyledTalkButtonAnchor = styled.a`
  display: block;
  width: 95px;
  height: 95px;
  border-radius: 100%;
  box-shadow: 0 0 0 13px #1c1c1c, 0 0 50px rgba(255, 255, 255, 0.3);

  &:hover span {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;

const StyledTalkButtonSpan = styled.span`
  display: block;
  width: 95%;
  height: 95%;
  margin: 2.5% auto;
  border-radius: 100%;
  background: #e36840;
  transition: all 0.3s;
`;

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const StyledButton = styled.a`
  margin: 20px;
  padding: 10px;
  background: transparent;
  color: #fff;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

const StyledCopyright = styled.div`
  font-size: 14px;
  text-align: center;
  padding-top: 25px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledInner className="inner">
        <StyledBox className="box">
          <StyledMainTextBox>
            <StyledMainTextBoxHeader>LET'S TALK</StyledMainTextBoxHeader>
            <p>
              <StyledMainTextBoxSpan>Prise de contact, témoignage ou simple bonjour...</StyledMainTextBoxSpan>
              Laissez nous un message audio
              <br />
              et vos coordonnées si vous souhaitez être recontacté.
            </p>
          </StyledMainTextBox>
          <StyledTalkButton>
            <StyledTalkButtonAnchor href="#">
              <StyledTalkButtonSpan></StyledTalkButtonSpan>
            </StyledTalkButtonAnchor>
          </StyledTalkButton>
          <StyledButtonBox>
            <StyledButton href="#" className="btn">
              email
            </StyledButton>
            <StyledButton href="#" className="btn">
              call
            </StyledButton>
            <StyledButton href="#" className="btn">
              facebook
            </StyledButton>
            <StyledButton href="#" className="btn">
              instagram
            </StyledButton>
          </StyledButtonBox>
        </StyledBox>
        <StyledCopyright>
          <p>Jyoung &#64; 2024</p>
        </StyledCopyright>
      </StyledInner>
      <StyledLogoWrap className="logoWrap">
        <StyledLogoItem id="j">
          <StyledLogoItemImage src={J} alt="J" />
        </StyledLogoItem>
        <StyledLogoItem id="y">
          <StyledLogoItemImage src={Y} alt="Y" />
        </StyledLogoItem>
        <StyledLogoItem id="o">
          <StyledLogoItemImage src={O} alt="O" />
        </StyledLogoItem>
        <StyledLogoItem id="u">
          <StyledLogoItemImage src={U} alt="U" />
        </StyledLogoItem>
        <StyledLogoItem id="n">
          <StyledLogoItemImage src={N} alt="N" />
        </StyledLogoItem>
        <StyledLogoItem id="g">
          <StyledLogoItemImage src={G} alt="G" />
        </StyledLogoItem>
      </StyledLogoWrap>
    </StyledFooter>
  );
}
