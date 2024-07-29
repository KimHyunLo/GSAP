import { styled } from "styled-components";

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 90px;
  background-color: rgba(55, 55, 55, 0.4);
  padding: 60px;
  backdrop-filter: blur(100px);
`;

const StyledMainText = styled.div`
  font-size: 30px;
  grid-row-start: 2;
`;

const StyledSubText = styled.div`
  font-size: 20px;
  max-width: 500px;
  grid-column-start: 2;
`;

const StyledSubTextParagraph = styled.p`
  margin-top: 14px;
`;

const StyledTextAnimation = styled.div`
  position: relative;
  margin-top: 14px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 110px;
    height: 110px;
    border-radius: 100%;
    background: #e36840;
    animation: opa linear 1.5s 0s infinite;
  }
`;

const StyledTextAnimationList = styled.ul`
  display: grid;
  max-width: 800px;
`;

const StyledTextAnimationItem = styled.li`
  font-size: 65px;
  text-transform: uppercase;
  letter-spacing: -1px;
  grid-row-start: 1;
  grid-column-start: 1;
  transform: translateX(30px);
  opacity: 0;
`;

export default function Con1Section() {
  return (
    <section>
      <div className="inner">
        <StyledBox>
          <StyledMainText>
            <p>
              “ CRÉER UN PODCAST,
              <br />
              C'EST DONNER LA PAROLE ”
            </p>
          </StyledMainText>
          <StyledSubText className="subText">
            <StyledSubTextParagraph>
              Dès l’enfance, j'ai été fasciné par la diversité et la force des émotions que pouvait procurer la musique. <br />
              Puis je suis tombé amoureux de la radio.
            </StyledSubTextParagraph>
            <StyledSubTextParagraph>
              J'ai évolué dans ce milieu, entouré de légendes. Et j’ai pris conscience de la puissance de la voix.
            </StyledSubTextParagraph>
            <StyledSubTextParagraph>Aujourd’hui, le podcast est une évidence. Il est le son et le sens, en parfaite synergie.</StyledSubTextParagraph>
          </StyledSubText>
          <StyledSubText className="subText">
            <StyledSubTextParagraph>
              Permettre à chacun de partager sa passion. De transmettre son émotion.
              <br />
              Faire passer vos messages. Avec efficacité, esthétique, et plaisir. C’est notre métier.
            </StyledSubTextParagraph>
            <a href="#" className="btn">
              ÉCOUTER LE MANIFESTE
            </a>
          </StyledSubText>
        </StyledBox>
        <StyledTextAnimation className="textAni">
          <StyledTextAnimationList>
            <StyledTextAnimationItem>Do you have a (vague) idea?</StyledTextAnimationItem>
            <StyledTextAnimationItem>
              A (crazy) desire?
              <br />A message (to shout)?
            </StyledTextAnimationItem>
            <StyledTextAnimationItem>Need a little helping hand?</StyledTextAnimationItem>
            <StyledTextAnimationItem>Or do we take care of everything?</StyledTextAnimationItem>
            <StyledTextAnimationItem>You are in the right place.</StyledTextAnimationItem>
            <StyledTextAnimationItem>Contact us</StyledTextAnimationItem>
          </StyledTextAnimationList>
          <a href="#" className="btn">
            NOUS CONTACTER
          </a>
        </StyledTextAnimation>
      </div>
    </section>
  );
}
