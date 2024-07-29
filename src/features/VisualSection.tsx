import styled from "styled-components";
import J from "../assets/logo/L_J.png";
import Y from "../assets/logo/L_Y.png";
import O from "../assets/logo/L_O.png";
import U from "../assets/logo/L_U.png";
import N from "../assets/logo/L_N.png";
import G from "../assets/logo/L_G.png";

const StyledVisual = styled.section`
  margin-bottom: 0;
`;

const StyledInner = styled.div`
  max-width: fit-content;
  display: grid;
  height: 100vh;
  padding: 25px 50px;
  box-sizing: border-box;
  grid-template-rows: auto 1fr auto;
`;

const StyledMainText = styled.h1`
  max-width: fit-content;
  font-weight: normal;
  font-size: 80px;
  margin-left: auto;
  line-height: 0.9;
  letter-spacing: -2px;
`;

const StyledMainTextItem = styled.span`
  display: block;
  overflow: hidden;
`;

const StyledMainTextItemI = styled.i`
  display: block;
`;

const StyledSubText = styled.h2`
  font-weight: normal;
  font-size: 20px;
  align-self: flex-end;
  margin-bottom: 50px;
`;

const StyledSubTextSpan = styled.span`
  color: #585858;
`;

const StyledLogoWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLogoItem = styled.span`
  width: 16%;
`;

const StyledLogoItemImage = styled.img`
  width: 100%;
`;

export default function VisualSection() {
  return (
    <StyledVisual id="visual">
      <StyledInner className="inner">
        <StyledMainText>
          <StyledMainTextItem>
            <StyledMainTextItemI className="rotate">AGENCE</StyledMainTextItemI>
          </StyledMainTextItem>
          <StyledMainTextItem>
            <StyledMainTextItemI className="rotate">AUDIO CREATIVE</StyledMainTextItemI>
          </StyledMainTextItem>
        </StyledMainText>
        <StyledSubText className="subText opacity">
          Crēation, production & diffusion de podcasts.
          <br />
          <StyledSubTextSpan>À Toulouse. Et partout ailleurs.</StyledSubTextSpan>
        </StyledSubText>
        <StyledLogoWrap className="logoWrap rotate">
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
      </StyledInner>
    </StyledVisual>
  );
}
