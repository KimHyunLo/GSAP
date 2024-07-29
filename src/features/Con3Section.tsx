import styled from "styled-components";
import projects from "../assets/projects.png";

const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTextBox = styled.div`
  width: 28%;
`;

const StyledTextHeader = styled.h4`
  position: sticky;
  position: -webkit-sticky;
  top: 50%;
  transform: translateY(-50%);
  font-size: 60px;
  font-weight: normal;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 70%;
  perspective: 900px;
  overflow: hidden;
`;

const StyledListItem = styled.li`
  width: 32.2%;
  --sub-color: ${(props) => {
    switch (props.color) {
      case "a":
        return "#e1dbfb";
      case "b":
        return "#90c3cd";
      case "c":
        return "#ff764a";
      case "d":
        return "#47b172";
      case "e":
        return "#ffb84f";
    }
  }};
`;

const StyledListItemImageBox = styled.span`
  display: block;
  background: var(--sub-color);
  border-radius: 10px;
  text-align: center;
  padding: 30% 0;
`;

const StyledListItemImage = styled.img`
  width: 40%;
`;

const StyledListItemTitle = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 15px 0 50px;
  font-weight: normal;

  .b {
    opacity: 0.5;
  }
`;

export default function Con3Section() {
  return (
    <section id="con3">
      <StyledInner className="inner">
        <StyledTextBox>
          <StyledTextHeader>My Projects</StyledTextHeader>
        </StyledTextBox>
        <StyledList className="listBox">
          <StyledListItem color="a">
            <p>
              <StyledListItemImageBox>
                <StyledListItemImage src={projects} alt="projects" />
              </StyledListItemImageBox>
              <StyledListItemTitle>
                <span className="a">Title</span>
                <span className="b">2024</span>
              </StyledListItemTitle>
            </p>
          </StyledListItem>
          <StyledListItem color="b">
            <p>
              <StyledListItemImageBox>
                <StyledListItemImage src={projects} alt="projects" />
              </StyledListItemImageBox>
              <StyledListItemTitle>
                <span className="a">Title</span>
                <span className="b">2024</span>
              </StyledListItemTitle>
            </p>
          </StyledListItem>
          <StyledListItem color="c">
            <p>
              <StyledListItemImageBox>
                <StyledListItemImage src={projects} alt="projects" />
              </StyledListItemImageBox>
              <StyledListItemTitle>
                <span className="a">Title</span>
                <span className="b">2024</span>
              </StyledListItemTitle>
            </p>
          </StyledListItem>
          <StyledListItem color="d">
            <p>
              <StyledListItemImageBox>
                <StyledListItemImage src={projects} alt="projects" />
              </StyledListItemImageBox>
              <StyledListItemTitle>
                <span className="a">Title</span>
                <span className="b">2024</span>
              </StyledListItemTitle>
            </p>
          </StyledListItem>
          <StyledListItem color="e">
            <p>
              <StyledListItemImageBox>
                <StyledListItemImage src={projects} alt="projects" />
              </StyledListItemImageBox>
              <StyledListItemTitle>
                <span className="a">Title</span>
                <span className="b">2024</span>
              </StyledListItemTitle>
            </p>
          </StyledListItem>
          <StyledListItem color="a">
            <p>
              <StyledListItemImageBox>
                <StyledListItemImage src={projects} alt="projects" />
              </StyledListItemImageBox>
              <StyledListItemTitle>
                <span className="a">Title</span>
                <span className="b">2024</span>
              </StyledListItemTitle>
            </p>
          </StyledListItem>
          <StyledListItem color="b">
            <p>
              <StyledListItemImageBox>
                <StyledListItemImage src={projects} alt="projects" />
              </StyledListItemImageBox>
              <StyledListItemTitle>
                <span className="a">Title</span>
                <span className="b">2024</span>
              </StyledListItemTitle>
            </p>
          </StyledListItem>
          <StyledListItem color="c">
            <p>
              <StyledListItemImageBox>
                <StyledListItemImage src={projects} alt="projects" />
              </StyledListItemImageBox>
              <StyledListItemTitle>
                <span className="a">Title</span>
                <span className="b">2024</span>
              </StyledListItemTitle>
            </p>
          </StyledListItem>
          <StyledListItem color="d">
            <p>
              <StyledListItemImageBox>
                <StyledListItemImage src={projects} alt="projects" />
              </StyledListItemImageBox>
              <StyledListItemTitle>
                <span className="a">Title</span>
                <span className="b">2024</span>
              </StyledListItemTitle>
            </p>
          </StyledListItem>
        </StyledList>
      </StyledInner>
    </section>
  );
}
