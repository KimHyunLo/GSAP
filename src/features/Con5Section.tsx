import styled from "styled-components";
import img0 from "../assets/img0.jpg";

const StyledSection = styled.section`
  background: #fff;
  color: #141412;
  margin-bottom: 0;
`;

const StyledInner = styled.div`
  padding: 50px;
`;

const StyledMainTextHeader = styled.h2`
  font-size: 100px;
  text-transform: uppercase;
  letter-spacing: -5px;
  font-weight: normal;
`;

const StyledList = styled.ul`
  border-top: 1px solid #000;
  margin-top: 150px;
`;

const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr auto;
  border-bottom: 1px solid #000;
  padding: 10px 0;
  cursor: pointer;
`;

const StyledListItemHeader = styled.h3`
  font-size: 40px;
  letter-spacing: -1px;
  font-weight: normal;
`;

const StyledListItemParagraph = styled.p`
  align-self: center;
`;

const StyledImageBox = styled.div`
  position: absolute;
  transform: scale(0);
  opacity: 0;
  z-index: 100;
`;

export default function Con5Section() {
  return (
    <StyledSection id="con5">
      <StyledInner className="inner">
        <div className="mainTextBox">
          <StyledMainTextHeader>NOS MĒTIERS</StyledMainTextHeader>
        </div>
        <StyledList className="listBox">
          <StyledListItem>
            <StyledListItemHeader>AUTEURS</StyledListItemHeader>
            <StyledListItemParagraph>Écouter</StyledListItemParagraph>
            <StyledListItemParagraph>2024</StyledListItemParagraph>
          </StyledListItem>
          <StyledListItem>
            <StyledListItemHeader>CHEFS DE PROJET</StyledListItemHeader>
            <StyledListItemParagraph>Écouter</StyledListItemParagraph>
            <StyledListItemParagraph>2024</StyledListItemParagraph>
          </StyledListItem>
          <StyledListItem>
            <StyledListItemHeader>GRAPHISTES</StyledListItemHeader>
            <StyledListItemParagraph>Écouter</StyledListItemParagraph>
            <StyledListItemParagraph>2024</StyledListItemParagraph>
          </StyledListItem>
          <StyledListItem>
            <StyledListItemHeader>INGÉNIEURS SON</StyledListItemHeader>
            <StyledListItemParagraph>Écouter</StyledListItemParagraph>
            <StyledListItemParagraph>2024</StyledListItemParagraph>
          </StyledListItem>
          <StyledListItem>
            <StyledListItemHeader>JOURNALISTES</StyledListItemHeader>
            <StyledListItemParagraph>Écouter</StyledListItemParagraph>
            <StyledListItemParagraph>2024</StyledListItemParagraph>
          </StyledListItem>
          <StyledListItem>
            <StyledListItemHeader>RÉALISATEURS</StyledListItemHeader>
            <StyledListItemParagraph>Écouter</StyledListItemParagraph>
            <StyledListItemParagraph>2024</StyledListItemParagraph>
          </StyledListItem>
          <StyledListItem>
            <StyledListItemHeader>VOIX OFF</StyledListItemHeader>
            <StyledListItemParagraph>Écouter</StyledListItemParagraph>
            <StyledListItemParagraph>2024</StyledListItemParagraph>
          </StyledListItem>
        </StyledList>
        <StyledImageBox className="imgBox box">
          <img src={img0} alt="img0" />
        </StyledImageBox>
      </StyledInner>
    </StyledSection>
  );
}
