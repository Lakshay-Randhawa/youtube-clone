import React, { useState } from "react";
import styled from "styled-components";
import logo from "../img/youtube-logo.png";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import categories from "../assets/constant";

export const Menu = (props) => {
  const { darkMode, setDarkMode } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container isMenuOpen>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Logo>
            {isMenuOpen ? (
              <CloseIcon onClick={handleMenuClick} />
            ) : (
              <MenuIcon onClick={handleMenuClick} />
            )}

            <Img src={logo} />
            <LogoText>Youtube</LogoText>
          </Logo>
        </Link>

        <ItemsWrapper>
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <Item>
                {category.icon}
                {category.name}
              </Item>
              {category.divider && <Hr />}
            </React.Fragment>
          ))}
        </ItemsWrapper>

        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  @media (max-width: 768px) {
    display: none;
  }
  left: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const LogoText = styled.span`
  font-size: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Img = styled.img`
  height: 25px;
`;

const ItemsWrapper = styled.div`
  background-color: "green";
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
