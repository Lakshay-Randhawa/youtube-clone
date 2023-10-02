import React from "react";
import styled from "styled-components";
import logo from "../img/youtube-logo.png";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";
import categories from "../assets/constant";

export const Menu = (props) => {
  const { darkMode, setDarkMode } = props;

  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Logo>
            <Img src={logo} />
            YouTube
          </Logo>
        </Link>

        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <Item>
              {category.icon}
              {category.name}
            </Item>
            {category.divider && <Hr />}
          </React.Fragment>
        ))}

        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
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
