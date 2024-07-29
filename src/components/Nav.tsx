import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  text-align: center;
`;

const StyledMenuParagraph = styled.p`
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  font-size: 10px;
  padding: 30px 0;
  z-index: 10;
  cursor: pointer;

  &:hover::before {
    width: 165px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 5px;
    background: #fff;
    border-radius: 30px;
    transition: all 0.3s;
  }
`;

const StyledMenu = styled.ul`
  position: absolute;
  top: -1000%;
  left: 50%;
  transform: translateX(-50%);
  width: 99%;
  background-color: rgba(55, 55, 55, 0.4);
  backdrop-filter: blur(30px);
  border-radius: 5px;
  padding: 100px 0 30px;
  box-sizing: border-box;
  transition: all 1.5s;

  &.on {
    top: 10px;
    transition: all 0.4s;

    & li {
      a {
        transform: translateY(0);
      }

      &:nth-child(2) a {
        transition-delay: 0.05s;
      }
      &:nth-child(3) a {
        transition-delay: 0.1s;
      }
      &:nth-child(4) a {
        transition-delay: 0.15s;
      }
    }
  }
`;

const StyledMenuItem = styled.li`
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: 40px;
  transform: translateY(-100px);
  transition: all 0.6s;
`;

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuOpen() {
    setIsMenuOpen((is) => !is);
  }

  return (
    <StyledNav>
      <StyledMenuParagraph onClick={handleMenuOpen}>MENU</StyledMenuParagraph>
      <StyledMenu className={isMenuOpen ? "on" : ""}>
        <StyledMenuItem>
          <StyledLink to="#">HOME</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledLink to="#">ABOUT</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledLink to="#">WORK</StyledLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledLink to="#">PORTFOLIO UX</StyledLink>
        </StyledMenuItem>
      </StyledMenu>
    </StyledNav>
  );
}
