import styled from "styled-components";
import VisualSection from "./features/VisualSection";
import Con1Section from "./features/Con1Section";
import Con2Section from "./features/Con2Section";
import Con3Section from "./features/Con3Section";
import Con4Section from "./features/Con4Section";
import Con5Section from "./features/Con5Section";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useAnimation } from "./gsap/useAnimation";

const StyledApp = styled.div`
  position: relative;
  margin: 0 auto;
  background: #141212;
  color: #fff;

  &.on {
    overflow: hidden;
  }
`;

export default function App() {
  useAnimation();

  return (
    <>
      <StyledApp id="wrap">
        <Header />
        <VisualSection />
        <Con1Section />
        <Con2Section />
        <Con3Section />
        <Con4Section />
        <Con5Section />
        <Footer />
      </StyledApp>
      <Loading />
    </>
  );
}
