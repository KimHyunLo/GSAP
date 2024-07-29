import styled from "styled-components";

const StyledMainTextBox = styled.div`
  position: relative;
`;

const StyledMainTextSpan = styled.span`
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledMainTextTitle = styled.p`
  font-size: 120px;
  line-height: 1;
  letter-spacing: -5px;
  overflow: hidden;

  &.b {
    text-align: center;
  }

  &.c {
    align-self: flex-start;
  }
`;

const StyledMainTextTitleI = styled.i`
  display: block;
`;

const StyledMainTextTitleIn = styled.div`
  display: flex;
  justify-content: end;
`;

const StyledMainTextVideo = styled.video`
  max-width: 550px;
  margin-right: 20px;
`;

const StyledList = styled.ul`
  margin: 100px 0;
  perspective: 900px;
`;

const StyledListItem = styled.li`
  position: sticky;
  position: -webkit-sticky;
  top: 100px;
  display: grid;
  grid-template-columns: 60% auto;
  background: #fff;
  padding: 50px 80px 60px;
  margin-bottom: 35px;
  color: #141212;
  filter: brightness(1);

  &.a h3 {
    color: #ffb84f;
  }

  &.b h3 {
    color: #90c3c4;
  }

  &.c h3 {
    color: #47b172;
  }
`;

const StyledListItemHeader2 = styled.h2`
  grid-column: 1 / -1;
  font-size: 40px;
  font-weight: normal;
  letter-spacing: -2px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 100px;
`;

const StyledListItemHeader3 = styled.h3`
  align-self: flex-end;
  font-size: 300px;
  font-weight: bold;
  line-height: 0.9;
`;

const StyledListItemText = styled.div`
  align-self: flex-end;
  line-height: 1.4;
`;

const StyledListItemTextHeader = styled.h4`
  margin-bottom: 20px;
  line-height: 1.2;
`;

const StyledListItemTextParagraph = styled.p`
  opacity: 0.5;
`;

const StyledSubTextBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledSubText = styled.div`
  max-width: 600px;
  font-size: 22px;
  grid-column-start: 2;
`;

const StyledSubTextParagraph = styled.p`
  &:nth-child(1) {
    margin-bottom: 20px;
  }
`;

export default function Con4Section() {
  return (
    <section id="con4">
      <div className="inner">
        <StyledMainTextBox className="mainTextBox">
          <StyledMainTextSpan>NOS SERVICES</StyledMainTextSpan>
          <StyledMainTextTitle className="title a">
            <StyledMainTextTitleI>CREATION</StyledMainTextTitleI>
          </StyledMainTextTitle>
          <StyledMainTextTitle className="title b">
            <StyledMainTextTitleI>PRODUCTION</StyledMainTextTitleI>
          </StyledMainTextTitle>
          <StyledMainTextTitleIn>
            <StyledMainTextVideo
              className="box"
              src="https://cdn.sanity.io/files/u6q95fqm/production/c0594d11b2a34d37493ac112d3cb8d1d315a129e.mp4"
              playsInline
              autoPlay
              loop
              muted
            />
            <StyledMainTextTitle className="title c">
              <StyledMainTextTitleI>DIFFUSION</StyledMainTextTitleI>
            </StyledMainTextTitle>
          </StyledMainTextTitleIn>
        </StyledMainTextBox>
        <StyledList className="listBox">
          <StyledListItem className="box a">
            <StyledListItemHeader2>CREATION</StyledListItemHeader2>
            <StyledListItemHeader3>1</StyledListItemHeader3>
            <StyledListItemText>
              <StyledListItemTextHeader>
                Vous avez une idée ?
                <br />
                Nous avons la méthode.
              </StyledListItemTextHeader>
              <StyledListItemTextParagraph>
                Il existe mille et une façons de faire un podcast. Nous vous aidons à trouver la vôtre. Grâce à l’expertise éditoriale et technique de
                notre équipe, nous vous aidons à choisir le meilleur format sonore pour votre projet : celui qui répondra à vos objectifs, à vos
                envies, et qui fera briller votre message.
              </StyledListItemTextParagraph>
              <StyledListItemTextParagraph>
                Construction éditoriale, durée, style de narration, choix des voix, habillage, besoins techniques : ensemble, nous donnons forme à
                votre projet.
              </StyledListItemTextParagraph>
            </StyledListItemText>
          </StyledListItem>
          <StyledListItem className="box b">
            <StyledListItemHeader2>PRODUCTION</StyledListItemHeader2>
            <StyledListItemHeader3>2</StyledListItemHeader3>
            <StyledListItemText>
              <StyledListItemTextHeader>
                Vous avez une idée ?
                <br />
                Nous avons la méthode.
              </StyledListItemTextHeader>
              <StyledListItemTextParagraph>
                Il existe mille et une façons de faire un podcast. Nous vous aidons à trouver la vôtre. Grâce à l’expertise éditoriale et technique de
                notre équipe, nous vous aidons à choisir le meilleur format sonore pour votre projet : celui qui répondra à vos objectifs, à vos
                envies, et qui fera briller votre message.
              </StyledListItemTextParagraph>
              <StyledListItemTextParagraph>
                Construction éditoriale, durée, style de narration, choix des voix, habillage, besoins techniques : ensemble, nous donnons forme à
                votre projet.
              </StyledListItemTextParagraph>
            </StyledListItemText>
          </StyledListItem>
          <StyledListItem className="box c">
            <StyledListItemHeader2>DIFFUSION</StyledListItemHeader2>
            <StyledListItemHeader3>3</StyledListItemHeader3>
            <StyledListItemText>
              <StyledListItemTextHeader>
                Vous avez une idée ?
                <br />
                Nous avons la méthode.
              </StyledListItemTextHeader>
              <StyledListItemTextParagraph>
                Il existe mille et une façons de faire un podcast. Nous vous aidons à trouver la vôtre. Grâce à l’expertise éditoriale et technique de
                notre équipe, nous vous aidons à choisir le meilleur format sonore pour votre projet : celui qui répondra à vos objectifs, à vos
                envies, et qui fera briller votre message.
              </StyledListItemTextParagraph>
              <StyledListItemTextParagraph>
                Construction éditoriale, durée, style de narration, choix des voix, habillage, besoins techniques : ensemble, nous donnons forme à
                votre projet.
              </StyledListItemTextParagraph>
            </StyledListItemText>
          </StyledListItem>
        </StyledList>
        <StyledSubTextBox>
          <StyledSubText className="subText">
            <StyledSubTextParagraph>
              Chez Qude, on n’a pas de petits ni de gros projets. On n’a que de l’humain, de la créativité, du partage.
            </StyledSubTextParagraph>
            <StyledSubTextParagraph>
              Chaque podcast doit être une succession de moments de plaisir. De moments d'exception. La conception, la production, la diffusion. Et
              l'écoute.
            </StyledSubTextParagraph>
          </StyledSubText>
        </StyledSubTextBox>
      </div>
    </section>
  );
}
